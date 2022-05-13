import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
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


export default User = ({ navigation }) => {
    const [temp, setTemp] = useState(false)
    const [temp2, setTemp2] = useState(false)
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
                    <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 'bold' }}>Xin chào</Text>
                    {
                        temp2 == true ?
                            <>
                                <Text style={{ color: Colors.orange, fontSize: 20 }}>Hứa Thành Vinh</Text>
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
                temp == false ?
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
                        </View>
                    </> :
                    <>
                        <View style={{ flex: 5 }}>
                            <ButtonProfileContrl
                                title={'Thông tin cá nhân'}
                                icon={<UserIcon color={Colors.black} height={24} width={24} />}
                                onPress={() => navigation.navigate('EditProfile')} />
                            <ButtonProfileContrl title={'Thông báo'}
                                icon={<NotificationIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('NotifiCation')} />
                            <ButtonProfileContrl title={'Giỏ hàng'}
                                icon={<CartIcon color={Colors.black} width={24} height={24} />}
                                onPress={() => navigation.navigate('CartStack')} />
                            <ButtonProfileContrl title={'Lịch sử mua hàng'}
                                icon={<UpdateIcon color={Colors.black} />}
                                onPress={() => navigation.navigate('HistoryProducts')} />
                            <ButtonProfileContrl title={'Đổi mật khẩu'}
                                icon={<LockIcon color={Colors.black} />}
                                onPress={() => navigation.navigate('ResetPass')} />
                        </View>
                    </>
            }
            <TouchableOpacity style={styles.Logout}>
                <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 20 }}>Đăng xuất</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


