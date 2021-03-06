import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, LogBox, TouchableOpacity, Alert } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import AdminListPoductItem from '../../Components/AdminListPoductItem';
import ButtonContrl from '../../Components/ButtonContrl';
import DeleteIcon from '../../Icons/DeleteIcon';
import SearchIcon from '../../Icons/SearchIcon';
import Header from '../../Components/Header';
import { database } from '../../Utils/firebase-Config';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { del } from '../../Utils/firebase';

export default AdminProducts = ({ navigation }) => {

    const [product, setProduct] = useState([])

    const GetProduct = () => {
        const Ref = ref(database, `products/`)
        onValue(Ref, (data) => {
            let responselist = Object.values(data.val())
            setProduct(responselist)
        })
    }
    const handleseach = (text) => {
        if (text) {
            const newData = product.filter(function (item) {
                const Data = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return Data.indexOf(textData) > -1;
            });
            setProduct(newData)
        } else {
            GetProduct()
        }
    }
    useEffect(() => {
        GetProduct()
        LogBox.ignoreAllLogs();
        const willFocusSubscription = navigation.addListener('focus', () => {
            LogBox.ignoreAllLogs();
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Danh sách sản phẩm'} />
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.timKiem}>
                    <SearchIcon color={Colors.gray} />
                    <TextInput style={styles.inputSearch}
                        placeholder='Tìm Kiếm...'
                        data={product}
                        onChangeText={(e) => { handleseach(e) }} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={product}
                        renderItem={({ item }) => (
                            <AdminListPoductItem name={item.name}
                                img={item.img1} price={item.price}
                                rom={item.rom} quantity={item.quantity}
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
                                                onPress: () => del({ ref: 'products', id: item.id })
                                            }
                                        ]
                                    )
                                }}
                                onPress={() => navigation.navigate('AdminEditProducts', item.id)}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Thêm sản phẩm'}
                        color={Colors.white}
                        onPress={() => navigation.navigate('AdminAddProducts')}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
};