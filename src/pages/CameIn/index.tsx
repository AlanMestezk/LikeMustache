import { CameInStyles }                 from "./styles"
import { useNavigation }                from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"

export const CameIn: React.FC = ()=>{

    const navigation: any = useNavigation()

    return(

        <View style={CameInStyles.container}>
            
            <Text>Entrou, bem vindo</Text>

            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>

                <Text>Sair</Text>

            </TouchableOpacity>

        </View>
    )
}