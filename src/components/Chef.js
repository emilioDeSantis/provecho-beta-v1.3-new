//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';
import * as global from '../functions/global'
import { useUser, useSetUser } from '../context'

import style from '../style';

import ChefThumbnail from './ChefThumbnail'

const Chef = (props, user, r, article_props) => {

    // console.log('props chef... ',props);

    return (
        <View style={style.chef}>
            <ChefThumbnail chef={props}/>
            <Text>{props.username}</Text>
            {!props.is_following && <TouchableOpacity
                style={style.wide_button}
                onPress={() => global.follow(user.user_id, props.id)}
                activeOpacity={1}
            >
                <Text style={[style.medium_text_size, style.dark_text]}>follow</Text>
            </TouchableOpacity>}
            {props.is_following && <TouchableOpacity
                style={style.wide_button_filled}
                onPress={() => global.unfollow(user.user_id, props.id)}
                activeOpacity={1}
            >
                <Text style={[style.medium_text_size, style.dark_text]}>unfollow</Text>
            </TouchableOpacity>}
        </View>
    );
}

export default Chef;