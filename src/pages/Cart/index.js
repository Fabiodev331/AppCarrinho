import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";
import EmpytCart from "../../components/EmptyCart";

export default function Cart(){
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

    return(
        <View style={styles.Container}>
            
            <FlatList
                data={cart}
                showsVerticalScrollIndicator= {false}
                keyExtractor={ (item) => String(item.id) }
                ListEmptyComponent={() => <EmpytCart/> }
                renderItem={({item}) => (
                <CartItem data={item} 
                    addAmount={() => addItemCart(item)} 
                    removeAmount={() => removeItemCart(item)}
                    />
                )}
                ListFooterComponent={() => <Text style={styles.total}>Total: R$ {total}</Text>}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14,
        paddingTop: 14
    },
    total:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 24
    }
})