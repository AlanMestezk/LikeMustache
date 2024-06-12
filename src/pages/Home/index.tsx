import { HomeStyles }                          from "./styles"
import { useNavigation }                       from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from "react-native"

const logo     = require ('../../assets/iconImg.png')
const login    = require ('../../assets/login.png')
const register = require ('../../assets/register.png')

export const Home: React.FC = ()=>{

    const navigation : any =  useNavigation()

    return(

        <View style={HomeStyles.container}>

            <View style={HomeStyles.viewTitle}>

                <Image
                    source={logo}
                    style={HomeStyles.logo}
                />

                <Text style={HomeStyles.title}>WeB MustachE</Text> 

            </View>

            <View style={HomeStyles.viewButtons}>

                <TouchableOpacity style={HomeStyles.btn} onPress={()=>{navigation.navigate('Login')}}>

                    <Text style={HomeStyles.btnTitle}>Login</Text>

                    <Image
                        source={login}
                        style={HomeStyles.imgLogin}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={HomeStyles.btn} onPress={()=>{navigation.navigate('Register')}}>

                    <Text style={HomeStyles.btnTitle}>Register</Text>

                    <Image
                        source={register}
                        style={HomeStyles.imgRegister}
                    />

                </TouchableOpacity>

            </View>

        </View>
    )
}