import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from "expo-font";
import React from 'react';

const App = () => {
    const [fontsLoaded] = useFonts({
        "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
        "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
      });
    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("./assets/squarezeta.png")} />
                <Text style={styles.heading}>Zeta App</Text>
            </View>
          );
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.logo} source={require("./assets/squarezeta.png")} />
            <Text style={styles.heading}>Zeta App</Text>
        </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: '#888',
        fontSize: 48,
        fontFamily: "Quicksand-Bold",
    },
    logo: {
        width: 50,
        height: 50,
    }
})