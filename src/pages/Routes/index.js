import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Home";
import Cart from "../cart";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: 'Meu Carrinho'
                }}
            />

        </Stack.Navigator>
    )
}