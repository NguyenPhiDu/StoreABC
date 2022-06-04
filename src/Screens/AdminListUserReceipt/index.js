import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import AdminNotifiCationItem from '../../Components/AdminNotifiCationItem';
import ButtonContrl from '../../Components/ButtonContrl';
import SearchIcon from '../../Icons/SearchIcon';
import Header from '../../Components/Header';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';

export default AdminListUserReceipt = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const GetBill = () => {
        const Ref = ref(database, 'accounts/')
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setCart(returnArr)
        });
    }
    const handleseach = (text) => {
        if (text) {
            const newData = cart.filter(function (item) {
                const Data = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return Data.indexOf(textData) > -1;
            });
            setCart(newData)
        } else {
            GetBill()
        }
    }

    useEffect(() => {
        if (token.accountId != "") {
            GetBill()
        }
    }, [token.accountId])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Danh khách hàng'} />
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.timKiem}>
                    <SearchIcon color={Colors.gray} />
                    <TextInput style={styles.inputSearch}
                        placeholder='Tìm Kiếm...'
                        value={cart}
                        onChangeText={(e) => { handleseach(e) }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={cart}
                        renderItem={({ item }) => (
                            <AdminNotifiCationItem name={item.name} title={"TênKH : "}
                                onPress={() =>
                                    navigation.navigate('AdminListReceipt', { userId: item.accountId })
                                }
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