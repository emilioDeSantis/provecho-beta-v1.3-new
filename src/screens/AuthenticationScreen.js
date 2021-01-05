import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});
import { 
    Authenticator, 
    ForgotPassword,
} from 'aws-amplify-react-native'
import SignUp from '../authentication/SignUp'
import ConfirmSignUp from '../authentication/ConfirmSignUp'
import SignOut from '../authentication/SignOut'
import SignIn from '../authentication/SignIn'

const AuthenticationScreen = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        email: 'emilio5139@gmail.com',
    })
    return (
        <View style={styles.container}>
            <Authenticator 
                hideDefault={true} 
                onStateChange={(authState) => console.log('authState...', authState)}
            >
                <SignUp 
                    state={state}
                    setState={setState}/>
                <SignIn
                    state={state}
                    setState={setState}/>
                <ConfirmSignUp
                    state={state}
                    setState={setState}/>
                <ForgotPassword/>
                <SignOut/>
            </Authenticator>
            <TouchableOpacity
                style={{
                    height: 100,
                    width: 200,
                    borderRadius: 50,
                    backgroundColor: '#3b9'
                }}
                onPress={() => DataStore.clear()}
            >
                <Text>clear</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthenticationScreen


