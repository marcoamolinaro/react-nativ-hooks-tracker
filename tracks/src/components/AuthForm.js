import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button 
                    title={buttonText}
                    onPress={() => onSubmit({email, password})}
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