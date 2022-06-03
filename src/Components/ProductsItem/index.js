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
    const GetAccount = () => {
        if (token.accountId != "") {
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
    }
    const check = () => {
        if (token.accountId != "") {
            const quantity = count
            createCart({ ...account, ...props.item, quantity })
        } else {
            alert("Yêu cầu đăng nhập")
        }
    }
    useEffect(() => {
        GetAccount()
    }, [token.accountId])
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