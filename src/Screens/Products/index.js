import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import SearchIcon from '../../Icons/SearchIcon';
import samsung from '../../static/images/logoSamsung.png'
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import xiaomi from '../../static/images/logoXiaomi.png'
import iphone from '../../static/images/logoIphone.png'
import nokia from '../../static/images/logoNokia.png'
import oppo from '../../static/images/logoOppo.png'
import TheFirmItem from '../../Components/TheFirmItem';
import { styles } from './styles';
import ProductsItem from '../../Components/ProductsItem';
import FilterIcon from '../../Icons/FilterIcon';



export default Products = () => {
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
    },
    {
        id: '6',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    },
    {
        id: '7',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    },
    {
        id: '8',
        img: GalaxyS22,
        name: 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        price: '10000'
    }];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Fil}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <FilterIcon color={Colors.orange} height={24} width={24} />
                    <Text style={styles.SapXep}>Bộ lọc</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
                    <Text style={styles.SapXep}>Xếp theo</Text>
                </View>
            </View>
            <View>
                <FlatList
                    numColumns={2}
                    data={DATA2}
                    renderItem={({ item }) => (
                        <ProductsItem img={item.img} name={item.name} price={item.price} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.Fil}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <FilterIcon color={Colors.orange} height={24} width={24} />
                    <Text style={styles.SapXep}>Bộ lọc</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
                    <Text style={styles.SapXep}>Xếp theo</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};


