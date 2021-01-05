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
import BackButton from './BackButton'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'
import LikeTabBar from './LikeTabBar'
import Stream from './Stream'
import TriPost from './TriPost'
import ChefThumbnail from './ChefThumbnail'
import ChefComp from './Chef'

import { v4 as uuidv4 } from 'uuid';

function Header (props) {

    return (
        <View style={style.header}>
            <BackButton/>
            <Text style={[style.header_text,style.top_bar_text]}>{props.header}</Text>
        </View>
    )
}

export default Header;