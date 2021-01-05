import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';

import { Auth } from 'aws-amplify';

import { useUser, useSetUser } from '../context'

const SignOut = (props) => {
    const setUser = useSetUser()
    const onSubmit = async () => {
        try {
            await Auth.signOut()
            props.onStateChange('signIn')
            setUser({
                isLoggedin: false,
                username: '',
                id: ''
            }) 
        } catch (error) {
            alert(error.message)
        }
    }
    if(props.authState === 'signedIn')
        return (
            <View>
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => onSubmit()}
                >
                    <Text>sign out</Text>
                </TouchableOpacity>
            </View>
        )
    else return <></>
}

export default SignOut