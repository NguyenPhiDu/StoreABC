import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';
import { forgotPassword } from '../../Utils/firebase';

export default Login = ({ navigation }) => {
    const [email, setEmail] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <SmartShopIcon color={Colors.orange} width={178} height={39} />
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <View style={{ marginBottom: 15, marginTop: 50 }}>
                    <InputContrl
                        placeholder={'Email'}
                        onChangeText={(e) => {
                            setEmail(e)
                        }} />
                </View>
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Xác nhận'}
                        color={Colors.white}
                        onPress={() => { forgotPassword(email) }} />
                </View>
            </View>
        </SafeAreaView>
    );
};


