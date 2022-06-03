import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, LogBox, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import SearchIcon from '../../Icons/SearchIcon';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import samsung from '../../static/images/logoSamsung.png'
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import xiaomi from '../../static/images/logoXiaomi.png'
import iphone from '../../static/images/logoIphone.png'
import banner1 from '../../static/images/banner1.jpg'
import banner2 from '../../static/images/banner2.jpg'
import nokia from '../../static/images/logoNokia.png'
import oppo from '../../static/images/logoOppo.png'
import TheFirmItem from '../../Components/TheFirmItem';
import { styles } from './styles';
import ProductsItem from '../../Components/ProductsItem';
import { database } from '../../Utils/firebase-Config';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import AdminListPoductItem from '../../Components/AdminListPoductItem';
import ProductSearchItem from '../../Components/ProductSearchItem';
import { SliderBox } from "react-native-image-slider-box"

export default Home = ({ navigation }) => {

    const DATA = [{ id: '1', img: samsung, firm: 'samsung' }, { id: '2', img: xiaomi, firm: 'xiaomi' },
    { id: '3', img: iphone, firm: 'apple' }, { id: '4', img: nokia, firm: 'nokia' }, { id: '5', img: oppo, firm: 'oppo' }]

    const images = [banner2, banner1]
    const [product, setProduct] = useState([])
    const [temp, setTemp] = useState(false)
    const [product1, setProduct1] = useState([])
    const GetProduct = () => {
        const Ref = ref(database, `products/`)
        onValue(Ref, (data) => {
            let responselist1 = Object.values(data.val())
            let responselist2 = Object.values(data.val())
            setProduct1(responselist1)
            setProduct(responselist2.reverse())

        })
    }
    const handleseach = (text) => {
        text != "" ? setTemp(true) : setTemp(false)
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
            //GetProduct()
            //LogBox.ignoreAllLogs();
        })
        return willFocusSubscription
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={{
                    alignItems: 'flex-end', flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <SmartShopIcon color={Colors.orange} width={158} height={19} />
                </View>
                <View style={styles.timKiem}>
                    <SearchIcon color={Colors.gray} />
                    <TextInput style={styles.inputSearch}
                        placeholder='Tìm Kiếm...'
                        value={product}
                        onChangeText={(e) => { handleseach(e) }} />
                </View>
                {temp == false ?
                    <ScrollView>
                        <View style={{
                            justifyContent: 'center',
                            marginLeft: 15,
                            marginBottom: 10
                        }}>
                            <SliderBox
                                style={styles.ImageBackground}
                                images={images}
                                sliderBoxHeight={500}
                                dotColor="#2A2D3F"
                                inactiveDotColor="#90A4AE"
                                dotStyle={styles.dot}
                                autoplay={true}
                            />
                        </View>
                        <Text style={styles.ThuongHieu}>Hãng</Text>
                        <View>
                            <FlatList
                                horizontal
                                data={DATA}
                                renderItem={({ item }) => (
                                    <TheFirmItem img={item.img}
                                        onPress={() => navigation.navigate('Products', { firm: "1" })} />
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={styles.ThuongHieu}>Sản Phẩm mới</Text>
                            <View style={styles.styleViewAll}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Products', { firm: item.firm })}>
                                    <Text style={styles.viewAll}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                horizontal
                                data={product}
                                renderItem={({ item }) => (
                                    <ProductsItem img={item.img1} name={item.name} price={item.price}
                                        productId={item.id}
                                        onPress={() => navigation.navigate('ProductDetails', item.id)}
                                    />
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
                                data={product1}
                                renderItem={({ item }) => (
                                    <ProductsItem img={item.img1} name={item.name} price={item.price}
                                        onPress={() => navigation.navigate('ProductDetails', item.id)} />
                                )}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </ScrollView> :
                    <View style={{}}>
                        <FlatList
                            data={product}
                            renderItem={({ item }) => (
                                <ProductSearchItem name={item.name} img={item.img1} price={item.price}
                                    onPress={() => navigation.navigate('ProductDetails', item.id)} />
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                }
            </ScrollView >
        </SafeAreaView>
    )
};