import React from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';

export default Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SmartShopIcon color={Colors.orange} width={178} height={39} />
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <View style={{ marginBottom: 15, marginTop: 50 }}>
                    <InputContrl
                        placeholder={'Email'} />
                </View>
                <InputContrl
                    placeholder={'Mật khẩu'}
                    secureTextEntry={true} />
                <View style={{
                    width: '100%', marginTop: 15,
                    alignItems: 'flex-end',
                    flexDirection: 'row-reverse'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
                        <Text style={{ color: Colors.purple }}>Quên Mật Khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Đăng nhập'}
                        color={Colors.white} />
                </View>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: Colors.purple }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


