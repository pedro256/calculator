import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { propsStack } from "../../routes/Stack/Models/Index";
import Styles from './Styles'


export default function SimpleCalculator() {


    const [display, setDisplay] = useState<string>("")
    const [displayPreResult, setDisplayPreResult] = useState("")
    const navigator = useNavigation<propsStack>()

    function onClickKey(value: string): void {
        if (
            isCaracterValid(value) &&
            isCaracterValidInExpression(value)
        ) {
            setIntoExpression(value)
        }
    }

    function isOperator(value: string): boolean {
        if (
            value === '+'
            || value === '*'
            || value === '/'
            || value === '-'
        ) {
            return true;
        }
        return false;
    }

    function isCaracterValid(value: string): boolean {
        const valueNumeric = Number.parseInt(value)
        if (
            !isNaN(valueNumeric)
        ) {
            if (valueNumeric <= 9) {
                return true;
            }
        } else {
            if (
                value === '.' ||
                value === '*' ||
                value === '+' ||
                value === '-' ||
                value === '/' ||
                value === '(' ||
                value === ')' ||
                value === 'sup2' ||
                value === 'sup3'
            ) {
                return true
            }

        }
        return false;
    }
    function isCaracterValidInExpression(value: string): boolean {
        if (
            display.length === 1 &&
            display.charAt(0) === '0' &&
            value === '0'
        ) {
            return false;
        }

        if (
            value === 'sup2'
            && !isOperator(display[display.length - 1])
            && display[display.length - 1] === '('
        ) {
            return false
        }
        if (
            value === 'sup3'
            && !isOperator(display[display.length - 1])
            && display[display.length - 1] === '('
            ) {
            return false
        }


        return true;
    }

    function testExpGetResult(): boolean {
        try {
            const preResult = eval(display);
            if (!isNaN(preResult)) {
                return true
            }
        } catch (e) {
            return false;
        }
        return false;
    }
    function setIntoExpression(value: string) {

        value = replaceCaracter(value);
        appendValueInDisplay(display + value)

    }

    function appendValueInDisplay(nValue: string) {

        try {
            const preResult = eval(nValue)
            if (nValue.length) {

                if (!isNaN(preResult)) {

                    setDisplayPreResult(preResult)
                } else {
                    setDisplayPreResult("Expressão inválida ...")
                }
            } else {
                setDisplayPreResult("")
            }
        } catch (e) {
            if (e instanceof SyntaxError) {
                setDisplayPreResult("Erro de sintaxe ...")
            } else {
                setDisplayPreResult("Expressão inválida ...")
            }

        }

        setDisplay(nValue)

    }

    function replaceCaracter(value: string): string {
        switch (value) {
            case ',':
                return '.';
            case 'sup2':
                return '**2';
        }
        return value;
    }
    function clearDisplays() {
        setDisplay("");
        setDisplayPreResult("");
    }
    function backSpace() {
        const nText = display.slice(0, -1)
        appendValueInDisplay(nText)
    }
    function getResult() {
        setDisplay("")
        setDisplay("" + displayPreResult)
    }


    return (
        <ScrollView>
            <View style={Styles.viewBase} >

                <View>
                    <Icon
                        name="arrow-left"
                        size={32}
                        color="#323232"
                        onPress={() => navigator.goBack()}
                    />
                </View>

                <TextInput
                    style={Styles.inputCalc}
                    keyboardType="numbers-and-punctuation"
                    value={display}
                />
                <Text
                    style={Styles.inputPreCalc}
                >
                    {
                        displayPreResult
                    }
                </Text>
                <View
                    style={Styles.keyArea}
                >

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('(')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            (
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('sup2')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            x²
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('sup3')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            x³
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey(')')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            )
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('1')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            1
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}

                        onPress={() => onClickKey('2')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            2
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('3')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            3
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => onClickKey('*')}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            <Icon name="close" size={38} color="#f1f1f1" />
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('4')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            4
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('5')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            5
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('6')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            6
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => onClickKey('-')}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            <Icon name="minus" size={38} color="#f1f1f1" />
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('7')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            7
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('8')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            8
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('9')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            9
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => onClickKey('+')}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            <Icon name="plus" size={38} color="#f1f1f1" />
                        </Text>
                    </TouchableOpacity>




                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            +/-
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('0')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            0
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyNumbersDefault, Styles.keyBase]}
                        onPress={() => onClickKey('.')}
                    >
                        <Text style={[Styles.textNumberDefault, Styles.textKey]}>
                            ,
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => onClickKey('/')}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            %
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => backSpace()}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            <IconEntypo name="erase" color="#f1f1f1" size={38} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_4, Styles.keyActionDefault, Styles.keyBaseAction]}
                        onPress={() => clearDisplays()}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            C
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[Styles.keyArea_1_2, Styles.keyActionSuccess, Styles.keyBaseAction]}
                        onPress={() => getResult()}
                    >
                        <Text style={[Styles.textActionDefault, Styles.textKey]}>
                            =
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>

        </ScrollView>
    )
}