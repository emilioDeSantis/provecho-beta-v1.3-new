import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { useUser, useSetUser } from '../context'
import ChefScreen from './ChefScreen'

import AuthenticationScreen from './AuthenticationScreen'

function ProfileScreen() {
    user = useUser()

    const chef = {
        username: 'bob',
        n_followers: 397,
        n_following: 223,
        n_remakes: 132,
        biography: 'jkhg kjhg dsy usgd jhcg'
    }

    if (user.isLoggedin) {
        return (
            <ChefScreen chef={chef} is_profile={true}/>
        );
    } else {
        return (
            <AuthenticationScreen></AuthenticationScreen>
        );
    }
}

export default ProfileScreen;