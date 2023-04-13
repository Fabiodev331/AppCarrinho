import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Product( {data} ){
    return(
        <View style={styles.container} >
            <View>
                <Text style={styles.title} >{data.name}</Text>
                <Text  style={styles.price} >R$ {data.price}</Text>
            </View>

            <TouchableOpacity 
            style={styles.buttonAdd} 
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontWeight: 'bold',
    },
    buttonAdd:{
        backgroundColor: '#168FFF',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 6,
        paddingTop: 6,
        borderRadius: 2
    },
})