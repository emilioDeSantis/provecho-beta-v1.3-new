//Copyright 2020, Provecho, All rights reserved.

import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from '../style';
import CreateIcon from '../assets/icons/create_icon.js'
import CreateFilled from '../assets/icons/create_filled.js'
import HomeIcon from '../assets/icons/home_icon.js'
import HomeFilled from '../assets/icons/home_filled.js'
import ProfileIcon from '../assets/icons/profile_icon.js'
import ProfileFilled from '../assets/icons/profile_filled.js'

const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={style.bottom_bar}>
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
                        style={style.bottom_bar_button}
                        activeOpacity={1}
                    >
                    {label == 'home' && isFocused && 
                        <HomeFilled/>}
                    {label == 'home' && !isFocused && 
                        <HomeIcon/>}
                    {label == 'create' && isFocused && 
                        <CreateFilled/>}
                    {label == 'create' && !isFocused && 
                        <CreateIcon/>}
                    {label == 'profile' && isFocused && 
                        <ProfileFilled/>}
                    {label == 'profile' && !isFocused && 
                        <ProfileIcon/>}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomTabBar
