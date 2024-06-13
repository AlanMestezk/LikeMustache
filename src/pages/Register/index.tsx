import firebase                                                              from "../../data/firebaseConfig"
import { RegisterStyle }                                                     from "./styles"
import { useEffect, useState }                                               from "react"
import { CommonActions, useNavigation }                                      from "@react-navigation/native"
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator } from "react-native"

const logo     = require('../../assets/iconImg.png')
const register = require('../../assets/register.png')

export const Register: React.FC = ()=>{

    const [name,                 setName] = useState<string | any>('')
    const [load,                 setLoad] = useState<boolean>(false)
    const [email,               setEmail] = useState<string | any>('')
    const [password,         setPassword] = useState<string | number | any>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const navigation : any = useNavigation()

    useEffect(
        () => {

            let timer: NodeJS.Timeout;

            if (load) {

                timer = setTimeout(

                    () => {

                        navigation.dispatch(

                            CommonActions.reset(

                                {
                                    index: 1,
                                    routes: [
                                        { name: 'Home' },
                                        { name: 'Login', params:{userName: name} }
                                    ]
                                }
                            )
                        );

                        setLoad(false);  // Mantém a tela de carregamento apenas se o registro for bem-sucedido

                    }, 18000); // 10 segundos
            }
            return () => clearTimeout(timer); // Limpa o timeout se o componente desmontar

        }, [load, navigation]
    );

    const handleShowPass = () => {

        setShowPassword(!showPassword)

    }

    const handleSingUp = async () => {

        if (email !== '' && password !== '' && name !== '') {

            setLoad(true); // inicia o carregamento de 10 seg

            await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    (value: any) => {
                        
                        console.log('')
                        console.log("======================================")
                        console.log(`🥸 Usuário cadastrado com sucesso✅`)
            
                        // Atualizando o perfil do usuário para incluir o nome do usuário
                        value.user.updateProfile(
                            {displayName: name}

                        ).then(
                            () => {
                                
                                
                                console.log(`🥸 Nome: ${name}`)
                                console.log("======================================")
                                console.log('')
                            }
                        ).catch(
                            (error: any) => {
                                console.error(`🥸 Erro ao salvar o nome do usuário: ${error}`);
                            }
                        );
            
                        //cadastrando o nome dentro do laço
                        firebase.database()
                                .ref('Users')
                                .child(value.user?.uid)
                                .set(
                                    {
                                        name: name
                                    }
                                )
            
                        setLoad(true);  // Inicia o redirecionamento após o sucesso do registro
            
                    }
                )
                .catch(
                        (error) => {

                            setLoad(false);  // Interrompe o redirecionamento em caso de erro

                            switch (error.code) {

                                case 'auth/weak-password':
                                    alert(`Senha muito curta, insira uma com pelo menos 6 caracteres.`);
                                    break;

                                case 'auth/invalid-email':
                                    alert(`Insira um e-mail válido.`);
                                    break;

                                case 'auth/email-already-in-use':
                                    alert(`Já existe uma conta com o endereço de e-mail fornecido`);
                                    break;  // Retorna aqui para não redirecionar

                                default:
                                    console.error(`Não foi possível cadastrar usuário: ${error.message}`);
                                    alert('Erro desconhecido ao cadastrar usuário. Por favor, tente novamente mais tarde.');
                                    break;
                        }
                    }
                );

            setEmail('')
            setPassword('')
            setName('')

        } else {

            alert(`Preencha todos os campos`)
        }
    }

    if (load) {
        return (

            <View style={RegisterStyle.viewLoad}>

                <Image source={logo} style={RegisterStyle.logo} />

                <Text style={RegisterStyle.textLoad}>Usuário sendo cadastrado</Text>
                <Text style={RegisterStyle.textLoad}>redirecionando para o login</Text>

                <ActivityIndicator size={'large'} color={'black'} />

            </View>
        )
    }

    return (

        <View style={RegisterStyle.container}>

            <View style={RegisterStyle.viewLogo}>

                <Image source={logo} style={RegisterStyle.logo} />
                <Text style={RegisterStyle.textLogo}>WeB MustachE</Text>

            </View>

            <View style={RegisterStyle.viewText}>

                <Text style={RegisterStyle.text}>PARA COMEÇAR</Text>
                <Text style={RegisterStyle.text}>PREENCHA OS CAMPOS ABAIXO</Text>

            </View>

            <View style={RegisterStyle.viewInput}>

                <Text style={RegisterStyle.inputText}>Name:</Text>
                <TextInput
                    style={RegisterStyle.input}
                    placeholder="digite seu nome..."
                    value={name}
                    onChangeText={(newName) => setName(newName)}
                />

                <Text style={RegisterStyle.inputText}>E-mail:</Text>
                <TextInput
                    style={RegisterStyle.input}
                    placeholder="digite seu e-mail..."
                    value={email}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                />

                <Text style={RegisterStyle.inputText}>Password:</Text>
                <TextInput
                    style={RegisterStyle.input}
                    placeholder="digite sua senha..."
                    value={password}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    secureTextEntry={showPassword ? false : true}
                />

                <TouchableOpacity onPress={handleShowPass} style={RegisterStyle.touchShowPass}>

                    <Text style={RegisterStyle.texShowPass}>
                        {showPassword ? "Ocultar senha" : "Mostrar senha"}
                    </Text>

                </TouchableOpacity>

            </View>

            <TouchableOpacity style={RegisterStyle.touchButton} onPress={handleSingUp}>

                <Text style={RegisterStyle.textBtn}>Sing Up</Text>
                <Image source={register} style={RegisterStyle.imgButton} />

            </TouchableOpacity>

        </View>
    )
}
