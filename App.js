import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./screens/TelaInicial";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import EsqueciSenha from "./screens/EsqueciSenha";
import AlterarSenha from "./screens/AlterarSenha";
import AtivarConta from "./screens/AtivarConta";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
        ReenieBeanie: require("./assets/fonts/Reenie_Beanie/ReenieBeanie-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="TelaInicial"
                    component={TelaInicial}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />

                <Stack.Screen
                    name="EsqueciSenha"
                    component={EsqueciSenha}
                />

                <Stack.Screen
                    name="AlterarSenha"
                    component={AlterarSenha}
                />

                <Stack.Screen
                    name="AtivarConta"
                    component={AtivarConta}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}