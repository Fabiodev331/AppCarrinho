import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

export default function EmpytCart(){
    return(
        <View style={styles.container}>

            <Feather name="shopping-cart" size={30} color='#000' />
            <Text style={styles.textCart}>Seu carrinho está vazio</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    textCart:{
        fontSize: 16,
        marginTop: 5,
        marginBottom: 30
    }
})