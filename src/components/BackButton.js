  //Copyright 2020, Provecho, All rights reserved.

import * as React from 'react';
import { View, Text, Button , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../style';

function BackButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={style.back_button}
            onPress={() => navigation.goBack()}
            activeOpacity={1}
        >
            <Text>back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;