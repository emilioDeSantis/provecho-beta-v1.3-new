//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Amplify from 'aws-amplify';
import { useUser, useSetUser } from '../context'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow, Hashtag } from '../models'

import ChefComp from '../components/Chef'

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

import HashtagStream from '../components/HashtagStream'

import * as global from '../functions/global'

const HashtagSearchScreen = (props) => {

    const fetchHashtagStreams = async (page, limit) => {

    console.log('data hashtag search... ',props.search[0])
        const predicate = c => c.name("contains", props.search[0])
        const options = {
            // page,
            // limit,
        }
        const db_data = await DataStore.query(Hashtag, predicate, options)
        const hashtags = await global.format_hashtags(db_data)
        return hashtags
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={HashtagStream} fetchArticles={fetchHashtagStreams} search={props.search} article_props={{hashtag_filters: props.hashtag_filters,set_hashtag_filters: props.set_hashtag_filters}}/>
        </View>
    );
}

export default HashtagSearchScreen;