import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreateScreen from '../screens/CreateScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

function InstructionsBar ({ navigation }) {
    return (
        <Tab.Navigator tabBarOptions={{style: { position: 'absolute', height: '20%', marginBottom: '170%' }}}>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="create" component={CreateScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default InstructionsBar;