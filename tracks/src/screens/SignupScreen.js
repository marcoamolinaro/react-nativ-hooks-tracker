import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    return (
        <View style={styles.container}> 
            <AuthForm 
                hearderText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign Up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.signinLink}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        marginTop: 30
    },
    signinLink: {
        fontSize: 13,
        color: 'green',
        marginLeft: 30
    } 
});

export default SignupScreen;