import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, LogBox, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import HeaderColorPurple from '../../Components/HeaderColorPurple';
import ButtonContrl from '../../Components/ButtonContrl';
import { database } from '../../Utils/firebase-Config';
import { createCart } from '../../Utils/firebase';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { SliderBox } from "react-native-image-slider-box"
import AddIcon from '../../Icons/AddIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default ProductDetails = ({ navigation, route }) => {
    const { token } = useContext(AuthContext)
    const [images, setImages] = useState([])
    const [count, setCount] = useState(1);
    const [account, setAccount] = useState({
        userId: "",
        userName: "",
        phone: ""
    })
    const [product, setProduct] = useState({
        id: route.params,
        name: "",
        quantity: "",
        display: "",
        os: "",
        cameraS: "",
        cameraT: "",
        chip: "",
        ram: "",
        rom: "",
        sim: "",
        pin: "",
        price: "",
        firm: "",
        img1: "",
        img2: "",
        img3: "",
    })
    const GetProduct = () => {
        const Ref = ref(database, `products/` + route.params)
        onValue(Ref, (data) => {
            setProduct({
                ...product,
                name: data.val().name,
                display: data.val().display,
                os: data.val().os,
                cameraS: data.val().cameraS,
                cameraT: data.val().cameraT,
                chip: data.val().chip,
                ram: data.val().ram,
                rom: data.val().rom,
                sim: data.val().sim,
                pin: data.val().pin,
                price: data.val().price,
                firm: data.val().firm,
                img1: data.val().img1,
                img2: data.val().img2,
                img3: data.val().img3,
            })
            setImages([data.val().img1, data.val().img2, data.val().img3])
        })
    }


    const GetAccount = () => {
        const Ref = ref(getDatabase(), `accounts/` + token.accountId)
        onValue(Ref, (data) => {
            setAccount({
                ...account,
                userId: token.accountId,
                userName: data.val().name,
                phone: data.val().phone,
            })
        })
    }

    const check = () => {
        const quantity = count
        token.accountName != "" ? createCart({ ...account, ...product, quantity })
            : alert("Yêu cầu đăng nhập")
    }
    useEffect(() => {
        GetProduct()
        GetAccount()
        LogBox.ignoreAllLogs();
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetProduct()
            GetAccount()
            LogBox.ignoreAllLogs();
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderColorPurple navigation={navigation} title={'Chi tiết sản phẩm'} />
            <ScrollView>
                <View style={{ marginHorizontal: 20, borderRadius: 20, backgroundColor: Colors.white }}>
                    <View style={{
                        justifyContent: 'center',
                        padding: 10,
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
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ color: Colors.black, fontSize: 25, fontWeight: 'bold' }}>{product.name}</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: Colors.red, fontSize: 23, fontWeight: 'bold' }}>{product.price}đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 10 }}>
                            <TouchableOpacity style={{ padding: 2 }}
                                onPress={() => count < 2 ? setCount(1) : setCount(count - 1)}>
                                <RemoveIcon color={Colors.purple} />
                            </TouchableOpacity>
                            <Text style={{
                                color: Colors.purple, paddingHorizontal: 7, fontWeight: 'bold',
                                fontSize: 20
                            }}>{count}</Text>
                            <TouchableOpacity style={{ padding: 2 }}
                                onPress={() => setCount(count + 1)}>
                                <AddIcon color={Colors.purple}></AddIcon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={{ marginLeft: 30, marginTop: 20, color: Colors.black, fontSize: 17, fontWeight: 'bold' }}>Cấu hình sản phẩm :</Text>
                <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Màn hình :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.display}"</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Hệ điều hành :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.os}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera sau :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.cameraS}MP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera trước :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.cameraT}MP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Chip :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.chip}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>RAM :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.ram}GB</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Bộ nhớ trong :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.rom}GB</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SIM :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.sim}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Pin, Sạc :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{product.pin}mAh</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ margin: 20 }}>
                <ButtonContrl
                    onPress={() => {
                        check()
                    }}
                    title={'Thêm vào giỏ hàng'} color={Colors.white} />
            </View>
        </SafeAreaView>
    );
};


