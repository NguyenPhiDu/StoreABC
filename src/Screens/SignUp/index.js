import React from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';

export default SignUp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SmartShopIcon color={Colors.orange} width={178} height={39} />
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <View style={{ marginBottom: 15, marginTop: 50 }}>
                    <InputContrl
                        placeholder={'Email'} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Mật khẩu'}
                        secureTextEntry={true} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Nhập lại mật khẩu'}
                        secureTextEntry={true} />
                </View>
                <View style={{ width: '100%', paddingVertical: 15 }}>
                    <ButtonContrl
                        title={'Đăng ký'}
                        color={Colors.white} />
                </View>
            </View>
        </SafeAreaView>
    );
};