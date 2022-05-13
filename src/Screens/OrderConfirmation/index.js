import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';

export default OrderConfirmation = ({ navigation }) => {

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
    },
    {
        id: '4',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    },
    {
        id: '5',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    }];
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Xác nhận đơn hàng'} />
            <View style={{ flex: 1.8 }}>
                <FlatList
                    data={DATA2}
                    renderItem={({ item }) => (
                        <OrderItem img={item.img} name={item.name} price={item.price}
                        // onPress={() => navigation.navigate('ProductDetails')} 
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{
                flex: 2,
                marginHorizontal: 5,
                marginVertical: 10,
                borderColor: Colors.gray,
                borderTopWidth: 2,
            }}>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tên KH : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, }}>Hứa Thành Vinh</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>1234567890</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng số Lượng :</Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, }}>1 </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Phí vận chuyển :</Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 17, fontWeight: 'bold' }}>30000đ</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng tiền : </Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 20, fontWeight: 'bold' }}>200000000đ</Text>
                </View>
                <View style={{}}>
                    <Text style={{ color: Colors.black, fontSize: 15, marginBottom: 5 }}>Địa chỉ nhận hàng :</Text>
                    <View style={{ borderColor: Colors.gray, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, height: 100 }}>
                        <Text style={{ color: Colors.gray, fontSize: 15, margin: 5 }}>địa chỉ nè</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.7,
                margin: 5,
                justifyContent: 'center'
            }}>
                <ButtonContrl
                    title={'Xác nhận'} color={Colors.white}
                // onPress={() => navigation.goBack()}
                />
            </View>
        </SafeAreaView >
    )
};