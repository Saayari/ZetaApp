import React from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Score: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Score: </Text>
    </SafeAreaView>
  );
};

export default Score;

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
});
