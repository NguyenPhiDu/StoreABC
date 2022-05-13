import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';

export default Order = ({ navigation }) => {

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
            <Header navigation={navigation} title={'Xác nhận đặt hàng'} />
            <View style={{ flex: 0.8 }}>
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
                <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Họ tên KH : </Text>
                    <View style={{ flex: 1, color: Colors.black }}>
                        <TextInput
                            style={{ borderBottomColor: Colors.gray, borderBottomWidth: 1, height: 40, }}
                            placeholder='nhập họ tên...'
                            placeholderTextColor={Colors.gray} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5, alignItems: 'center' }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <View style={{ flex: 1, color: Colors.black }}>
                        <TextInput
                            style={{ borderBottomColor: Colors.gray, borderBottomWidth: 1, height: 40, }}
                            placeholder='Nhập số điện thoại...'
                            placeholderTextColor={Colors.gray}
                            maxLength={10} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng số Lượng :</Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, }}>1 </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Phí vận chuyển :</Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 15, fontWeight: 'bold' }}>30000đ</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng tiền : </Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 15, fontWeight: 'bold' }}>200000000đ</Text>
                </View>
                <View style={{}}>
                    <Text style={{ color: Colors.black, fontSize: 15, marginBottom: 5 }}>Địa chỉ nhận hàng :</Text>
                    <View style={{ borderColor: Colors.gray, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, height: 100 }}>
                        <TextInput
                            multiline={true}
                            placeholder='Nhập địa chỉ...' />
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.7,
                margin: 5,
                justifyContent: 'center'
            }}>
                <ButtonContrl
                    title={'Đặt hàng'} color={Colors.white}
                    onPress={() => navigation.navigate('Order')} />
            </View>
        </SafeAreaView >
    )
};