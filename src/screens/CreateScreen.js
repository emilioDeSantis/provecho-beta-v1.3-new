//Copyright 2020, Provecho, All rights reserved.

import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow, Hashtag } from '../models'
import { Todo } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import * as storage from '../functions/storage'
import AuthenticationScreen from './AuthenticationScreen'
import ImageButton from '../components/ImageButton'
import ImagePreview from '../components/ImagePreview'
import style from '../style'

import { useUser, useSetUser } from '../context'
import TopScreen from './TopScreen';
import Header from '../components/Header'

function CreateScreen() {

    const route = useRoute();

    const [uri, setUri] = useState(null)
    const [isOriginal, setIsOriginal] = useState(true)
    const user = useUser()
    // console.log(user);
    const [title, setTitle] = useState('')
    const [serves, setServes] = useState('')
    const [cook_time, setCook_time] = useState('')
    const [caption, setCaption] = useState('')
    const [tip, setTip] = useState('')
    const [hashtags, setHashtags] = useState([])
    const [procedure, set_procedure] = useState([])



    const onSubmit = async () => {

//still ussue with hashtags having an epmty elemt in array

        //backgroound uplaod
        try {
            var chef = await DataStore.query(Chef, user.user_id)
            // console.log('chef... ',chef);
            const key = await storage.upload(uri)
            // const key = 'testkey'
            //if it fails delete image
            //possile issue with connecting them/general warning im ignroing
            //remove duplacate hastags
            let hashtags_input = hashtags.map(item => {
                if (item != '') {
                    return item
                }
            })
            if(isOriginal){

                const procedure_input = procedure.map((step) => {
                    return {step}
                })

                const predicate = c => c.or(
                    c => {
                        hashtags_input.forEach(name => {
                            c = c.name("eq", name)
                        })
                    }
                )

                const existing_hashtags = await DataStore.query(Hashtag, predicate);
                const hashtag_filter = existing_hashtags.map((item) => {
                    return item.name
                })

                const new_hashtags = hashtags_input.filter(function(obj) { return hashtag_filter.indexOf(obj) == -1; })
                // console.log('hashtags inout... ', hashtags_input);

                await new_hashtags.forEach( async (name) => {
                    await DataStore.save(
                        new Hashtag({
                            name
                        })
                    )
                })
                //pordecure is fualty
                const recipe = await DataStore.save(
                    new Recipe({
                        title,
                        image: key,
                        serves: parseInt(serves),
                        cook_time: parseInt(cook_time),
                        n_tips: 0,
                        //igredients
                        procedure: procedure_input,
                        chefID: chef.id,
                        chef,
                    })
                )
                const post = await DataStore.save(
                    new Post({
                        title,
                        caption,
                        image: key,
                        type: PostType.ORIGINAL,
                        n_likes: 0,
                        n_comments: 0,
                        n_tips: 0,
                        rating: 0,
                        chefID: chef.id,
                        chef,
                        hashtags: hashtags_input,
                        recipe,
                    })
                )
                await DataStore.save(
                    Recipe.copyOf(recipe, updated => {
                        updated.postID = post.id
                    })
                )
            } else {
                const recipe = await DataStore.query(Recipe, route.params.recipe.id)
                const post = await DataStore.query(Post, route.params.recipe.postID)
                await DataStore.save(
                    Chef.copyOf(chef, updated => {
                        updated.n_remakes = chef.n_remakes + 1
                    })
                )
                await DataStore.save(
                    Chef.copyOf(post, updated => {
                        updated.n_tips = chef.n_tips + 1
                        updated.rating = chef.rating + 50
                    })
                )
                await DataStore.save(
                    Chef.copyOf(recipe, updated => {
                        updated.n_tips = chef.n_tips + 1
                    })
                )
                const remake = await DataStore.save(
                    new Post({
                        title,
                        caption,
                        image: key,
                        type: PostType.REMAKE,
                        n_likes: 0,
                        n_comments: 0,
                        n_tips: 0,
                        rating: 0,
                        chefID: chef.id,
                        chef,
                        hashtags: post.hashtags,
                        recipe,
                    })
                )
                await DataStore.save(
                    new Tip({
                        text: tip,
                        chefID: chef.id,
                        recipeID: recipe.id,
                        postID: post.id,
                        chef,
                        recipe,
                        post,
                        remake,
                    })
                )
            }
        } catch (error) {
            // console.log('error!!!... ', error);
        }
    }

    if (user.isLoggedin) {
        return (
            <>
                <Header header={'create'}/>
                <ScrollView contentContainerStyle={{ top:0, alignItems: 'center', justifyContent: 'center' }}>
                    <ImageButton isCamera={true} setUri={setUri} is_profile_picture={false}></ImageButton>
                    <ImageButton isCamera={false} setUri={setUri} is_profile_picture={false}></ImageButton>
                    <ImagePreview uri={uri}></ImagePreview>
                    <CreateButton function={setIsOriginal} input={true} title={'original'}></CreateButton>
                    <CreateButton function={setIsOriginal} input={false} title={'remake'}></CreateButton>
                    {/* add search for recipes and add stash view */}
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setTitle(text)}
                        placeholder={'title'}
                        value={title}
                    />
                    {isOriginal && <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setServes(text)}
                        placeholder={'serves'}
                        keyboardType={'numeric'}
                        value={serves}
                    />}
                    {isOriginal && <TextInput
                        style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => set_procedure(text.split(/\r?\n/g))}
                        multiline={true}
                        placeholder={'procedure'}
                        value={multiline_to_string(procedure)}
                    />}
                    {isOriginal && <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setCook_time(text)}
                        placeholder={'cook time'}
                        keyboardType={'numeric'}
                        value={cook_time}
                    />}
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setCaption(text)}
                        placeholder={'caption'}
                        value={caption}
                    />
                    {isOriginal && <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setHashtags(toArray(text))}
                        placeholder={'hashtags'}
                        value={toString(hashtags)}
                    />}
                    {!isOriginal && <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setTip(text)}
                        placeholder={'tip'}
                        value={tip}
                    />}
                    <TouchableOpacity
                        style={{
                            height: 100,
                            width: 200,
                            borderRadius: 50,
                            backgroundColor: '#3b9'
                        }}
                        onPress={() => onSubmit()}
                        activeOpacity={1}
                        // onPress={() => DataStore.clear()}
                    >
                        <Text>upload</Text>
                    </TouchableOpacity>
                </ScrollView>
            </>
        );
    } else {
        return (
            <AuthenticationScreen></AuthenticationScreen>
        )
    }
}

function CreateButton(props) {
    return(
        <TouchableOpacity
            style={{
                height: 100,
                width: 200,
                borderRadius: 50,
                backgroundColor: '#ffe488'
            }}
            onPress={() => props.function(props.input)}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}



const multiline_to_string = (array) => {
    if (array.length == 0) array = ['']
    console.log('multiline procidure... ',array);
    let string = ''
    const last_item = array.pop()
    array.forEach(element => {
        string += element + '\r\n'
    })
    string += last_item
    return string
}

const toArray = (text) => {
    text = text.replace('  ', ' ')
    text = text.replace(/#/g, '')
    const array = text.split(' ')
    // console.log(array);
    return array
}

const toString = (array) => {
    if (array.length == 0) array = ['']
    // console.log('huuustagfds... ',array);
    let add_space = false
    let string = ''
    const last_item = array.pop()
    array.forEach(element => {
        if (add_space) {
            string += ' '
        }
        string += '#' + element
        add_space = true
    })
    if (add_space) {
        string += ' '
    }
    string += last_item
    array.push(last_item)
    return string
}


export default CreateScreen;
