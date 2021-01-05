//Copyright 2020, Provecho, All rights reserved.

import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from '../style';
import SearchIcon from '../assets/icons/search_icon.js'

const TopTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={style.home_top_bar}>
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
                        style={style.home_bar_button}
                        activeOpacity={1}
                    >
                        <Text style={[style.top_bar_text, style.home_top_bar_text]}>
                            {label}
                        </Text>
                        {/* {isFocused && <View style={{backgroundColor: '#f94', position: 'absolute', height: 2, width: 40, top: 80, }}/>} */}
                    </TouchableOpacity>
                );
            })}
            <TouchableOpacity
                key = 'search_screen'
                accessibilityRole="button"
                onPress={() => navigation.navigate('search')}
                style={style.search_button}
                activeOpacity={1}
            >
                <View style={style.round_button}>
                    <SearchIcon/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TopTabBar
