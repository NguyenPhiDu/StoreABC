import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, ScollView, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import SmartShopIcon from '../../Icons/SmartShopIcon';
import ButtonContrl from '../../Components/ButtonContrl';
import InputContrl from '../../Components/InputContrl';
import { auth } from '../../Utils/firebase-Config';
import { createAccount } from '../../Utils/firebase';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    const { setToken } = useContext(AuthContext)

    const check = () => {
        var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/
        if (email === "" || pass === "" || pass2 === "" || pass != pass2) {
            alert('Yêu cầu nhập lại')
        } if (email.match(pattern)) {
            handleSignUp()
        }
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(email, pass)
            .then((account) => {
                setToken({ accountId: account.user.uid, accountName: account.user.email })
                createAccount(account.user)
                navigation.navigate("User")
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <SmartShopIcon color={Colors.orange} width={178} height={39} />
            <View style={{ width: '100%', paddingHorizontal: 30 }}>
                <View style={{ marginBottom: 15, marginTop: 50 }}>
                    <InputContrl
                        placeholder={'Email'}
                        value={email}
                        onChangeText={(e) => {
                            setEmail(e)
                        }} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Mật khẩu'}
                        secureTextEntry={true}
                        value={pass}
                        onChangeText={(e) => {
                            setPass(e)
                        }} />
                </View>
                <View style={{ marginBottom: 15, marginTop: 5 }}>
                    <InputContrl
                        placeholder={'Nhập lại mật khẩu'}
                        secureTextEntry={true}
                        value={pass2}
                        onChangeText={(e) => {
                            setPass2(e)
                        }} />
                </View>
                <View style={{ width: '100%', paddingVertical: 15 }}>
                    <ButtonContrl
                        title={'Đăng ký'}
                        color={Colors.white}
                        onPress={() => {
                            check()
                        }} />
                </View>
            </View>
        </SafeAreaView>
    );
};