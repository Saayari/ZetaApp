import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '..';

const Home = () => {

    
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <TouchableWithoutFeedback onPress={() => {navigation.navigate("Settings")}}>
        <SafeAreaView style={styles.container}>
            <View style={{marginBottom: 100, alignItems: "center", justifyContent: "center"}}>
                <Image style={styles.logo} source={require("../assets/squarezeta.png")} />
                <Text style={styles.heading}>Zeta App</Text>
                <Text style={styles.text_description}>The Arithmetic Game is a fast-paced speed drill where you are given two minutes to solve as many arithmetic problems as you can.</Text>
                <Text style={styles.text_description}>Entirely inspired by the website:</Text>
                <Text style={styles.text_description}>arithmetic.zetamac.com.</Text>
            </View>
            <Text style={styles.text}>Click to continue</Text>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        color: '#888',
        fontSize: 48,
        fontFamily: "Quicksand-Bold",
        marginBottom: 20,
    },
    text: {
        color: '#888',
        fontSize: 24,
        fontFamily: "Quicksand-Regular",
    },
    text_description: {
        color: '#888',
        fontSize: 16,
        fontFamily: "Quicksand-Regular",
        marginBottom: 10,
        marginLeft: 10,
    },
    logo: {
        width: 50,
        height: 50,
    }
})