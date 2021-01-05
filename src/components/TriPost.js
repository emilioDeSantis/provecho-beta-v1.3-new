//Copyright 2020, Provecho, All rights reserved.

import React, {useState} from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
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

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import ChefThumbnail from './ChefThumbnail'


function RecipeButton(props) {


    const user = useUser()
    // console.log('post!!!... ',props);

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style= {style.tri_recipe_button}
            onPress={() => global.go_to_recipe(props,user.chef.id,navigation)}
            activeOpacity={1}
        >
            <Image
                style = {{
                    height: '100%',
                    borderRadius: props.is_tri ? 0 : 5,
                }}
                source={{
                    uri: props.image,
                }}
            />
        </TouchableOpacity>
    );
}

function TriPost(props,user,is_rotated,article_props) {

    const is_tri = typeof article_props == "undefined" ? false : article_props.is_tri;
    return (
        <View style={is_rotated ? style.tri_post_column : style.tri_post_row}>
        {/* <View style={style.tri_post_row}> */}
            {props.tri_post.map(post => {
                const key = uuidv4()
                return (
                    <View style={is_tri ? style.tri_post : style.di_post} key={key}>
                        <RecipeButton {...post} image={post.image} is_tri={is_tri}/>
                        {!is_tri && <Text style={{alignSelf:'center',}}>{post.chef.username}</Text>}
                    </View>
                )
            })}
        </View>
    )
}

export default TriPost;