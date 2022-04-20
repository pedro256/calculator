import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    viewBase:{
        paddingTop:'15%',
        paddingLeft:15,
        paddingRight:15,
        flex:1
    },
    inputCalc:{
        padding:4,
        margin:10,
        height:100,
        borderColor:'#bababa',
        borderWidth:2,
        color:'#323232',
        textAlign:"right",
        fontSize:38,
        fontWeight:"bold",
    },
    inputPreCalc:{
        padding:4,
        margin:10,
        height:40,
        
        color:'#323232',
        textAlign:"right",
        fontSize:14,
        fontWeight:"bold",
    },
    keyArea:{
        alignItems:'center',
        flexDirection: "row",
        flexWrap: "wrap",
    },
    keyArea_1_4:{
        width:'24%'
    },
    keyArea_1_2:{
        width:'48%'
    },
    keyBase:{
        margin:1,
        padding:30,
        borderRadius:5
    },
    keyBaseAction:{
        margin:1,
        padding:22,
        borderRadius:5,
    },
    keyNumbersDefault:{
        backgroundColor:"#e0e0e0",
    },
    keyActionDefault:{
        backgroundColor:'#949494'
    },
    keyActionSuccess:{
        backgroundColor:'#3299ff'
    },
    textKey:{
        
        fontWeight:"bold",
        textAlign:"center"
    },
    textNumberDefault:{
        
        fontSize:20,
        color:'#323232'
    },
    textActionDefault:{
        color:'#f1f1f1',
        fontSize: 32
    }

})


export default Styles;