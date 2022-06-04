import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import AdminNotifiCationItem from '../../Components/AdminNotifiCationItem';
import Header from '../../Components/Header';
import ButtonContrl from '../../Components/ButtonContrl';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';

export default AdminNotifiCation = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const GetOrder = () => {
        const Ref = ref(database, 'orders/');
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setCart(returnArr)
        });
    }

    useEffect(() => {
        if (token.accountId != "") {
            GetOrder()
        }
    }, [token.accountId])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Xác nhận đơn hàng'} />
            <View style={styles.Fil}>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => (
                        <AdminNotifiCationItem name={item.userName} title={"Tên HK : "}
                            onPress={() => navigation.navigate('AdminNotificationDetail', { cart: item })}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{
                margin: 5,
                justifyContent: 'center'
            }}>
                <ButtonContrl
                    title={'Trở về'} color={Colors.white}
                    onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView >
    )
};