import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import CartItem from '../../Components/CartItem';
import DeleteIcon from '../../Icons/DeleteIcon';

export default Cart = ({ navigation }) => {

    const DATA2 = [{
        id: '1',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '20000000'
    },
    {
        id: '2',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    },
    {
        id: '3',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    }];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Fil}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.SapXep}>Số lượng</Text>
                </View>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
                    <Text style={styles.SapXep}>Xóa hết</Text>
                    <DeleteIcon color={Colors.orange} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <FlatList
                    data={DATA2}
                    renderItem={({ item }) => (
                        <CartItem img={item.img} name={item.name} price={item.price}
                            onPress={() => navigation.navigate('ProductDetails')} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView >
    )
};