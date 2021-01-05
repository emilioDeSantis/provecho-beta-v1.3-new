//Copyright 2020, Provecho, All rights reserved.

import React, {useState} from 'react';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import { StackActions, useNavigation, useNavigationBuilder, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import style from '../style';
import Amplify, { Storage } from 'aws-amplify'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as storage from '../functions/storage'
import * as global from '../functions/global'
import { useUser, useSetUser } from '../context'
import LikeIcon from '../assets/icons/like_icon.js'
import CommentIcon from '../assets/icons/comment_icon.js'

import Stream from './Stream'
import TriPost from './TriPost'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import ChefThumbnail from './ChefThumbnail'
import { ScrollView } from 'react-native-gesture-handler';
var width = Dimensions.get('window').width;

function RecipeButton(props) {

    const navigation = useNavigation();

    const user = useUser()

    return (
        <TouchableOpacity 
            style= {style.recipe_button}
            onPress={() => global.go_to_recipe(props,user.chef.id,navigation)}
            activeOpacity={1}
        >
            <Image
                style = {{
                    height: '100%'
                }}
                source={{
                    uri: props.image,
                }}
            />
        </TouchableOpacity>
    );
}

const Remakes = (props) => {

    const fetchPosts = async (page, limit) => {
        const db_data = await DataStore.query(Post)
        // console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        console.log("tryposts... ",tri_posts);
        return tri_posts
    }

    return (
        <View style={style.remakes_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts} horizontal={true} is_rotated={true}/>
        </View>
    );
}

const LikeButton = (props) => {
    const [is_liked, set_is_liked] = useState(props.is_liked)
    const navigation = useNavigation()
    const user = useUser()

    const like = () => {
        global.like(user.user_id, props.id)
        set_is_liked(true)
    }

    const unlike = () => {
        global.unlike(user.user_id, props.id)
        set_is_liked(false)
    }

    return(
        <View style={style.like_button_container}>
            {is_liked && <TouchableOpacity 
                style= {style.liked_button}
                onPress={() => unlike()}
                activeOpacity={1}
            >
                <LikeIcon is_liked={true}/>
            </TouchableOpacity>}
            {!is_liked && <TouchableOpacity 
                style= {style.like_button}
                onPress={() => like()}
                activeOpacity={1}
            >
                <LikeIcon is_liked={false}/>
            </TouchableOpacity>}
            <TouchableOpacity 
                activeOpacity={1}
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal', {
                        tab:'likes',
                        post: props,
                    })
                }}
                activeOpacity={1}
            >
                <Text style={style.number_text}>{props.n_likes}</Text>
            </TouchableOpacity> 
        </View>
    )
}

const CommentButton = (props) => {
    const navigation = useNavigation()
    return(
        <View style={style.comment_button_container}>
            <TouchableOpacity 
                style= {style.comment_button}
                onPress={() => alert('comment')}
                activeOpacity={1}
            >
                <CommentIcon/>
            </TouchableOpacity> 
            <TouchableOpacity 
                activeOpacity={1}
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal',{
                        tab:'comments',
                        post: props,
                    })
                }}
            >
                <Text style={style.number_text}>{props.n_comments}</Text>
            </TouchableOpacity> 
        </View>
    )
}

const TipButton = (props) => {
    const navigation = useNavigation()
    return(
        <View style={style.tip_button_container}>
            <TouchableOpacity 
                style= {style.tip_button}
                onPress={() => alert('tip')}
                activeOpacity={1}
            >
                <Text>tip</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    navigation.navigate('like modal',{
                        tab:'tips',
                        post: props,
                    })
                }}
                activeOpacity={1}
            >
                <Text style={style.number_text}>{props.n_tips}</Text>
            </TouchableOpacity> 
        </View>
    )
}

function PostComp(props) {
//get it to scoll whiel formatted correctly
//make sure it doesnt load until it neads to
    // console.log('props... ', props);
    return (
        //remkaes inside of post
        // <View style={style.post}>
        //     <Text style={{
        //         position: 'absolute',
        //         top: 50,
        //         left: 140,
        //     }}>
        //         {props.chef.username}
        //     </Text>
        //     <InvertibleScrollView 
        //         inverted 
        //         style={style.post_scroll} 
        //         decelerationRate={0} 
        //         snapToInterval={width} 
        //         snapToAlignment={'center'} 
        //         horizontal={true}
        //         showsHorizontalScrollIndicator={false}
        //     >
        //         <View style={{width, height: width*1.25, }}>
        //             <RecipeButton {...props} image={props.image}/>
        //         </View>
        //         <View style={{width, height: width*1.25, backgroundColor: 'blue',}}>
        //             <Remakes/>
        //             {/* <View style={style.post_button_container}>
                        
        //             </View> */}
        //         </View>
        //     </InvertibleScrollView>
        //     <View style={style.post_button_container}>
        //         <LikeButton {...props}/>
        //         <CommentButton {...props}/>
        //         {/* <TipButton {...props}/> */}
        //     </View>
        //     <ChefThumbnail chef={props.chef}/>
        // </View>
        <View style={style.post}>
            <Text style={{
                position: 'absolute',
                top: 50,
                left: 140,
            }}>
                {props.chef.username}
            </Text>
            {/* <View style={{width, height: width*1.25, }}> */}
                <RecipeButton {...props} image={props.image}/>
            {/* </View> */}
            <View style={style.post_button_container}>
                <LikeButton {...props}/>
                <CommentButton {...props}/>
                {/* <TipButton {...props}/> */}
            </View>
            <ChefThumbnail chef={props.chef}/>
        </View>
    );
}

export default PostComp;