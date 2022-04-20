import { createNativeStackNavigator } from "@react-navigation/native-stack"
import InitialPage from "../../views/Init/InitialPage"
import SimpleCalculator from "../../views/SimpleCalculator/SimpleCalculator"
import { PropsNatigationStack } from "./Models/Index"


const {Navigator,Screen} = createNativeStackNavigator<PropsNatigationStack>()


export default function Stack(){


    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

            <Screen 
                name="Home" 
                component={InitialPage} 
                />
            <Screen
                name="SimpleCalculator"
                component={SimpleCalculator}
                />
            
            
        </Navigator>
    )
}