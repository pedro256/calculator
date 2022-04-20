

import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';
import CardTypeCalculator from '../../components/cardTypeCalculator/CardTypeCalculator';
import { propsStack } from '../../routes/Stack/Models/Index';
import Styles from './Styles'

export default function InitialPage(){
    

    const navigation = useNavigation<propsStack>()
    
    return(
        <View style={Styles.viewBase}>
            <Text style={Styles.welcomeText}> Bem Vindo !!</Text>

            <Text style={[Styles.descriptionBase,Styles.verticalSimpleSpace]}>Tipos de calculadoras: </Text>

            <ScrollView style={{width:'100%'}}>
                <CardTypeCalculator 
                    title='Calculadora Simples'
                    description='opções de calculo simples'
                    actionClick={()=> navigation.navigate("SimpleCalculator")}
                    />

            </ScrollView>
        </View>
    )
}