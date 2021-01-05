import React, {useEffect} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../navigation/Search'
import TopScreen from './TopScreen'
import FeedScreen from './FeedScreen'
import style from '../style';
import TopTabBar from '../components/TopTabBar';

const Tab = createBottomTabNavigator();

function TopBar() {

    return (
        <Tab.Navigator initialRouteName={'top'} tabBar={props => <TopTabBar {...props} />}>
            <Tab.Screen name="top" component={TopScreen} />
            <Tab.Screen name="feed" component={FeedScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function HomeScreen() {

    return (
        <Stack.Navigator headerMode={'none'} initialRouteName={'search'}>
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="top bar" component={TopBar} />
        </Stack.Navigator>
    );
}

export default HomeScreen;