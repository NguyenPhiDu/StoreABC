import React from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';
import Header from '../../Components/Header';

export default ResetPass = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Đổi mật khẩu'} />
            <View style={{ alignSelf: 'center', marginVertical: 20 }}>
                <SmartShopIcon color={Colors.orange} width={178} height={39} />
            </View>
            <ScrollView style={{ width: '100%', paddingHorizontal: 30, }}>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Mật khẩu cũ'}
                        secureTextEntry={true} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Mật khẩu mới'}
                        secureTextEntry={true} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Nhập lại mật khẩu mới'}
                        secureTextEntry={true} />
                </View>
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Xác nhận'}
                        color={Colors.white} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};