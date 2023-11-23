import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Settings</Text>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        color: '#888',
        fontSize: 48,
    },
    logo: {
        width: 50,
        height: 50,
    }
})