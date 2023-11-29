import React,  {useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback, Dimensions, PanResponder} from 'react-native';
import TimerComponent from '../components/Timer';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '..';
interface buttonProps {
    buttonNumber: string;
    handlePress: (text: string) => void;
}

type Props = {
    route: RouteProp<StackParamList, 'ArithmeticGame'>;
};

const ArithmeticGame: React.FC<Props> = ({ route }) => {
    const [answer, setAnswer] = React.useState("");

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [operationText, setOperationText] = React.useState("+");
    const [correctAnswer, setCorrectAnswer] = React.useState("");

    const { number1, number2, number3, number4, number5, number6, number7, number8, duration} = route.params;

    const gameStart = () => {
        console.log("game started!")
        const operation = Math.floor(Math.random() * 4);
        console.log(operation);
        let placeholder1, placeholder2;
        if (operation < 2) {
            placeholder1 = (Math.floor(Math.random() * (Number(number2) - 1)) + Number(number1));
            placeholder2 = (Math.floor(Math.random() * (Number(number4) - 1)) + Number(number3));
        }
        else {
            placeholder1 = (Math.floor(Math.random() * (Number(number6) - 1)) + Number(number5));
            placeholder2 = (Math.floor(Math.random() * (Number(number8) - 1)) + Number(number7));
        }
        console.log(`${placeholder1} ${placeholder2}`)
        if (operation === 1) {
            setOperationText("-");
            setNum1(placeholder1+placeholder2);
            setNum2(placeholder2)
            setCorrectAnswer((placeholder1).toString());
        }
        else if (operation === 2) {
            setOperationText("x");
            setNum1(placeholder1);
            setNum2(placeholder2);
            setCorrectAnswer((placeholder1 * placeholder2).toString());
        }
        else if (operation === 3) {
            setOperationText("÷");
            setNum1(placeholder1*placeholder2);
            setNum2(placeholder2);
            setCorrectAnswer((placeholder1).toString());
        }
        else {
            setOperationText("+");
            setNum1(placeholder1);
            setNum2(placeholder2);
            setCorrectAnswer((placeholder1+placeholder2).toString());
        }
        setTimeout(() => deleteAnswer(), 80);
    }

    React.useEffect(() => {
        gameStart();
    }, []);

    const handlePress = (buttonNumber: string) => {
        console.log(correctAnswer);
        if (buttonNumber === "." && answer.includes(".")) {
            return;
        }
        if (buttonNumber === "-" && answer.length > 0) {
            return;
        }
        setAnswer(answer + buttonNumber);
        if ((answer+buttonNumber) == correctAnswer) {
            setScore(score + 1);
            gameStart();
        }
    }

    const deleteAnswer = () => {
        setAnswer("");
    }

    const NumpadButton: React.FC<buttonProps> = ({ buttonNumber, handlePress }) => {
        const panResponder = useRef(
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onPanResponderGrant: () => {
                    handlePress(buttonNumber);
                },
            })
        ).current;

        return (
            <View {...panResponder.panHandlers}>
                <View style={styles.numpad}>
                    <Text style={styles.text_numpad}>{buttonNumber}</Text>
                </View>
            </View>
        );
    };

    const DeleteButton: React.FC<buttonProps>  =  ({buttonNumber, handlePress}) => {
        const panResponder = useRef(
            PanResponder.create({
              onStartShouldSetPanResponder: () => true,
              onPanResponderGrant: () => {
                handlePress(buttonNumber);
              },
            })
          ).current;

        return (
            <View {...panResponder.panHandlers}>
                <View style={styles.numpad_delete}>
                    <Text style={styles.text_numpad}>{buttonNumber}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: "row"}}>
                <TimerComponent score={score} duration={duration}/>
                <View style={{marginLeft: "auto", flexDirection: "row"}}>
                    <View style={{marginRight: 20, flexDirection: "row"}}>
                        <Text style={styles.text_header}>Score: </Text>
                        <Text style={styles.text_header}>{score}</Text>
                    </View>

                </View>
            </View>

            <View style={styles.game_container}>
                <View style={{alignItems: "center", marginTop: Dimensions.get('window').height/15, justifyContent: "space-evenly"}}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.text_game}>{num1}</Text>
                        <Text style={styles.text_game}> {operationText} </Text>
                        <Text style={styles.text_game}>{num2}</Text>
                        <Text style={styles.text_game}> = </Text>

                    </View>

                    <TextInput 
                        style={styles.answer}
                        keyboardType="numeric"
                        textAlign='center'
                        placeholderTextColor={'#888'}
                        value={answer}
                        editable={false}
                    />
                </View>
                <View style={{}}>
                    <View style={{flexDirection: "row"}}>
                        <NumpadButton  buttonNumber="1" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="2" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="3" handlePress={handlePress}/>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <NumpadButton  buttonNumber="4" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="5" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="6" handlePress={handlePress}/>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <NumpadButton  buttonNumber="7" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="8" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="9" handlePress={handlePress}/>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <NumpadButton  buttonNumber="-" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="0" handlePress={handlePress}/>
                        <NumpadButton  buttonNumber="." handlePress={handlePress}/>
                    </View>
                    
                    <View>
                        <DeleteButton  buttonNumber="X" handlePress={deleteAnswer}/>
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