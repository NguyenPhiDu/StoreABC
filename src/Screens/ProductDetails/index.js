import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, FlatList, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import HeaderColorPurple from '../../Components/HeaderColorPurple';
import ButtonContrl from '../../Components/ButtonContrl';
import RomItem from '../../Components/RomItem';
import { database } from '../../Utils/firebase-Config';
import { createCart } from '../../Utils/firebase';
import { AuthContext } from '../../Components/Redux/AuthContext';

export default ProductDetails = ({ navigation, route }) => {
    const { token } = useContext(AuthContext)
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
    })
    const GetProduct = () => {
        database
            .ref(`products/` + route.params)
            .on('value', (data) => {
                setProduct({
                    ...product,
                    name: data.val().name,
                    quantity: "1",
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
                    img: data.val().img
                })
            })
    }

    const GetAccount = () => {
        database
            .ref(`accounts/` + token.accountId)
            .on('value', (data) => {
                setAccount({
                    ...account,
                    userId: token.accountId,
                    userName: data.val().name,
                    phone: data.val().phone,
                })
            })
    }

    const check = () => {
        token.accountName != "" ? createCart({ ...account, ...product })
            : alert("Yêu cầu đăng nhập")
    }
    useEffect(() => {
        GetProduct()
        GetAccount()
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetProduct()
            GetAccount()
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderColorPurple navigation={navigation} title={'Chi tiết sản phẩm'} />
            <ScrollView>
                <View style={{ marginHorizontal: 20, borderRadius: 20, backgroundColor: Colors.white }}>
                    <View style={{ width: "100%", padding: 40, }}>
                        <Image
                            style={styles.img}
                            source={{ uri: product.img }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ color: Colors.black, fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
                        {/* <View style={{ marginVertical: 10, flexDirection: "row", flexWrap: "wrap" }}>
                            {DATA2?.map((item) => (
                                <RomItem
                                    selectItem={selectItem}
                                    setSelectItem={setSelectItem}
                                    item={item} />
                            ))
                            }
                        </View> */}
                        <View style={{ marginBottom: 20, flexDirection: 'row-reverse', alignItems: 'flex-end' }}>
                            <Text style={{ color: Colors.red, fontSize: 30, fontWeight: 'bold' }}>{product.price}đ</Text>
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


