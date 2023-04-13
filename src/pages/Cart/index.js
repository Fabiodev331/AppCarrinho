import { View, Text, StyleSheet } from "react-native";

export default function Cart(){
    return(
        <View style={styles.Container}>
            <Text>Pagina Carinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})