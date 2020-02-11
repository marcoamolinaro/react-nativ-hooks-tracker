import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, textLink, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.styleLink}>{textLink}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({    
    styleLink: {
        fontSize: 13,
        color: 'green',
        marginLeft: 30
    }     
});

export default withNavigation(NavLink);