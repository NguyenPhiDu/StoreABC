import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, View, Text, LogBox, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import CartItem from '../../Components/CartItem';
import ButtonContrl from '../../Components/ButtonContrl';
import DeleteIcon from '../../Icons/DeleteIcon';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';
import { delCart } from '../../Utils/firebase'
export default Cart = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState()
    const [money, setMoney] = useState()
    const GetCart = () => {
        const Ref = ref(database, 'carts/' + token.accountId);
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setCart(returnArr)
            sum(returnArr)
        });
    }
    const sum = (cart) => {
        var money = 0
        var quantity = 0
        if (cart.length > 1) {
            for (var i = 0; i < cart.length; i++) {
                money += cart[i].price * cart[1].quantity
                quantity += cart[i].quantity
            }
        }
        setMoney(money)
        setQuantity(quantity)
    }
    useEffect(() => {
        GetCart()
        const willFocusSubscription = navigation.addListener('focus', () => {
            LogBox.ignoreAllLogs();
            GetCart()
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Fil}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.SapXep}>Số lượng: </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: Colors.black }}>{quantity}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.SapXep}>Tổng tiền: </Text>
                    <Text style={{ color: Colors.red, fontSize: 15 }}>{money} đ</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                {token.accountId != "" ?
                    <FlatList
                        data={cart}
                        renderItem={({ item }) => (
                            <CartItem img={item.img} name={item.productName} price={item.price}
                                quantity={item.quantity}
                                onPress={() => {
                                    delCart({ userId: token.accountId, id: item.productId })
                                    GetCart()
                                }} />
                        )}
                        keyExtractor={item => item.id}
                    /> : null}
            </View>
            <View style={{ margin: 5 }}>
                <ButtonContrl
                    title={'Đặt hàng'} color={Colors.white}
                    onPress={() => navigation.navigate('Order', { quantity: quantity, money: money, cart: cart })} />
            </View>
        </SafeAreaView >
    )
};