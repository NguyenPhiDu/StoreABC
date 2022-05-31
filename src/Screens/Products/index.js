import React, { useState, useEffect } from 'react';
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
import { database } from '../../Utils/firebase-Config';

export default Products = ({ navigation }) => {
    const [product, setProduct] = useState([])
    const GetProduct = () => {
        database
            .ref(`products/`)
            .on('value', (data) => {
                let responselist = Object.values(data.val())
                setProduct(responselist)
            })
    }
    useEffect(() => {
        GetProduct()
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetProduct()
        })
        return willFocusSubscription
    }, [])
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
                    data={product}
                    renderItem={({ item }) => (
                        <ProductsItem name={item.name} img={item.img} price={item.price}
                            onPress={() => navigation.navigate('ProductDetails', item.id)} />
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


