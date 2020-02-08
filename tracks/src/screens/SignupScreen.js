import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const AccountScreen = ({navigation}) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>
                AccountScreen
            </Text>
            <Button title="Go to Signup"
            onPress={() => navigation.navigate('Signin')}
            />
            <Button title="Go to main flow"
            onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;