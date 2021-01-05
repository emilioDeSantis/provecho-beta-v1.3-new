//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import HashtagPost from './HashtagPost'
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

const fetchHashtagPosts = async (page, limit) => {
    const db_data = await DataStore.query(Post)
    // console.log('data... ',db_data);
    const posts = await storage.format_posts(db_data)
    return posts
}

const HashtagScreen = (props,u,r,article_props) => {
    //possbley chekc for reducnat filters and toggel tp unflier mode fo rbutton
    // console.log('hashtag stream article props... ',article_props);
    const add_filter = async () => {
        let new_array = [...article_props.hashtag_filters, props.name]
        // console.log('hashtag stream new arry... ',new_array);
        await article_props.set_hashtag_filters(new_array)
        // console.log('hahstage stream filters... ', article_props.hashtag_filters);
    }
    const delete_filter = async () => {
        let new_array = [...article_props.hashtag_filters]
        var index = new_array.indexOf(props.name);
        if (index !== -1) {
            new_array.splice(index, 1);
        }
        // console.log('hashtag stream new arry... ',new_array);
        await article_props.set_hashtag_filters(new_array)
        // console.log('hahstage stream filters... ', article_props.hashtag_filters);
    }
    return (
        <View style={style.hashtag_stream}>
            <View style={style.hashtag_stream_top}>
                <Text style={[style.medium_text_size, style.dark_text]}>#{props.name}</Text>
                {!article_props.hashtag_filters.includes(props.name) && <TouchableOpacity
                    key = 'hashtag filter'
                    accessibilityRole="button"
                    onPress={() => add_filter()}
                    style={style.wide_button_filled}
                >
                <Text style={[style.medium_text_size, style.dark_text]}>filter</Text>    
            </TouchableOpacity>}
            {article_props.hashtag_filters.includes(props.name) && <TouchableOpacity
                    key = 'hashtag filter'
                    accessibilityRole="button"
                    onPress={() => delete_filter()}
                    style={style.wide_button}
                >
                <Text style={[style.medium_text_size, style.dark_text]}>unfilter</Text>    
            </TouchableOpacity>}
            </View>
            <Stream Article={HashtagPost} fetchArticles={fetchHashtagPosts} horizontal={true} />
        </View>
    );
}

export default HashtagScreen;