import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Alert, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import AdminNotifiCationItem from '../../Components/AdminNotifiCationItem';
import ButtonContrl from '../../Components/ButtonContrl';
import SearchIcon from '../../Icons/SearchIcon';
import Header from '../../Components/Header';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';
import { delAdminBill } from '../../Utils/firebase';

export default AdminListReceipt = ({ navigation, route }) => {
    const { token } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const userId = route.params.userId
    const GetBill = () => {
        const Ref = ref(database, 'AdminBills/' + userId)
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
            GetBill()
        }
    }, [token.accountId])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Danh sách hóa đơn'} />
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.timKiem}>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={cart}
                        renderItem={({ item }) => (
                            <AdminNotifiCationItem name={item.id} title={"mã HD : "}
                                onPress={() => navigation.navigate('AdminInvoiceDetails', { cart: item })}
                                onPressDelete={() => {
                                    Alert.alert(
                                        "Thông báo",
                                        "bạn có muốn xóa ?",
                                        [
                                            {
                                                text: "Hủy",
                                                style: "cancel"
                                            },
                                            {
                                                text: "Đồng ý",
                                                onPress: () => delAdminBill({ userId: userId, id: item.id })
                                            }
                                        ]
                                    )
                                }}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Trở về'}
                        color={Colors.white}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
};