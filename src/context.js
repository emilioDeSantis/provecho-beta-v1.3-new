//Copyright 2020, Provecho, All rights reserved.

import React, { useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from './models'

import * as storage from './functions/storage'

import awsconfig from './aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

const UserContext = React.createContext()
const UpdateUserContext = React.createContext()

export function useUser() {
    return useContext(UserContext)
}

export function useSetUser() {
    return useContext(UpdateUserContext)
}

export function UserProvider(props) {
    const [user, setUser] = useState({
        isLoggedin: false,
        username: null,
        user_id: null,
        chef: null,
    })

    const init = async () => {
        try{
            let output_user = user
            const auth_user = await Auth.currentAuthenticatedUser()
            // console.log('authudser... ', auth_user);
            output_user.username = auth_user.username
            const chef = await DataStore.query(Chef, c => c.username("eq", output_user.username))
            output_user.user_id = chef[0].id
            output_user.isLoggedin = true
            output_user.chef = await storage.format_chef(chef[0])
            setUser(output_user)
        } catch (err){
            // if(err == 'The user is not authenticated'){
            // }
            // console.log('errorl... ',err);
        }
    }

    useEffect(() => {
        init()
    })

    return (
        <UserContext.Provider value={user}>
            <UpdateUserContext.Provider value={setUser}>
                {props.children}
            </UpdateUserContext.Provider>
        </UserContext.Provider>
    )
}