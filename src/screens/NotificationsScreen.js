import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BackButton from '../components/BackButton'

const NotificationsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>notifications</Text> 
            <BackButton/>
        </View>
    )
}

export default NotificationsScreen;