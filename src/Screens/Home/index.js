import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import SearchIcon from '../../Icons/SearchIcon';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import samsung from '../../static/images/logoSamsung.png'
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import xiaomi from '../../static/images/logoXiaomi.png'
import iphone from '../../static/images/logoIphone.png'
import nokia from '../../static/images/logoNokia.png'
import oppo from '../../static/images/logoOppo.png'
import TheFirmItem from '../../Components/TheFirmItem';
import { styles } from './styles';
import ProductsItem from '../../Components/ProductsItem';

export default Home = ({ navigation }) => {
    // const [id, setId] = useState('1')
    // const [nameProduct, setnameProduct] = useState('1')
    // const [price, setPrice] = useState(1)

    const DATA = [{ id: '1', img: samsung }, { id: '2', img: xiaomi },
    { id: '3', img: iphone }, { id: '4', img: nokia }, { id: '5', img: oppo }]

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
    useEffect(() => {
       
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 1, alignItems: 'flex-end', flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <SmartShopIcon color={Colors.orange} width={158} height={19} />
            </View>
            <View style={styles.timKiem}>
                <SearchIcon color={Colors.gray} />
                <TextInput style={styles.inputSearch}
                    placeholder='Tìm Kiếm...' />
            </View>
            <ScrollView>
                <Text style={styles.ThuongHieu}>Hãng</Text>
                <View>
                    <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({ item }) => (
                            <TheFirmItem img={item.img}
                                onPress={() => navigation.navigate('ProductsStack')} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={styles.ThuongHieu}>Sản Phẩm mới</Text>
                    <View style={styles.styleViewAll}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProductsStack')}>
                            <Text style={styles.viewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal
                        data={DATA2}
                        renderItem={({ item }) => (
                            <ProductsItem img={item.img} name={item.name} price={item.price}
                                onPress={() => navigation.navigate('ProductDetails')} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={styles.ThuongHieu}>Xu hướng mua sắm</Text>
                    <View style={styles.styleViewAll}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProductsStack')}>
                            <Text style={styles.viewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, marginVertical: 10 }}>
                    <FlatList
                        horizontal
                        data={DATA2}
                        renderItem={({ item }) => (
                            <ProductsItem img={item.img} name={item.name} price={item.price} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
};