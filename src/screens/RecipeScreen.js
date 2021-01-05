//Copyright 2020, Provecho, All rights reserved.

import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Amplify, { Storage } from 'aws-amplify'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, } from '@react-navigation/native';
import BackButton from '../components/BackButton'
import style from '../style';
import * as storage from '../functions/storage'
import * as global from '../functions/global'
import TriPost from '../components/TriPost'
import { useUser, useSetUser } from '../context'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import Stream from '../components/Stream'

import ChefThumbnail from '../components/ChefThumbnail';
import RemakeButton from '../components/RemakeButton'
import Header from '../components/Header';


const IngredientsScreen = (props) => {
    return(
        <View style={{flex:1, justifyContent: 'center'}}>
            <Text>
                ingredients
            </Text>
        </View>
    )
}

const ProcedureScreen = (props) => {
    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <Text>
                procedure
            </Text>
        </View>
    )
}

const InstructionsTabBar = ({ state, descriptors, navigation, recipe }) => {

    const [is_saved, set_is_saved] = useState(recipe.is_stashed)

    console.log('recipe... ',recipe);

    const user = useUser()

    const stash = async () => {
        await global.stash( user.chef.id, recipe.postID,)
        set_is_saved(true)
    }

    const unstash = async () => {
        await global.unstash( user.chef.id, recipe.postID,)
        set_is_saved(false)

    }

    return (
        <View style={style.instructions_tab_bar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key = {label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={style.instructions_tab_bar_button}
                        activeOpacity={1}
                    >
                        <Text style={{ color: isFocused ? '#f98' : '#333536' }}>
                            {label}
                        </Text>
                        {/* {isFocused && <View style={{backgroundColor: '#f94', position: 'absolute', height: 2, width: 40, top: 80, }}/>} */}
                    </TouchableOpacity>
                );
            })}
            {!is_saved && <TouchableOpacity
                key = 'stash'
                accessibilityRole="button"
                onPress={() => stash()}
                style={style.stash_button}
                activeOpacity={1}
            >
                {/* <Image
                    style={{width:20, height: 20,}}
                    source={require('../assets/icons/search_icon_yellow.png')}
                /> */}
                <Text>stash</Text>
            </TouchableOpacity>}
            {is_saved && <TouchableOpacity
                key = 'stash'
                accessibilityRole="button"
                onPress={() => unstash()}
                style={style.unstash_button}
                activeOpacity={1}
            >
                {/* <Image
                    style={{width:20, height: 20,}}
                    source={require('../assets/icons/search_icon_yellow.png')}
                /> */}
                <Text>unstash</Text>
            </TouchableOpacity>}
        </View>
    );
}


const Tab = createBottomTabNavigator();

function Instructions (props) {
    const recipe = props.recipe
    // const ingredients = props.ingredients
    const ingredients = [
        {type: 'cheese', quantity: '3'},
        {type: 'bread', quantity: '2'},
    ]
    // const procedure = props.procedure
    const procedure = [
        {step: 'kjycgh'},
        {step: 'kjycgh'},
    ]
    return (
        <Tab.Navigator tabBar={props => <InstructionsTabBar {...props} recipe={recipe}/>}>
            <Tab.Screen name="ingredients">
                {(props) => <IngredientsScreen {...props} ingredients={ingredients}/>}
            </Tab.Screen>
            <Tab.Screen name="procedure">
                {(props) => <ProcedureScreen {...props} procedure={procedure}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}



function RecipeComp(props) {

    const navigation = useNavigation();

    return (
        <>
            <Header header={props.recipe.title}/>
            <View style={{ flex: 1, }}>
                <ChefThumbnail chef={props.chef}/>
                <RemakeButton recipe={props.recipe}/>
                <Text>{props.chef.username}</Text>
                <Text>serves {props.recipe.serves}</Text>
                <Text>{props.recipe.cook_time} mins</Text>
                <Text>78</Text>

                <TouchableOpacity 
                    style= {style.number}
                    onPress={() => {
                        navigation.navigate('recipe modal')
                    }}
                >
                    <Text style={style.number_text}>tips</Text>
                </TouchableOpacity> 

                <Instructions recipe={props.recipe}/>
            </View>
        </>
    );
}

function Modal (props) {

    const navigation = useNavigation();


    const fetchPosts = async (page, limit) => {
        //add pagination
        const db_data = await DataStore.query(Post)
        // console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts)
        return tri_posts
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#97F', marginTop: 100,}}>
            <BackButton/>
            <ChefThumbnail chef={props.chef}/>
            <Text>{props.recipe.title}</Text>
            <Text>by {props.chef.username}</Text>
            {/* Image */}
            <Text>78 remakes</Text>
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    navigation.navigate('tip modal')
                }}
            >
                <Text style={style.number_text}>tips</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    
                }}
            >
                <Text style={style.number_text}>stash</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style= {style.number}
                onPress={() => {
                    alert('remake')
                }}
            >
                <Text style={style.number_text}>remake</Text>
            </TouchableOpacity> 
            <View style={style.post_stream}>
                <Stream Article={TriPost} fetchArticles={fetchPosts}/>
            </View>
        </View>
    );
}

function TipModal(props) {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginTop: 100,}}>
            <BackButton/>
            <Text>tips</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const RecipeScreen = (props) => {


    const navigation = useNavigation();

    const route = useRoute();
    
    const recipe = route.params.recipe
    const chef = route.params.chef

    return (
        <Stack.Navigator mode="modal" headerMode={'none'} transparentCard={true}>
            <Stack.Screen name="recipe screen">
                {(props) => <RecipeComp {...props} chef={chef} recipe={recipe}/>}
            </Stack.Screen>
            <Stack.Screen name="recipe modal">
                {(props) => <Modal {...props} chef={chef} recipe={recipe}/>}
            </Stack.Screen>
            <Stack.Screen name="tip modal">
                {(props) => <TipModal {...props} chef={chef} recipe={recipe}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default RecipeScreen;