import { StyleSheet } from "react-native";

export const RecoverPassStyle = StyleSheet.create(
    {

        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        viewTitle:{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
        },
        img:{
            width: 190,
            height: 130
        },
        textTitle:{
            fontSize: 22,
            fontWeight: 'bold'
        },
        viewSubtitle:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        subtitle:{
            fontWeight: 'bold',
            fontSize: 22
        },
        viewInput:{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 30
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
        button:{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 3,
            width: 180,
            height: 60,
            borderRadius: 10,
            backgroundColor: 'lightgray',
            margin: 20
        },
        textButton:{
            fontWeight: 'bold',
            fontSize: 22
        },
        imgButton:{
            width: 40,
            height: 40
        },
        recoverContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imgRecover:{
            width: 190,
            height: 130,
            margin: 20
        },
        titleRecover:{
            fontSize: 18,
            fontWeight: 'bold',
            
        }
    }
)