import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>Sign Up for Tracks</Text>
            </Spacer>
            <Input 
                label="EMail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />  
            <Spacer />
            <Input 
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button 
                    title="Sign Up"
                    onPress={() => signup({email, password})}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 30,
        marginTop: 15
    }
});

export default AuthForm;