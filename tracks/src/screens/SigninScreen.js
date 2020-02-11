import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage=""
                buttonText="Sign In"
                onSubmit={() => {}}
            />
            <NavLink
                routeName="Signup"
                textLink="Don't have an account? Sign up instead!"               
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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
    }
});

export default SigninScreen;