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
import { Badge } from "@react-native-material/core";

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
    const [notification, setNotification] = useState()
    const [adminNotification, setAdminNotification] = useState()
    const GetNotification = () => {
        const Ref = ref(database, 'notifications/' + token.accountId)
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setNotification(returnArr.length)
        });
    }
    const GetAdminNotification = () => {
        const Ref = ref(database, 'orders/')
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setAdminNotification(returnArr.length)
        });
    }
    useEffect(() => {
        if (token.accountId != "") {
            GetAccount()
        }
        GetAdminNotification()
        GetNotification()
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetNotification()
            GetAdminNotification()
        })
        return willFocusSubscription
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
                        source={require('../../static/images/User.png')} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: Colors.black, fontSize: 13, fontWeight: 'bold' }}>Xin ch??o</Text>
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
                                    <Text style={{ color: Colors.white }}>????ng nh???p</Text>
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
                                title={'Qu???n l?? kh??ch h??ng'}
                                icon={<UserIcon color={Colors.black} height={24} width={24} />}
                                onPress={() => navigation.navigate('AdminCustomer')}
                            />
                            <ButtonProfileContrl title={'Th??ng b??o'}
                                notification={
                                    token.accountId != "" ? <Badge label={adminNotification} color="error" /> : null}
                                icon={<NotificationIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('AdminNotification')}
                            />
                            <ButtonProfileContrl title={'Qu???n l?? h??a ????n'}
                                icon={<ReceiptIcon color={Colors.black} />}
                                onPress={() => navigation.navigate('AdminListUserReceipt')}
                            />
                            <ButtonProfileContrl title={'Qu???n l?? s???n ph???m'}
                                icon={<CartIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('AdminProducts')}
                            />
                            <ButtonProfileContrl title={'Th???ng k??'}
                                icon={<StatisticIcon color={Colors.black} width={24} height={24} />}
                            // onPress={() => navigation.navigate('NotifiCation')}
                            />
                            <ButtonProfileContrl title={'?????i m???t kh???u'}
                                icon={<LockIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "") {
                                        navigation.navigate('ResetPass')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                        </View>
                    </> :
                    <>
                        <View style={{ flex: 5 }}>
                            <ButtonProfileContrl
                                title={'Th??ng tin c?? nh??n'}
                                icon={<UserIcon color={Colors.black} height={24} width={24} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('EditProfile')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Th??ng b??o'}
                                icon={<NotificationIcon color={Colors.black} width={24} height={24} />}
                                notification={
                                    token.accountId != "" ? <Badge label={notification} color="error" /> : null}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('NotifiCation')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                            <ButtonProfileContrl title={'Gi??? h??ng'}
                                icon={<CartIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('CartStack')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                            <ButtonProfileContrl title={'L???ch s??? mua h??ng'}
                                icon={<UpdateIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('HistoryProducts')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                            <ButtonProfileContrl title={'?????i m???t kh???u'}
                                icon={<LockIcon color={Colors.black} />}
                                onPress={() => {
                                    if (token.accountId != "" && token.accountName != "admin@gmail.com") {
                                        navigation.navigate('ResetPass')
                                    } else {
                                        Alert.alert("Th??ng b??o", "Y??u c???u ????ng nh???p")
                                    }
                                }} />
                        </View>
                    </>
            }
            <TouchableOpacity style={styles.Logout}
                onPress={() =>
                    setToken({ accountId: "", accountName: "" })
                }>
                <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 20 }}>????ng xu???t</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


