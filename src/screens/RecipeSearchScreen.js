//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import TriPost from '../components/TriPost';
import Amplify, { Storage } from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models';
import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { StackActions, useNavigationState } from '@react-navigation/native';

import * as storage from '../functions/storage'
import Stream from '../components/Stream'
import style from '../style';
import { v4 as uuidv4 } from 'uuid';

import * as global from '../functions/global'


const RecipeSearchScreen = (props) => {

    const fetchPosts = async (page, limit) => {
        const predicate = c => c.and(
            c => {
                c = c.title("contains", props.search)
                props.hashtag_filters.forEach(name => {
                    c = c.hashtags("contains", name)
                })
            }
        )
        // const predicate = c => (
        //     c.hashtags("contains", props.hashtag_filters[0])
        // )
        const options = {
            sort: s => s.createdAt(SortDirection.DESCENDING),
            // page,
            // limit,
        }
        const db_data = await DataStore.query(Post, predicate, options)
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    const index = useNavigationState(state => state.index)
    useEffect(() => {
        props.set_index(index)
    },[index])

    return (
        <View style={[style.feed_container,]}>
            <Stream Article={TriPost} fetchArticles={fetchPosts} search={props.search}/>
        </View>
    );
}

export default RecipeSearchScreen;