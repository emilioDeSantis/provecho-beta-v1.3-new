//Copyright 2020, Provecho, All rights reserved.

import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackActions, useNavigationState } from '@react-navigation/native';

import RecipeSearchScreen from '../screens/RecipeSearchScreen'
import HashtagSearchScreen from '../screens/HashtagSearchScreen'
import ChefSearchScreen from '../screens/ChefSearchScreen'

import SearchBar from '../components/SearchBar'
import SearchTabBar from '../components/SearchTabBar';


import * as global from '../functions/global'
import style from '../style';


const FilterBar = (props) => {
    // console.log('filertbatr porps... ', props);
    const delete_filter = async (name) => {
        let new_array = [...props.hashtag_filters]
        var index = new_array.indexOf(name);
        if (index !== -1) {
            new_array.splice(index, 1);
        }
        // console.log('hashtag stream new arry... ',new_array);
        await props.set_hashtag_filters(new_array)
        // console.log('hahstage stream filters... ', article_props.hashtag_filters);
    }
    return(
        <View style={style.filter_bar}>
            {props.hashtag_filters.map(name => {
                return(
                <TouchableOpacity 
                    style={style.wide_button_filled}
                    onPress={() => delete_filter(name)}
                    activeOpacity={1}
                >
                    <Text style={[style.medium_text_size, style.dark_text]}>#{name}</Text>
                </TouchableOpacity>
                )
            })}
        </View>
    )
}

const Tab = createBottomTabNavigator();

function Search ({ navigation }) {


    const [search, setSearch] = useState('')
    const [recipe_search, set_recipe_search] = useState([])
    const [hashtag_search, set_hashtag_search] = useState([])
    const [chef_search, set_chef_search] = useState([])
    const [index, set_index] = useState('')
    const [hashtag_filters, set_hashtag_filters] = useState ([])

    // console.log('hashtag filters.. ',hashtag_filters);
    const set_search = async (index, array) => {
        if(index == 0) {
            await set_recipe_search(array)
        } else if (index == 1) {
            // console.log('sethastagsearch... ', array);
            await set_hashtag_search(array)
        } else {
            await set_chef_search(array)
        }
        return 'success'
    } 
    const on_return = async() => {
        // console.log('search... ',search);
        // console.log('index... ',index);
        const array = await global.toArray(search)
        // console.log('array... ',array);
        await set_search(index, array)
    }

    //save array of serahc itens in each screen and retrun sets the array and runs the firts load fucntion

    return (
        <>
            <View style={{flexDirection:'row', top: 0,  alignItems: 'center', justifyContent: 'center' }}>
                <SearchBar search={search} setSearch={setSearch} on_return={on_return}></SearchBar>
            </View>
            <Tab.Navigator tabBar={props => <SearchTabBar {...props} />} initialRouteName={'recipe search'}>
                <Tab.Screen name="recipe search" options={{title:'recipes'}}>
                    {(props) => <RecipeSearchScreen {...props} search={recipe_search} set_index={set_index} hashtag_filters={hashtag_filters}/>}
                </Tab.Screen>
                <Tab.Screen name="hashtag search" options={{title:'hashtags'}}>
                    {(props) => <HashtagSearchScreen {...props} search={hashtag_search} set_hashtag_filters={set_hashtag_filters} hashtag_filters={hashtag_filters}/>}
                </Tab.Screen>
                <Tab.Screen name="chef search" options={{title:'chefs'}}>
                    {(props) => <ChefSearchScreen {...props} search={chef_search}/>}
                </Tab.Screen>
            </Tab.Navigator>
            <FilterBar hashtag_filters={hashtag_filters} set_hashtag_filters={set_hashtag_filters}/>
        </>
    );
}

export default Search;