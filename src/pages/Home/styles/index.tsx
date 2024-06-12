import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'hsl(360, 100%, 100%)'
        },
        viewTitle:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo:{
            width: 205,
            height: 140
        },
        title:{
            fontSize: 30,
            fontWeight: 'bold'
        },
        viewButtons:{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10
        },
        btn:{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20,
            borderWidth: 3,
            borderBlockColor: 'black',
            width: 150,
            padding: 3,
            borderRadius: 15
        },
        btnTitle:{
            fontSize: 22,
            fontWeight: 'bold',
            margin: 4
        },
        imgLogin:{
            width: 30,
            height: 30
        },
        imgRegister:{
            width: 32,
            height: 32
        }

    }
)