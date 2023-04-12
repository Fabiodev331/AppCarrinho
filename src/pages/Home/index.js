import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";

import { Feather } from '@expo/vector-icons';

export default function Home(){
    const [] = useState([
        {
            id: '1',
            name: 'Coca cola',
            price: 19.90
        },
        {
            id: '2',
            name: 'Chocolate',
            price: 6.50
        },
        {
            id: '3',
            name: 'Queijo 500g',
            price: 15.00
        },
        {
            id: '4',
            name: 'Batata frita',
            price: 23.90
        },
        {
            id: '5',
            name: 'Guarana lata',
            price: 6.00
        },
        
    ])

    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.cartContent} >
                <Text style={styles.title} >Lista de produtos</Text>

                <TouchableOpacity style={styles.cartButton} >
                    <View style={styles.dot} >
                        <Text style={styles.dotText} >5</Text>
                    </View>

                    <Feather name="shopping-cart" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14,
    },
    cartContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 24,
        marginLeft: 10,
        marginRight: 10
    },
    title:{
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    dot:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 99,
        bottom: -1,
        left: -3
    },
    dotText:{
        color: '#121212',
        fontSize: 11,
    },
    cartButton:{
        
    }

})