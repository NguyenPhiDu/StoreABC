import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScollView, TouchableOpacity } from "react-native";
import ProfileControl from '../../Components/ProfileContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import UserIcon from '../../Icons/UserIcon'
import NotificationIcon from '../../Icons/NotificationIcon';
import CartIcon from '../../Icons/CartIcon';
import UpdateIcon from '../../Icons/UpdateIcon';
import LockIcon from '../../Icons/LockIcon';


export default User = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 2, backgroundColor: Colors.white, marginBottom: 15 }}>

            </View>
            <View style={{ flex: 5 }}>
                <ProfileControl
                    title={'Thông tin cá nhân'}
                    icon={<UserIcon color={Colors.black} height={24} width={24} />}
                    onPress={() => navigation.navigate('EditProfile')} />
                <ProfileControl title={'Thông báo'}
                    icon={<NotificationIcon color={Colors.black} />}
                    onPress={() => navigation.navigate('NotifiCation')} />
                <ProfileControl title={'Giỏ hàng'}
                    icon={<CartIcon color={Colors.black} width={24} height={24} />}
                    onPress={() => navigation.navigate('CartStack')} />
                <ProfileControl title={'Lịch sử mua hàng'}
                    icon={<UpdateIcon color={Colors.black} />}
                    onPress={() => navigation.navigate('HistoryProducts')} />
                <ProfileControl title={'Đổi mật khẩu'}
                    icon={<LockIcon color={Colors.black} />}
                    onPress={() => navigation.navigate('ResetPass')} />
            </View>
            <TouchableOpacity style={styles.Logout}>
                <Text style={{ color: Colors.black, fontWeight: 'bold' }}>Đăng xuất</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


