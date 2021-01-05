//Copyright 2020, Provecho, All rights reserved.

import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';
import style from '../style';



function RecipeButton(props) {

    // console.log('post!!!... ',props);

    const navigation = useNavigation();

    const go_to_recipe = (post) => {
        // console.log('post!!!... ',post);
        //fix db so that post links to recipe
        //get recipe
        //navigate to recipe paghe woth data
        //have the recpe page load its own recipe and just send the post
    }

    return (
        <TouchableOpacity 
            style= {style.hashtag_recipe_button}
            onPress={() => go_to_recipe(props)}
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

function HashPost(props) {

    // console.log('props... ', props);
    return (
        <View style={style.hashtag_post}>
            <RecipeButton {...props} image={props.image}/>
        </View>
    );
}

export default HashPost;