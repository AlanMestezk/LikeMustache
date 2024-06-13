import { StyleSheet } from "react-native";

export const RegisterStyle = StyleSheet.create(

    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        viewLogo:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 26
        },
        logo:{
            width: 120,
            height: 80
        },
        textLogo:{
            fontSize: 22,
            fontWeight: 'bold'
        },
        viewText:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5
        },
        text:{
            fontSize: 20,
            fontWeight: 'bold'
        },
        viewInput:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        },
        inputText:{
            fontSize: 18,
            fontWeight: "bold",
            margin: 10
        },
        input:{
            width: 350,
            height: 60,
            borderRadius: 15,
            textAlign: 'center',
            borderWidth: 3,
            borderColor: 'black',
            fontSize: 20,
            fontWeight: 'bold'
        },
        touchShowPass:{
            margin: 10,
            borderBottomWidth: 3,
            borderBottomColor: 'black',
            width: 130,
            justifyContent: 'center',
            alignItems: 'center'
        },
        texShowPass:{
            fontSize: 18,
            fontWeight: 'bold'
        },
        touchButton:{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            width: 150,
            borderRadius: 15,
            borderWidth: 3,
            borderColor: 'black',
            margin: 20,
            padding: 8
        },
        textBtn:{
            fontSize: 22,
            fontWeight: 'bold'
        },
        imgButton:{
            width: 40,
            height: 40
        },
        viewLoad:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textLoad:{
            fontSize: 22,
            fontWeight: 'bold'
        }
    }
)