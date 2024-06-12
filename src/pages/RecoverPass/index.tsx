import { RecoverPassStyle }                        from "./styles"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"

const logo        = require('../../assets/iconImg.png')
const recoverPass = require('../../assets/resetPassword.png')

export const RecoverPass = ()=>{

    return(

        <View style={RecoverPassStyle.container}>

            <View style={RecoverPassStyle.viewTitle}>

                <Image
                    source={logo}
                    style={RecoverPassStyle.img}
                />

                <Text>Web MustachE</Text>

            </View>

            <View>

                <Text>Para recuperar a senha</Text>
                <Text>informe seu e-mail cadastrado abaixo</Text>

            </View>

            <View>

                <TextInput placeholder="Digite aqui seu e-mail..."/>

            </View>

            <TouchableOpacity>

                <Text>Recuperar</Text>

            </TouchableOpacity>

        </View>
    )
}