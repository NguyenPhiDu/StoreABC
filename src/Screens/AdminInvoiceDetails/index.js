import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';
import { createBill } from '../../Utils/firebase';

export default AdminInvoiceDetails = ({ navigation, route }) => {
    const bill = route.params.cart
    const cart = route.params.cart.carts
    useEffect(() => {
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Chi tiết hóa đơn'} />
            <View style={{ flex: 0.8 }}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => (
                        <OrderItem img={item.img} name={item.productName} price={item.price}
                            quantity={item.quantity}
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
                            placeholderTextColor={Colors.gray}
                            value={bill.userName}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5, alignItems: 'center' }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <View style={{ flex: 1, color: Colors.black }}>
                        <TextInput
                            style={{ borderBottomColor: Colors.gray, borderBottomWidth: 1, height: 40, }}
                            placeholder='Nhập số điện thoại...'
                            placeholderTextColor={Colors.gray}
                            maxLength={10}
                            value={bill.userPhone}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng số Lượng :</Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, }}>{bill.quantity}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng tiền : </Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 20, fontWeight: 'bold' }}>{bill.money}đ</Text>
                </View>
                <View style={{}}>
                    <Text style={{ color: Colors.black, fontSize: 15, marginBottom: 5 }}>Địa chỉ nhận hàng :</Text>
                    <View style={{ borderColor: Colors.gray, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, height: 100 }}>
                        <TextInput
                            multiline={true}
                            placeholder='Nhập địa chỉ...'
                            value={bill.userAddress}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.7,
                margin: 5,
                justifyContent: 'center'
            }}>
                <ButtonContrl
                    title={'Trở về'} color={Colors.white}
                    onPress={() => {
                        navigation.goBack()
                    }} />
            </View>
        </SafeAreaView >
    )
};