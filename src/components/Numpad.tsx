import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback, Dimensions, PanResponder} from 'react-native';
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface buttonProps {
    buttonNumber: string;
    handlePress: (text: string) => void;
}

const NumpadButton: React.FC<buttonProps> = ({ buttonNumber, handlePress }) => {
    // const panResponder = useRef(
    //     PanResponder.create({
    //         onStartShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             if (buttonNumber === "." && answer.includes(".")) {
    //                 return;
    //             }
    //             if (buttonNumber === "-" && answer.length > 0) {
    //                 return;
    //             }
    //             setAnswer(answer + buttonNumber);
    //         },
    //     })
    // ).current;

    // return (
    //     <View {...panResponder.panHandlers}>
    //         <View style={styles.numpad}>
    //             <Text style={styles.text_numpad}>{buttonNumber}</Text>
    //         </View>
    //     </View>
    // );
    return (
        <RNGHTouchableOpacity
          onPressIn={() => handlePress(buttonNumber)}
          style={styles.numpad}
        >
          <Text style={styles.text_numpad}>{buttonNumber}</Text>
        </RNGHTouchableOpacity>
      );
};

export default NumpadButton;

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
        justifyContent: "space-between",
        alignItems: "center",
    },
    text_game: {
        color: '#888',
        fontSize: 50,
        fontFamily: "Quicksand-Regular",
    },
    answer: {
        height: 70,
        padding: 20,
        width: Dimensions.get('window').width * 2 / 3,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#888',
        fontFamily: "Quicksand-Regular",
        fontSize: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    numpad: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: "black",
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 200 * 43,
        justifyContent: "center",
        alignItems: "center",
    },
    numpad_delete: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "black",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 27 * 8,
        justifyContent: "center",
        alignItems: "center",
    },
    text_numpad: {
        color: '#888',
        fontSize: 50,
        fontFamily: "Quicksand-Bold",
    }
});