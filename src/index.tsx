import React from 'react';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import ArithmeticGameScreen from './screens/ArithmeticGame';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import {StyleSheet, Text, View, Image} from 'react-native';

export type StackParamList = {
    Home: undefined;
    Settings: undefined;
    ArithmeticGame: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

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


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="ArithmeticGame" component={ArithmeticGameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
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