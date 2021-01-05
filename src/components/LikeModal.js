//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute, useNavigationState, useNavigationBuilder } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { useUser, useSetUser } from '../context'


import * as storage from '../functions/storage'
import * as global from '../functions/global'
import BackButton from '../components/BackButton'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'
import LikeTabBar from '../components/LikeTabBar'
import Stream from '../components/Stream'
import TriPost from '../components/TriPost'
import ChefThumbnail from './ChefThumbnail'
import ChefComp from './Chef'

import { v4 as uuidv4 } from 'uuid';


const Tab = createBottomTabNavigator();

const LikeTab = (props) => {
    const fetchLikes = async (page, limit) => {
        const predicate = c => c.postID('eq', props.post.id)
        const options = {
            // sort: s => s.createdAt(SortDirection.DESCENDING),
            page,
            limit,
        }
        const db_data = await DataStore.query(Like, predicate, options)
        const unformatted_likes = await storage.format_likes(db_data)
        const likes = await global.format_chefs(unformatted_likes)
        return likes
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={ChefComp} fetchArticles={fetchLikes}/>
        </View>
    );
}


const CommentComp = (props) => {
    console.log('comment prps... ', props.chef);
    return (
        <View style={style.comment_container}>
            <ChefThumbnail chef={props.chef}/>
            <Text>{props.chef.username}</Text>
            <Text>{props.text}</Text>
        </View>
    )
}


const CommentTab = (props) => {

    const [comment, set_comment] = useState('')
    const user = useUser()
    const [search, set_search] = useState(false)

    const add_comment = async() => {
        await global.comment(user.chef.id, props.post.id, comment)
        set_search(!search)
    }

    const fetchComments = async (page, limit) => {
        const predicate = c => c.postID('eq', props.post.id)
        const options = {
            // sort: s => s.createdAt(SortDirection.DESCENDING),
            page,
            limit,
        }
        const db_data = await DataStore.query(Comment, predicate, options)
        const unformatted_comments = await storage.format_comments(db_data)
        const comments = await storage.format_comments(unformatted_comments)
        return comments
    }

    return (
        <>
            <View style={{height: 500}}>
                <View style={style.feed_container}>
                    <Stream Article={CommentComp} fetchArticles={fetchComments} search={search}/>
                </View>
            </View>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => set_comment(text)}
                onSubmitEditing={() => add_comment()}
                placeholder={'search'}
                value={comment}
            />
        </>
    );
}

const TipTab = (props) => {

    //rerplace posts wiht tips
//whle thing is not finninshed
    const fetchTips = async (page, limit) => {
        const predicate = c => c.postID('eq', props.post.id)
        const options = {
            // sort: s => s.createdAt(SortDirection.DESCENDING),
            page,
            limit,
        }
        const db_data = await DataStore.query(Comment, predicate, options)
        // console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            {/* <Stream Article={CommentComp} fetchArticles={fetchTips}/> */}
        </View>
    );
}

const LikeModal = (props) => {
    const navigation = useNavigation()

    const route = useRoute();

    const route_name = route.params.tab
    const post = route.params.post


    const [comment_post, set_comment_post] = useState(post)

    return (
        <View style={style.like_modal_container}>
            <TouchableOpacity
                key = 'back to post'
                accessibilityRole="button"
                onPress={() => navigation.goBack()}
                style={style.like_back_button}
            >
            </TouchableOpacity>
            <View style={style.like_modal}>
                <Tab.Navigator tabBar={props => <LikeTabBar {...props} />} initialRouteName={route_name}>
                    <Tab.Screen name="likes">
                        {(props) => <LikeTab {...props} post={post}/>}
                    </Tab.Screen>
                    <Tab.Screen name="comments">
                        {(props) => <CommentTab {...props} post={comment_post} rerender={set_comment_post}/>}
                    </Tab.Screen>
                    <Tab.Screen name="tips">
                        {(props) => <TipTab {...props} post={post}/>}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </View>
    )
}


export default LikeModal;

