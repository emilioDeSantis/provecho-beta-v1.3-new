//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import ChefComp from '../components/Chef'
import { useUser, useSetUser } from '../context'
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'

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


const ChefSearchScreen = (props) => {

    const user = useUser()

    const fetchChefs = async (page, limit) => {
        const predicate = c => c.username("contains", props.search[0])
        const options = {
            page,
            limit,
        }
        const db_data = await DataStore.query(Chef, predicate, options)
        // console.log('dbdata search chef... ', db_data);
        const unformatted_chefs = await storage.format_chefs(db_data)
        const chefs = await global.format_chefs(unformatted_chefs, user.user_id)
        return chefs
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={ChefComp} fetchArticles={fetchChefs} search={props.search} article_props={'test'}/>
        </View>
    );
}

export default ChefSearchScreen;