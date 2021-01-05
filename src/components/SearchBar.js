//Copyright 2020, Provecho, All rights reserved.

import  React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import style from '../style';

function SearchBar(props) {

    const navigation = useNavigation();

    return (
        <View style={style.search_bar_header}>
            <TextInput
                style={style.search_bar}
                onChangeText={text => props.setSearch(text)}
                onSubmitEditing={() => props.on_return()}
                placeholder={'search'}
                value={props.search}
            />
            <TouchableOpacity
                style={style.search_bar_back}
                onPress={() => navigation.navigate('top bar')}
                activeOpacity={1}
            >
                <Text>back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

//make search in vcomponts so i can reuse for create etc.