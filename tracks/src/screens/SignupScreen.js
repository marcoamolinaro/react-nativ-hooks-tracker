import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AccountScreen = ({navigation}) => {
    return (
        <>
            <Spacer>
                <Text h3>Sign Up for Tracks</Text>
            </Spacer>
            <Input label="EMail"/>
            <Spacer />
            <Input label="Password"/>
            <Spacer>
                <Button title="Sign Up"/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;