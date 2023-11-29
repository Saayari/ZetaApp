import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, TouchableWithoutFeedback,  Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '..';

const Settings = () => {
    const [number1, onChangeNumber1] = React.useState("2");
    const [number2, onChangeNumber2] = React.useState("100");
    const [number3, onChangeNumber3] = React.useState("2");
    const [number4, onChangeNumber4] = React.useState("100");
    const [number5, onChangeNumber5] = React.useState("2");
    const [number6, onChangeNumber6] = React.useState("100");
    const [number7, onChangeNumber7] = React.useState("2");
    const [number8, onChangeNumber8] = React.useState("12");
    const [duration, onChangeDuration] = React.useState("120");

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require("../assets/squarezeta.png")} />
                <View style={styles.view_header}>
                    <Text style={styles.heading}>Settings</Text>
                    <Text style={styles.text1}>Change the types of questions to your liking</Text>
                </View>
                <View style={styles.view_operations}>
                    <Text style={styles.text_operations}>Addition</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.text_description}>Range: (</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber1}
                            value={number1}
                            placeholder="2"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}> to </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber2}
                            value={number2}
                            placeholder="100"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}>) + (</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber3}
                            value={number3}
                            placeholder="2"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}> to </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber4}
                            value={number4}
                            placeholder="100"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}>)</Text>
                    </View>

                    <Text style={styles.text_operations}>Subtraction</Text>
                    <Text style={styles.text_description}>Addition problems in reverse</Text>

                    <Text style={styles.text_operations}>Multiplication</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.text_description}>Range: (</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber5}
                            value={number5}
                            placeholder="2"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}> to </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber6}
                            value={number6}
                            placeholder="100"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}>) x (</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber7}
                            value={number7}
                            placeholder="2"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}> to </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber8}
                            value={number8}
                            placeholder="100"
                            keyboardType="numeric"
                            textAlign='center'
                            placeholderTextColor={'#888'}
                        />
                        <Text style={styles.text_description}>)</Text>
                    </View>

                    <Text style={styles.text_operations}>Division</Text>
                    <Text style={styles.text_description}>Multiplication problems in reverse</Text>
                </View>
                <View style={{flexDirection:"row", alignItems: "center"}}>
                    <Text style={styles.text_description}>Duration:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeDuration}
                        value={duration}
                        placeholder="120"
                        keyboardType="numeric"
                        textAlign='center'
                        placeholderTextColor={'#888'}
                    />
                    <Text style={styles.text_description}>seconds</Text>
                </View>
                <View style={{marginLeft: "auto"}}>
                    <TouchableOpacity style={styles.button_start} onPress={() => {navigation.navigate("ArithmeticGame", {number1, number2, number3, number4, number5, number6, number7, number8, duration})}}>
                        <Text style={styles.text_start}>Start</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
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
        fontFamily: "Quicksand-Bold",
        marginBottom: 20,
    },
    view_header: {
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50
    },
    view_operations: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 20,
        padding: 20,
    },
    text1: {
        color: '#888',
        fontSize: 28,
        fontFamily: "Quicksand-Regular",
    },
    text_operations: {
        color: '#888',
        fontSize: 24,
        fontFamily: "Quicksand-Bold",
        marginBottom: 10,
    },
    text_description: {
        color: '#888',
        fontSize: 16,
        fontFamily: "Quicksand-Regular",
        marginBottom: 10,
        marginLeft: 10,
    },
    button_start: {
        marginRight: 10,
        padding: 15,
        borderRadius: 15,
        backgroundColor: "#d3d3d3",
        alignItems: "center",
        justifyContent: "center",
    },
    text_start: {
        color: 'black',
        fontSize: 16,
        fontFamily: "Quicksand-Bold",
    },
    input: {
        height: 25,
        borderWidth: 1,
        width: 32,
        marginBottom: 10,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
    }
})