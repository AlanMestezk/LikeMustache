import { Home }                       from "../pages/Home";
import { Login }                      from "../pages/Login";
import { CameIn }                     from "../pages/CameIn";
import { Register }                   from "../pages/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoverPass } from "../pages/RecoverPass";

const Stack = createNativeStackNavigator();

export const Routes: React.FC = ()=>{

    return (
    
        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                component={Home} 
                options={
                    {
                        headerShown: false
                    }
                }
            />

            <Stack.Screen
                name='Register'
                component={Register} 
                options={

                    {
                        title: 'Cadastrar',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 22
                        }
                    }

                }
            />

            <Stack.Screen
                name='Login'
                component={Login} 
                options={
                    {
                        title: 'Entrar',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 22
                        }
                    }
                }
            />

            <Stack.Screen
                name='CameIn'
                component={CameIn} 
                options={
                    {
                        headerShown: false
                    }
                }
            />

            <Stack.Screen
                name='RecoverPass'
                component={RecoverPass} 
                options={
                    {
                        title: 'Recuperar senha'
                    }
                }
            />

        </Stack.Navigator>
    );

}