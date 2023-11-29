import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from '..';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    route: RouteProp<StackParamList, 'Score'>;
};

const Score: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const { score } = route.params;

    return (
        <TouchableWithoutFeedback onPress={() => {navigation.navigate("Settings")}}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.heading}>Score: {score}</Text>
                <Text style={styles.text}>Click to restart</Text>
            </SafeAreaView>
        </TouchableWithoutFeedback>

    );
};

export default Score;

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
});
