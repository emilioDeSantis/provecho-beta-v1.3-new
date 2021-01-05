//Copyright 2020, Provecho, All rights reserved.

import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});
import ImageButton from '../components/ImageButton'
import ImagePreview from '../components/ImagePreview'
import * as storage from '../functions/storage'

import { useUser, useSetUser } from '../context'

const ConfirmSignUp = (props) => {
    const [code, setCode] = useState('')
    const [biography, setBiography] = useState('')
    const [uri, setUri] = useState(null)
    const setUser = useSetUser()
    const onSubmit = async () => {
        try {
            await Auth.confirmSignUp( props.state.username, code )
            const user = await Auth.signIn(props.state.username, props.state.password)
            // console.log('uathuserretrued...', user);
            const key = await storage.upload(uri)
            // const key = 'fake key'
            const chef = await DataStore.save(
                new Chef({
                    username: props.state.username,
                    biography,
                    n_followers: 0,
                    n_following: 0,
                    n_remakes: 0,
                    image: key,
                })
            );
            const formatted_chef = await storage.format_chef(chef)
            // console.log('new chef ... ',chef);
            //make error hanlding work
            await props.onStateChange('signedIn', user)
            //warning comers fornm here?
            setUser({
                isLoggedin: true,
                username: chef.username,
                id: chef.id,
                chef: formatted_chef,
            }) 
            props.setState({
                ...props.state,
                username: '',
                password: '',
            })
        } catch (error) {
            alert(error.message)
        }
    }
    if(props.authState === 'confirmSignUp')
        return (
            <View>
                <Text>confirm sign up</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setCode(text)}
                    placeholder={'code'}
                    value={code}
                />
                <ImageButton isCamera={true} setUri={setUri} is_profile_picture={true}></ImageButton>
                <ImageButton isCamera={false} setUri={setUri} is_profile_picture={true}></ImageButton>
                <ImagePreview uri={uri}></ImagePreview>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setBiography(text)}
                    placeholder={'biography'}
                    value={biography}
                />
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => onSubmit()}
                >
                    <Text>submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => props.onStateChange('signIn', {})}
                >
                    <Text>back to sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => props.onStateChange('signUp', {})}
                >
                    <Text>back to sign up</Text>
                </TouchableOpacity>
            </View>
        )
    else return <></>
}

export default ConfirmSignUp