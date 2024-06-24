import { CameInStyles }                 from "./styles"
import { useNavigation, useRoute }      from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"

export const CameIn: React.FC = ()=>{

    const route           = useRoute()
    const {userName} = route.params as {userName?: string}
    const navigation: any = useNavigation()

    return(

        <View style={CameInStyles.container}>
            
            <Text style={CameInStyles.text}>Entrou, bem vindo</Text>
            <Text style={CameInStyles.text}>{userName || 'Usuário desconhecido'}</Text>

            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={CameInStyles.button}>

                <Text style={CameInStyles.textButton}>Sair</Text>

            </TouchableOpacity>

        </View>
    )
}