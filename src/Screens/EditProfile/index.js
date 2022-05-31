import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import Header from '../../Components/Header';
import DateIcon from '../../Icons/DateIcon';
import CheckBox from '@react-native-community/checkbox';
import ButtonContrl from '../../Components/ButtonContrl';
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';
import { UpdateAccount } from '../../Utils/firebase';

export default EditProfile = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [isSelectedNam, setSelectionNam] = useState(false);
    const [isSelectedNu, setSelectionNu] = useState(false);
    const [account, setAccount] = useState({
        email: "",
        name: "",
        gender: "",
        birthday: "",
        address: "",
        phone: ""
    })
    const GetAccount = () => {
        database
            .ref(`accounts/` + token.accountId)
            .on('value', (data) => {
                setAccount({
                    ...account,
                    email: data.val().email,
                    name: data.val().name,
                    gender: data.val().gender,
                    birthday: data.val().birthday,
                    address: data.val().address,
                    phone: data.val().phone,
                })
                if (data.val().gender == "1") {
                    setSelectionNam(true)
                    setSelectionNu(false)
                } else {
                    setSelectionNam(false)
                    setSelectionNu(true)
                }
            })
    }

    const updateProfile = () => {
        UpdateAccount({ ...account, uid: token.accountId })
    }

    const nam = () => {
        setSelectionNam(true)
        setSelectionNu(false)
        setAccount({ ...account, gender: "1" })
    }
    const nu = () => {
        setSelectionNam(false)
        setSelectionNu(true)
        setAccount({ ...account, gender: "2" })
    }
    useEffect(() => {
        GetAccount()
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetAccount()
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Thông tin cá nhân'} />
            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingVertical: 40, marginTop: 20, backgroundColor: Colors.white }}>
                    <View style={{
                        backgroundColor: Colors.white,
                        borderColor: Colors.gray,
                        borderRadius: 10,
                        paddingLeft: 10,
                        borderWidth: 1,
                        height: 50,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: Colors.gray }}>{account.email}</Text>
                    </View>
                    <View style={{ backgroundColor: Colors.white, marginVertical: 10 }}>
                        <InputContrl
                            placeholder={'Họ tên'}
                            value={account.name}
                            onChangeText={(e) => { setAccount({ ...account, name: e }) }} />
                    </View>
                    <View style={{
                        backgroundColor: Colors.white, marginBottom: 10, flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: Colors.black }}>Giới tính :</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    value={isSelectedNam}
                                    onValueChange={nam}
                                    style={styles.checkbox}
                                />
                                <Text style={{ color: Colors.black }}>Nam</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    value={isSelectedNu}
                                    onValueChange={nu}
                                    style={styles.checkbox}
                                />
                                <Text style={{ color: Colors.black }}>Nữ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: Colors.white, marginBottom: 10, flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{ flex: 1 }}>
                            <InputContrl
                                placeholder={'năm sinh'}
                                value={account.birthday}
                                onChangeText={(e) => { setAccount({ ...account, birthday: e }) }} />
                        </View>
                        <TouchableOpacity style={{ marginHorizontal: 15 }}>
                            <DateIcon color={Colors.gray} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: Colors.white, marginBottom: 10 }}>
                        <InputContrl
                            placeholder={'Số điện thoại'}
                            keyboardType={'numeric'}
                            maxLength={10}
                            value={account.phone}
                            onChangeText={(e) => { setAccount({ ...account, phone: e }) }} />
                    </View>
                    <View style={{ backgroundColor: Colors.white }}>
                        <InputContrl
                            placeholder={'Địa chỉ'}
                            value={account.address}
                            onChangeText={(e) => { setAccount({ ...account, address: e }) }} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <ButtonContrl
                        title={'Lưu'}
                        color={Colors.white}
                        onPress={() => { updateProfile() }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


