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

export default Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const { setToken } = useContext(AuthContext)
    const { token } = useContext(AuthContext)

    const check = () => {
        var pattern = /^\w+@gmail+?\.[a-zA-Z]{2,3}$/
        if (email === "" || pass === "") {
            alert('Yêu cầu nhập lại')
        } if (email.match(pattern)) {
            handleSignIn()
        }
    }

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, pass)
            .then((account) => {
                setToken({ accountId: account.user.uid, accountName: account.user.email })
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
                <InputContrl
                    placeholder={'Mật khẩu'}
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={(e) => {
                        setPass(e)
                    }} />
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
                        color={Colors.white}
                        onPress={() => check()} />
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


