//Copyright 2020, Provecho, All rights reserved.

import * as React from 'react';
import { View, Text, Button, StatusBar,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CreateScreen from '../screens/CreateScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import BottomTabBar from '../components/BottomTabBar'

const Tab = createBottomTabNavigator();

function BottomBar ({ navigation }) {
    return (
        <>
        <StatusBar barStyle="dark-content"/>
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name="home">
                {(props) => <HomeScreen {...props} />}
            </Tab.Screen>
            <Tab.Screen name="create">
                {(props) => <CreateScreen {...props} />}
            </Tab.Screen>
            <Tab.Screen name="profile">
                {(props) => <ProfileScreen {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
        </>
    );
}

export default BottomBar;