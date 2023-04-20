import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CartItem({ data, addAmount, removeAmount }){
    const [amount, setAmount] = useState(data?.amount)

    function handleIncrease(){
        addAmount();
        setAmount((item) => item + 1)
    }

    function handleDecrease(){
        removeAmount();

        if(amount === 0){
            setAmount(0);
            return;
        }
        setAmount(item => item -1)
    }

    return(
        <View style={styles.container}>

            <View style={styles.areaText}>
                <Text style={styles.name}> {data.name} </Text>
                <Text style={styles.price}> R$ {data.price} </Text>
            </View>

            <View style={styles.areaButton}>

                <TouchableOpacity style={styles.button} onPress={handleDecrease} >                   
                    <Text style={styles.menos}>-</Text>
                </TouchableOpacity>

                <Text style={styles.amount}>{amount}</Text>

                <TouchableOpacity style={styles.button} onPress={handleIncrease} >                   
                    <Text>+</Text>
                </TouchableOpacity> 

            </View>       
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    price:{
        fontSize: 15
    },
    areaButton:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaText:{
       marginBottom: 5,
       marginTop: 5
    },
    button:{
        backgroundColor: '#168FFF',
        paddingLeft: 16,
        paddingRight: 16,
        padding: 8,
        borderRadius: 2
    },
    amount:{
        marginLeft: 14,
        marginRight: 14
    },
    menos:{
        fontWeight: 'bold'
    }
})