import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import ReceiptItem from '../../Components/ReceiptItem';
import ButtonContrl from '../../Components/ButtonContrl';
import DeleteIcon from '../../Icons/DeleteIcon';
import SearchIcon from '../../Icons/SearchIcon';
import Header from '../../Components/Header';

export default AdminListReceipt = ({ navigation }) => {
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
            <Header navigation={navigation} title={'Danh sách hóa đơn'} />
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.timKiem}>
                    <SearchIcon color={Colors.gray} />
                    <TextInput style={styles.inputSearch}
                        placeholder='Tìm Kiếm...' />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={DATA2}
                        renderItem={({ item }) => (
                            <ReceiptItem img={item.img} name={item.name} price={item.price}
                                onPress={() => navigation.navigate('Receipt')}
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