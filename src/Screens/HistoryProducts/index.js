import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import Header from '../../Components/Header';
import HistoryItem from '../../Components/HistoryItem';

export default HistoryProducts = ({ navigation }) => {

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
    }];
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Lịch sử mua hàng'} />
            <View style={styles.Fil}>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <FlatList
                    data={DATA2}
                    renderItem={({ item }) => (
                        <HistoryItem img={item.img} name={item.name} price={item.price}
                            onPress={() => navigation.navigate('Receipt')} 
                            />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView >
    )
};