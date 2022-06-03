import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, Image, Text, View, LogBox } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { database } from '../../Utils/firebase-Config';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { createCart } from '../../Utils/firebase';

export default ProductsItem = (props) => {
    const { token } = useContext(AuthContext)
    const [count, setCount] = useState(1);
    const [account, setAccount] = useState({
        userId: "",
        userName: "",
        phone: ""
    })
    const [product, setProduct] = useState({
        id: props.productId,
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
        const Ref = ref(database, `products/` + props.productId)
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
        })
        GetAccount()
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
    // const check = () => {
    //     if (token.accountId != "") {
    //         GetProduct()
    //         const quantity = count
    //         createCart({ ...account, ...product, quantity })
    //     } else {
    //         alert("Yêu cầu đăng nhập")
    //     }
    // }
    // useEffect(() => {
    //     if (token.accountId != "") {
    //         if (props != null) {
    //             GetProduct()
    //         }

    //     }
        // GetAccount()
        // LogBox.ignoreAllLogs();
        // const willFocusSubscription = navigation.addListener('focus', () => {
        //     if (token.accountId != "") {
        //         GetProduct()
        //     }
        //     LogBox.ignoreAllLogs();
        // })
        // return willFocusSubscription
   // }, [token.accountId, props])
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={{ uri: props.img }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.price}>{props.price}đ</Text>
                    <TouchableOpacity style={{ padding: 2 }}
                        onPress={() => { check() }}>
                        <AddIcon color={Colors.purple}></AddIcon>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};