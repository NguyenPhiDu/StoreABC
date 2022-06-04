import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import CustomerItem from '../../Components/CustomerItem';
import ButtonContrl from '../../Components/ButtonContrl';
import DeleteIcon from '../../Icons/DeleteIcon';
import SearchIcon from '../../Icons/SearchIcon';
import Header from '../../Components/Header';
import { database } from '../../Utils/firebase-Config';
import { getDatabase, ref, set, onValue, push } from "firebase/database"

export default AdminCustomer = ({ navigation }) => {
    const [user, setUser] = useState([])
    const GetUser = () => {
        const Ref = ref(database, `accounts/`)
        onValue(Ref, (data) => {
            let responselist1 = Object.values(data.val())
            setUser(responselist1)

        })
    }

    const handleseach = (text) => {
        if (text) {
            const newData = user.filter(function (item) {
                const Data = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return Data.indexOf(textData) > -1;
            });
            setUser(newData)
        } else {
            GetUser()
        }
    }
    useEffect(() => {
        GetUser()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Danh sách khách hàng'} />
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.timKiem}>
                    <SearchIcon color={Colors.gray} />
                    <TextInput style={styles.inputSearch}
                        placeholder='Tìm Kiếm...'
                        value={user}
                        onChangeText={(e) => { handleseach(e) }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={user}
                        renderItem={({ item }) => (
                            <CustomerItem
                                MaKH={item.accountId}
                                TenKH={item.name}
                                SDT={item.phone}
                                address={item.address}
                            //onPress={() => navigation.navigate('Receipt')}
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