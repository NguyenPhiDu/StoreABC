import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { createOrder } from '../../Utils/firebase';

export default Order = ({ navigation, route }) => {
    const cart = route.params.cart
    const money = route.params.money
    const quantity = route.params.quantity
    const { token } = useContext(AuthContext)
    const [account, setAccount] = useState({
        name: "",
        address: "",
        phone: ""
    })
    const GetAccount = () => {
        const Ref = ref(getDatabase(), `accounts/` + token.accountId)
        onValue(Ref, (data) => {
            setAccount({
                ...account,
                name: data.val().name,
                address: data.val().address,
                phone: data.val().phone,
            })
        })
    }

    useEffect(() => {
        GetAccount()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Xác nhận đặt hàng'} />
            <View style={{ flex: 0.8 }}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => (
                        <OrderItem img={item.img} name={item.productName} price={item.price}
                            quantity={item.quantity}
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
                            placeholderTextColor={Colors.gray}
                            value={account.name}
                            onChangeText={(e) => { setAccount({ ...account, name: e }) }} />
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
                            value={account.phone}
                            onChangeText={(e) => { setAccount({ ...account, phone: e }) }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng số Lượng :</Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, }}>{quantity}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tổng tiền : </Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 20, fontWeight: 'bold' }}>{money}đ</Text>
                </View>
                <View style={{}}>
                    <Text style={{ color: Colors.black, fontSize: 15, marginBottom: 5 }}>Địa chỉ nhận hàng :</Text>
                    <View style={{ borderColor: Colors.gray, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, height: 100 }}>
                        <TextInput
                            multiline={true}
                            placeholder='Nhập địa chỉ...'
                            value={account.address}
                            onChangeText={(e) => { setAccount({ ...account, address: e }) }} />
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
                    onPress={() => {
                        createOrder({
                            userId: token.accountId,
                            userName: account.name,
                            phone: account.phone,
                            address: account.address,
                            quantity: quantity,
                            money: money,
                            trangThai: false
                        })
                        navigation.navigate('Home')
                    }} />
            </View>
        </SafeAreaView >
    )
};