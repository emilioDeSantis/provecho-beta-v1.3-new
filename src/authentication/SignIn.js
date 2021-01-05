import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { validateUsername, validatePassword} from '../functions/validation'

import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { useUser, useSetUser } from '../context'

const SignIn = (props) => {
    const [error, setError] = useState({
        username: '',
        password: '',
    })
    const setUser = useSetUser()
    const onSubmit = async () => {
        const usernameError = validateUsername(props.state.username)
        const passwordError = validatePassword(props.state.password)
        if(passwordError || usernameError)
            setError({username: usernameError, password: passwordError})
        else {
            try {
                const user = await Auth.signIn(props.state.username, props.state.password)
                props.onStateChange('signedIn', user)
                const chef = await DataStore.query(Chef, c => c.username("eq", user.username))
                const id = chef[0].id
                setUser({
                    isLoggedin: true,
                    username: user.username,
                    user_id: id,
                }) 
                props.setState({
                    ...props.state,
                    username: '',
                    password: '',
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }
    if(props.authState === 'signIn')
        return (
            <View>
                <Text                    
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#2f6'
                    }}>sign in</Text>                
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => props.onStateChange('signUp', {})}
                >
                    <Text>sign up</Text>
                </TouchableOpacity>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => props.setState({...props.state, username: text})}
                    placeholder={'username'}
                    value={props.state.username}
                />
                <Text>{error.username}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => props.setState({...props.state, password: text})}
                    placeholder={'password'}
                    secureTextEntry={true}
                    value={props.state.password}
                />
                <Text>{error.password}</Text>
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => onSubmit()}
                >
                    <Text>submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => props.onStateChange('confirmSignUp', {})}
                >
                    <Text>confirm</Text>
                </TouchableOpacity>
            </View>
        )
    else return <></>
}

export default SignIn