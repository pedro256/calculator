import { Text, TouchableOpacity } from "react-native";

import Styles from './Style'

interface PropsCardTypeCalculator{
    title:string;
    description?:string;
    actionClick():any;
}

export default function CardTypeCalculator(
    props:PropsCardTypeCalculator,
    ){

    return(
        <TouchableOpacity style={Styles.viewBase} 
        onPress={()=>props.actionClick()}>
            <Text style={Styles.title}>
                {
                    props.title || 'Title'
                }
            </Text>
            <Text style={Styles.description}>
                {
                    props.description || 'Description'
                }
            </Text>
        </TouchableOpacity>
    )

}