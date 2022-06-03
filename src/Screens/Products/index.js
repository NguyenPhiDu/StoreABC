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
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { Picker } from '@react-native-picker/picker';

export default Products = ({ navigation, route }) => {
    const [product, setProduct] = useState([])
    const [product1, setProduct1] = useState([])
    const [selectedValue, setSelectedValue] = useState("All");
    const GetProduct = () => {
        const Ref = ref(database, `products/`)
        onValue(Ref, (data) => {
            let responselist = Object.values(data.val())
            setProduct(responselist)
            setProduct1(responselist)
        })
    }
    const filler = (text) => {
        if (text === "All") {
            return setProduct1(product)
        }
        if (text) {
            const newData = product.filter(function (item) {
                const Data = item.firm
                    ? item.firm.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return Data.indexOf(textData) > -1;
            });
            setProduct1(newData)
        }
        else {
            setProduct1(product)

        }
    }
    useEffect(() => {
        //if (route != "") {
        //setSelectedValue(route.params.name)
        //console.log(route)
        //console.log(route.params.firm || "")
        // }
        GetProduct()
        const willFocusSubscription = navigation.addListener('focus', () => {
            //GetProduct()
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
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) & filler(itemValue)}
                >
                    <Picker.Item label="All" value="All" />
                    <Picker.Item label="samsung" value="samsung" />
                    <Picker.Item label="apple" value="apple" />
                    <Picker.Item label="oppo" value="oppo" />
                    <Picker.Item label="nokia" value="nokia" />
                    <Picker.Item label="xiaomi" value="xiaomi" />
                </Picker>
            </View>
            <View>
                <FlatList
                    numColumns={2}
                    data={product1}
                    renderItem={({ item }) => (
                        <ProductsItem name={item.name} img={item.img1} price={item.price}
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


