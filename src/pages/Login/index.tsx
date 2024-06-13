import firebase                                                              from "../../data/firebaseConfig"
import { LoginStyle }                                                        from "./styles"
import { useNavigation }                                                     from "@react-navigation/native"
import { useEffect, useState }                                               from "react"
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native"

const logo  = require('../../assets/iconImg.png')
const login = require('../../assets/login.png')

export const Login: React.FC = ()=>{

    const [load,                    setLoad] = useState<boolean>(false)
    const [email,                  setEmail] = useState<string | any>('')
    const [password,            setPassword] = useState<string | number | any>('')
    const [userName,            setUserName] = useState<string | any>('') //estado para armazenar o nome
    const [showPassword,    setShowPassword] = useState<boolean>(false)
    const [loginSuccess,    setLoginSuccess] = useState<boolean>(false)  // Novo estado para controle do sucesso do login

    const navigation : any = useNavigation()

    const handleShowPass = ()=>{
        setShowPassword(!showPassword)
    }

    useEffect(()=>{

        let timer: NodeJS.Timeout;

        if(load && loginSuccess){ // Navega para "CameIn" apenas se o login for bem-sucedido
             
            timer = setTimeout(
                () => {

                navigation.navigate('CameIn') // alem de ir para outra tela eu passo o nome de usuário para ela tambem
                navigation.navigate('CameIn', { userName: userName })
                setLoad(false) //intenção: manter a tela de login apenas se o login for bem sucedido 

            }, 7000);

        }

        return () => clearTimeout(timer); // Limpa o timeout se o componente desmontar

    }, [load, loginSuccess, navigation])  // Adicionado loginSuccess na dependência

    const handleLogin = async ()=>{

        if(email !== '' && password !== ''){

            setLoad(true)
            setLoginSuccess(false)  // Reseta o estado de sucesso do login

            await firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                (value)=>{

                    setUserName(value.user?.displayName) // Salva o nome do usuário

                    console.log('')
                    console.log("======================================")
                    console.log(`🥸  Usuario ${value.user?.displayName} acessou a conta💚`)
                    console.log("======================================")
                    console.log('')

                    navigation.navigate('CameIn', { userName: value.user?.displayName }) // Navega para 'CameIn' após o login bem-sucedido
                }
            )
            .catch(

            (error)=>{

                setLoad(false)  // Interrompe o carregamento em caso de erro
                setLoginSuccess(false)  // Garante que o estado de sucesso do login seja falso

                switch (error.code) {

                    case 'auth/internal-error':
                        alert(`O e-mail ou senha está incorreto.`);
                        console.log(`Erro: ${error.code}`)
                        break;

                    case 'auth/invalid-email':
                        alert(`Insira um e-mail válido.`);
                        break;

                    case 'auth/too-many-requests':
                        alert('O acesso a esta conta foi temporariamente desabilitado devido a várias tentativas de login sem sucesso. Você pode restaurá-lo imediatamente redefinindo sua senha ou tentar novamente mais tarde.')
                        break;

                    default:
                        console.log(`Ops, deu erro >> ${error.code}: ${error.message}`);
                        alert(`Ocorreu um erro, tente novamente mais tarde.`);
                        break;
                }
            }
            )
            
            setEmail('')
            setPassword('')

        }  else{
            alert("Preencha todos os campos")
        }
    }

    return(
        <View style={LoginStyle.container}>

            <View style={LoginStyle.viewTitle}>

                <View style={LoginStyle.viewImg}>

                    <Image
                        source={logo}
                        style={LoginStyle.img}
                    />

                    <Text style={LoginStyle.titleImg}>WeB MustachE</Text>

                </View>

                <View style={LoginStyle.viewSubTitle}>

                    <Text style={LoginStyle.subTitle}>Realize o login</Text>
                    <Text style={LoginStyle.subTitle}>preenchendo os campos abaixo</Text>

                </View>

            </View>

            <View style={LoginStyle.viewInput}>

                <Text style={LoginStyle.textInput}>E-mail:</Text>
                <TextInput 
                    style={LoginStyle.input}
                    placeholder="Aqui vai seu e-mail..."
                    value={email}
                    onChangeText={(newEmail)=> setEmail(newEmail)}
                />

                <Text style={LoginStyle.textInput}>Passphrase:</Text>
                <TextInput 
                    style={LoginStyle.input}
                    placeholder="Aqui sua senha..."
                    value={password}
                    onChangeText={(newPass)=> setPassword(newPass)}
                    secureTextEntry={showPassword ? false : true}
                />

                <View style={LoginStyle.viewTouchButtons}>

                    <TouchableOpacity style={LoginStyle.showPass} onPress={handleShowPass}>

                        <Text style={LoginStyle.textShowPass}>
                            {showPassword ? "Ocultar senha" : "Mostrar senha"}
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={LoginStyle.showPass} onPress={()=>{navigation.navigate('RecoverPass')}}>

                        <Text style={LoginStyle.textShowPass}> Esqueceu a senha?</Text>

                    </TouchableOpacity>

                </View>

            </View>
            {
                load ?
                    (
                        <View style={LoginStyle.viewLoad}>
                            <Text style={LoginStyle.textLoad}>Logando... </Text>
                            <ActivityIndicator size={'large'} color={'black'} />
                        </View>
                    ):
                    (
                        <>
                            <TouchableOpacity style={LoginStyle.btnLogin} onPress={handleLogin}>
                                <Text style={LoginStyle.textBtnLogin}>Login</Text>
                                <Image 
                                    source={login}
                                    style={LoginStyle.imgLogin}
                                />
                            </TouchableOpacity>
                        </>
                    )
            }
        </View>
    )
}
