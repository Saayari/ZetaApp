import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';

const ArithmeticGame = () => {
    const [answer, onChangeAnswer] = React.useState("");


    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "row", marginLeft: 10}}>
                    <Text style={styles.text_header}>Seconds Left: </Text>
                    <Text style={styles.text_header}>0</Text>
                </View>
                <View style={{marginLeft: "auto", flexDirection: "row"}}>
                    <View style={{marginRight: 20, flexDirection: "row"}}>
                        <Text style={styles.text_header}>Score: </Text>
                        <Text style={styles.text_header}>0</Text>
                    </View>

                </View>
            </View>

            <View style={styles.game_container}>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.text_game}>898</Text>
                    <Text style={styles.text_game}> + </Text>
                    <Text style={styles.text_game}>234</Text>
                    <Text style={styles.text_game}> = </Text>
                    <TextInput 
                        style={styles.answer}
                        keyboardType="numeric"
                        textAlign='center'
                        placeholderTextColor={'#888'}
                        onChangeText={onChangeAnswer}
                        value={answer}
                        editable={false}
                    />
                </View>
                <View>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={styles.numpad}>
                            <Text style={styles.text_numpad}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numpad}>
                            <Text style={styles.text_numpad}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.numpadright}>
                            <Text style={styles.text_numpad}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
};

export default ArithmeticGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text_header: {
        color: '#888',
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
    },
    game_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text_game: {
        color: '#888',
        fontSize: 50,
        fontFamily: "Quicksand-Regular",
    },
    answer: {
        height: 50,
        width: 50,
        borderColor: '#888',
    },
    numpad: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderColor: "black",
        width: Dimensions.get('window').width / 3,
        alignItems: "center",
    },
    numpadright: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "black",
        width: Dimensions.get('window').width / 3,
        alignItems: "center",
    },
    text_numpad: {
        color: '#888',
        fontSize: 50,
        fontFamily: "Quicksand-Bold",
    }
});