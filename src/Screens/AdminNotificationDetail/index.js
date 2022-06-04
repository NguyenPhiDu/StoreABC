import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';
import { createBill, createBillUser, createNotification, delOrder } from '../../Utils/firebase';
import ModalAdmin from '../../Components/ModalAdmin';

export default AdminNotificationDetail = ({ navigation, route }) => {
    const bill = route.params.cart
    const cart = route.params.cart.carts
    const [modalVisible2, setModalVisible2] = useState(false);
    const [comment, setComment] = useState("");
    useEffect(() => {
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Chi tiết đơn hàng'} />
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
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>mã hóa đơn : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{bill.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Họ tên KH : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{bill.userName}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5, alignItems: 'center' }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{bill.userPhone}</Text>
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
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <ButtonContrl
                        title={'Xác nhận'} color={Colors.white}
                        onPress={() => {
                            createBill({
                                id: bill.id,
                                userId: bill.userId,
                                userName: bill.userName,
                                phone: bill.userPhone,
                                address: bill.userAddress,
                                quantity: bill.quantity,
                                money: bill.money,
                                cart: cart
                            })
                            createBillUser({
                                id: bill.id,
                                userId: bill.userId,
                                userName: bill.userName,
                                phone: bill.userPhone,
                                address: bill.userAddress,
                                quantity: bill.quantity,
                                money: bill.money,
                                cart: cart
                            })
                            createNotification({
                                userId: bill.userId,
                                id: bill.id,
                                userName: bill.userName,
                                comment: "đặt hàng thành công"
                            })
                            navigation.goBack()
                            delOrder({ id: bill.id })
                        }} />
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: Colors.white,
                            borderColor: Colors.black,
                            borderWidth: 1,
                            marginLeft: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            paddingVertical: 15,
                        }}
                        onPress={() => {
                            setModalVisible2(true)
                        }} >
                        <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 20 }}>Hủy</Text>
                    </TouchableOpacity>
                    <View>
                        <ModalAdmin
                            visible={modalVisible2}
                            onRequestClose={() => { setModalVisible2(!modalVisible2) }}
                            onPressOut={() => { setModalVisible2(!modalVisible2) }}
                            title={'lý do hủy đơn hàng'}
                            placeholder={'nhập lý do...'}
                            value={comment}
                            onChangeText={(e) => { setComment(e) }}
                            onPress={() => {
                                if (comment != "") {
                                    createNotification({
                                        userId: bill.userId,
                                        id: bill.id,
                                        userName: bill.userName,
                                        comment: comment
                                    })
                                    navigation.goBack()
                                    delOrder({ id: bill.id })
                                } else {
                                    alert('yêu cầu nhập lý do')
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
};