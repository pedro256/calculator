

import { ScrollView, Text, View } from 'react-native';
import CardTypeCalculator from '../components/cardTypeCalculator/CardTypeCalculator';
import Styles from './Styles'

export default function InitialPage(){
    return(
        <View style={Styles.viewBase}>
            <Text style={Styles.welcomeText}> Bem Vindo !!</Text>

            <Text style={[Styles.descriptionBase,Styles.verticalSimpleSpace]}>Tipos de calculadoras: </Text>

            <ScrollView style={{width:'100%'}}>
                <CardTypeCalculator 
                    title='Calculadora Simples'
                    description='opções de calculo simples'
                    />

            </ScrollView>
        </View>
    )
}