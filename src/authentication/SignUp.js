import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { validateUsername, validateEmail, validatePassword} from '../functions/validation'

import { Auth } from 'aws-amplify';

const SignUp = (props) => {
    const [error, setError] = useState({
        username: '',
        password: '',
        email: '',
    })
    const onSubmit = async () => {
        const usernameError = validateUsername(props.state.username)
        const passwordError = validatePassword(props.state.password)
        const emailError = validateEmail(props.state.email)
        if(emailError || passwordError || usernameError)
            setError({username: usernameError, password: passwordError, email: emailError})
        else {
            try {
                const user = await Auth.signUp({
                    username: props.state.username,
                    password: props.state.password,
                    attributes: {
                        email: props.state.email, 
                    },
                })
                props.onStateChange('confirmSignUp', user)
            } catch (error) {
                alert(error.message)
            }
        }
    }
    if(props.authState === 'signUp')
        return (
            <View>               
                <TouchableOpacity
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => props.onStateChange('signIn', {})}
                >
                    <Text>sign in</Text>
                </TouchableOpacity>
                <Text                    
                    style={{
                        height: 100,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#2f8'
                    }}>sign up</Text>
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
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => props.setState({...props.state, email: text})}
                    placeholder={'email'}
                    value={props.state.email}
                />
                <Text>{error.email}</Text>
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
            </View>
        )
    else return <></>
}

export default SignUp