import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        viewTitle:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        viewImg:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40
        },
        img:{
            width: 200,
            height: 134,
            margin: 5
        },
        titleImg:{
            fontSize: 25,
            fontWeight: 'bold'
        },
        viewSubTitle:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        subTitle:{
            fontSize: 22,
            fontWeight: 'bold'
        },
        viewInput:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 22
        },
        textInput:{
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10
        },
        input:{
            width: 350,
            height: 60,
            textAlign: 'center',
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 15,
            fontSize: 18,
            fontWeight: 'bold'
        },
        viewTouchButtons:{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            width: '60%'
        },
        showPass:{
            margin: 6,
            borderBottomWidth: 3,
            borderColor: 'black'
        },
        textShowPass:{
            fontSize: 15,
            fontWeight: 'bold'
        },
        btnLogin:{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            width: 150,
            borderWidth: 3,
            borderColor: 'black',
            padding: 6,
            borderRadius: 10,
            backgroundColor: 'lightgray'
        },
        textBtnLogin:{
            fontSize: 22,
            fontWeight: 'bold'
        },
        imgLogin:{
            width: 40,
            height: 40
        },
        viewLoad:{
            marginTop: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
        },
        textLoad:{
            fontSize: 22,
            fontWeight: 'bold'
        }
    }
)