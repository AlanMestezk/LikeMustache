import { StyleSheet } from "react-native";

export const CameInStyles = StyleSheet.create(

    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text:{
             fontFamily: 'Roboto',
             fontSize: 22,
             fontWeight: 'bold'
        },
        button:{
            margin: 20,
            backgroundColor: 'lightblue',
            width: 100,
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textButton:{
            color: 'aliceblue',
            fontFamily: 'Roboto',
            fontSize: 15,
            fontWeight: 'bold'
        }
    }
)