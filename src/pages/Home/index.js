import { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Product from "../../components/Product";
import { CartContext } from "../../contexts/CartContext";

export default function Home(){
    const { cart } = useContext(CartContext);
    const navigation = useNavigation();
    const [products, setProducts] = useState([
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

                <TouchableOpacity 
                style={styles.cartButton} 
                onPress={() => navigation.navigate('Cart') }
                >
                    <View style={styles.dot} >
                        <Text style={styles.dotText} >
                            {cart?.length}
                        </Text>
                    </View>

                    <Feather name="shopping-cart" size={30} color='#000' />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({item}) => <Product data={item} /> }
            />
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
    },
    title:{
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    dot:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#168FFF',
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
        fontSize: 11
    },
    cartButton:{
        
    }

})