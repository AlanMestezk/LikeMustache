import firebase                                           from '../../data/firebaseConfig'
import { useState }                                       from "react"
import { RecoverPassStyle }                               from "./styles"
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native"
import { useNavigation } from '@react-navigation/native'

const logo        = require('../../assets/iconImg.png')
const recoverPass = require('../../assets/resetPassword.png')

export const RecoverPass: React.FC = ()=>{

    const navigation: any = useNavigation()

    const [email,     setEmail] = useState<string>('')
    const [message, setMessage] = useState<boolean>(false)

    const handleRecoverPass = async ()=>{

        if(email !== ''){

            setMessage(!message)

            try {

                await firebase.auth()
                .sendPasswordResetEmail(email)
    
            } catch (error: any) {
                
                switch (error.code) {
    
                    case 'auth/invalid-email':
                        alert("Endereço de e-mail inválido. Verifique o formato do e-mail")
                        break;
    
                    case 'auth/user-not-found':
                        alert("E-mail não encontrado. Verifique se o e-mail está registrado")
                        break;
    
                    case 'auth/network-request-failed':
                        alert("Verifique sua conexão com a internet e tente novamente.")
                        break;
                
                    default:
                        alert('Não foi possível enviar o e-mail de redefinição de senha. Tente novamente mais tarde')
                        console.log(`Erro interno: ${error}`)
                        break;
    
                }
    
            }

        }else{

            alert('Primeiro insira o e-mail')

        }
        
        
    }

    if(message){

        return(

            <View style={RecoverPassStyle.recoverContainer}>

                <Image 
                    source={logo} 
                    style={RecoverPassStyle.imgRecover}
                />

                <Text style={RecoverPassStyle.titleRecover}>Foram enviadas instruções de recuperação de senha</Text>
                <Text style={RecoverPassStyle.titleRecover}>no endereço de e-mail: {email}</Text>

                <TouchableOpacity style={RecoverPassStyle.button} onPress={()=>{navigation.navigate("Login")}}>

                    <Text style={RecoverPassStyle.textButton}>Voltar ao login</Text>

                </TouchableOpacity>

            </View>

        )
    }

    return(

        <View style={RecoverPassStyle.container}>

            <View style={RecoverPassStyle.viewTitle}>

                <Image
                    source={logo}
                    style={RecoverPassStyle.img}
                />

                <Text style={RecoverPassStyle.textTitle}>Web MustachE</Text>

            </View>

            <View style={RecoverPassStyle.viewSubtitle}>

                <Text style={RecoverPassStyle.subtitle}>Para recuperar a senha</Text>
                <Text style={RecoverPassStyle.subtitle}>informe seu e-mail cadastrado abaixo</Text>

            </View>

            <View style={RecoverPassStyle.viewInput}>

                <TextInput 
                    style={RecoverPassStyle.input}
                    placeholder="Aqui você digita seu e-mail.."
                    value={email}
                    onChangeText={(recovEmail) => setEmail(recovEmail)}
                />

            </View>

            

            <TouchableOpacity style={RecoverPassStyle.button} onPress={handleRecoverPass}>

                <Text style={RecoverPassStyle.textButton}>Recuperar</Text>

                <Image
                    source={recoverPass}
                    style={RecoverPassStyle.imgButton}
                />

            </TouchableOpacity>

        </View>
    )
}