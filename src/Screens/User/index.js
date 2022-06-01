import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import ButtonProfileContrl from '../../Components/ButtonProfileContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import UserIcon from '../../Icons/UserIcon'
import NotificationIcon from '../../Icons/NotificationIcon';
import StatisticIcon from '../../Icons/StatisticIcon';
import CartIcon from '../../Icons/CartIcon';
import ReceiptIcon from '../../Icons/ReceiptIcon';
import UpdateIcon from '../../Icons/UpdateIcon';
import LockIcon from '../../Icons/LockIcon';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database, auth } from '../../Utils/firebase-Config';
import { createProduct } from '../../Utils/firebase';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { updatePassword } from 'firebase/auth';

export default User = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const { setToken } = useContext(AuthContext)
    const [name, setName] = useState("")
    const GetAccount = () => {
        const Ref = ref(getDatabase(), `accounts/` + token.accountId)
        onValue(Ref, (data) => {
            setName(data.val().name)
        })
    }
    useEffect(() => {
        token.accountId != "" && GetAccount()
        // const willFocusSubscription = navigation.addListener('focus', () => {
        //     token.accountId != "" && GetAccount()
        // })
        // return willFocusSubscription
    }, [token.accountId])
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 2, backgroundColor: Colors.white, marginBottom: 15,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image style={{
                        width: 70,
                        height: 70,
                        borderRadius: 50
                    }}
                        source={require('../../static/images/GalaxyS22.jpg')} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: Colors.black, fontSize: 13, fontWeight: 'bold' }}>Xin chào</Text>
                    {
                        token.accountId != "" ?
                            <>
                                <Text style={{ color: Colors.orange, fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                            </> :
                            <>
                                <TouchableOpacity style={{
                                    borderRadius: 7,
                                    padding: 5, width: 100, alignItems: 'center',
                                    marginTop: 8, backgroundColor: Colors.orange
                                }}
                                    onPress={() => { navigation.navigate('Login') }}
                                >
                                    <Text style={{ color: Colors.white }}>Đăng nhập</Text>
                                </TouchableOpacity>
                            </>
                    }
                </View>
            </View>
            {
                token.accountId != "" && token.accountName == "admin@gmail.com" ?
                    <>
                        <View style={{ flex: 5 }}>
                            <ButtonProfileContrl
                                title={'Quản lý khách hàng'}
                                icon={<UserIcon color={Colors.black} height={24} width={24} />}
                                onPress={() => navigation.navigate('AdminCustomer')}
                            />
                            <ButtonProfileContrl title={'Thông báo'}
                                icon={<NotificationIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('AdminNotification')}
                            />
                            <ButtonProfileContrl title={'Quản lý hóa đơn'}
                                icon={<ReceiptIcon color={Colors.black} />}
                                onPress={() => navigation.navigate('AdminListReceipt')}
                            />
                            <ButtonProfileContrl title={'Quản lý sản phẩm'}
                                icon={<CartIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('AdminProducts')}
                            />
                            <ButtonProfileContrl title={'Thống kê'}
                                icon={<StatisticIcon color={Colors.black} width={24} height={24} />}
                            // onPress={() => navigation.navigate('NotifiCation')}
                            />
                             <ButtonProfileContrl title={'Đổi mật khẩu'}
                                icon={<LockIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "" ) {
                                        navigation.navigate('ResetPass')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                        </View>
                    </> :
                    <>
                        <View style={{ flex: 5 }}>
                            <ButtonProfileContrl
                                title={'Thông tin cá nhân'}
                                icon={<UserIcon color={Colors.black} height={24} width={24} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('EditProfile')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Thông báo'}
                                icon={<NotificationIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('NotifiCation')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Giỏ hàng'}
                                icon={<CartIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('CartStack')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Lịch sử mua hàng'}
                                icon={<UpdateIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('HistoryProducts')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Đổi mật khẩu'}
                                icon={<LockIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('ResetPass')
                                    } else {
                                        Alert.alert("Thông báo", "Yêu cầu đăng nhập")
                                    }
                                }} />
                        </View>
                    </>
            }
            <TouchableOpacity style={styles.Logout}
                onPress={() =>
                    setToken({ accountId: "", accountName: "" })
                }>
                <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 20 }}>Đăng xuất</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


