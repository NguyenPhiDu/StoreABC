import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';
import Header from '../../Components/Header';
import { database, auth } from '../../Utils/firebase-Config';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Components/Redux/AuthContext';

export default ResetPass = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [newpass, setNewPass] = useState("")
    const [pass, setPass] = useState("")
    const user = auth.currentUser;
    const resetPass = () => {
        console.log(token.accountName)
        const emailCred = EmailAuthProvider.credential(token.accountName, pass);
        reauthenticateWithCredential(user, emailCred)
            .then(() => {
                updatePassword(user, newpass).then(() => {
                    alert("cập nhật thành công")
                    navigation.goBack()
                }).catch(error => {
                    alert(error)
                })


            })
            .catch(error => {
                alert(error)
            });
    }
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
                        secureTextEntry={true}
                        value={pass}
                        onChangeText={(e) => { setPass(e) }} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Mật khẩu mới'}
                        secureTextEntry={true}
                        value={newpass}
                        onChangeText={(e) => { setNewPass(e) }} />
                </View>
                {/* <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Nhập lại mật khẩu mới'}
                        secureTextEntry={true} />
                </View> */}
                <View style={{ width: '100%', marginVertical: 15 }}>
                    <ButtonContrl
                        title={'Xác nhận'}
                        color={Colors.white}
                        onPress={() => { resetPass() }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};