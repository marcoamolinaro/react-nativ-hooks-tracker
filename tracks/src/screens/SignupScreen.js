import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <View style={styles.container}> 
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
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 30,
        marginTop: 15
    },
    signinLink: {
        fontSize: 13,
        color: 'green',
        marginLeft: 30
    } 
});

export default SignupScreen;