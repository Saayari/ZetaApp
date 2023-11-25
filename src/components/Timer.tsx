import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '..';



const TimerComponent = () => {
    const [timeLeft, setTimeLeft] = useState(120);

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    useEffect(() => {
        // If timeLeft is 0, do nothing
        if (timeLeft === 0) navigation.navigate("Score");

        // Set up a timer to decrement the timeLeft by one every second
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // Clear the timer when the component is unmounted or timeLeft changes
        return () => clearInterval(timerId);
    }, [timeLeft]);

    return (
        <View style={{flexDirection: "row", marginLeft: 10}}>
        <Text style={styles.text_header}>Seconds Left: </Text>
        <Text style={styles.text_header}>{timeLeft}</Text>
    </View>
    );
};

export default TimerComponent;

const styles = StyleSheet.create({
    text_header: {
        color: '#888',
        fontSize: 24,
        fontFamily: "Quicksand-Regular",
    },
})