import React from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '..';

type Props = {
    route: RouteProp<StackParamList, 'Score'>;
};

const Score: React.FC<Props> = ({ route }) => {

    const { score } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.heading}>Score: {score}</Text>
            </View>
        </SafeAreaView>
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
});
