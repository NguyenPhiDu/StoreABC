import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import NotifiCationItem from '../../Components/NotifiCationItem';
import Header from '../../Components/Header';

export default NotifiCation = ({ navigation }) => {

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
            <Header navigation={navigation} title={'Thông báo'} />
            <View style={styles.Fil}>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <FlatList
                    data={DATA2}
                    renderItem={({ item }) => (
                        <NotifiCationItem name={item.name}
                            // onPress={() => navigation.navigate('ProductDetails')}
                             />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView >
    )
};