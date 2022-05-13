import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import Header from '../../Components/Header';
import DateIcon from '../../Icons/DateIcon';
import CheckBox from '@react-native-community/checkbox';
import ButtonContrl from '../../Components/ButtonContrl';

export default EditProfile = ({ navigation }) => {
    const [isSelectedNam, setSelectionNam] = useState(false);
    const [isSelectedNu, setSelectionNu] = useState(false);
    const nam = () => {
        setSelectionNam(true)
        setSelectionNu(false)
    }
    const nu = () => {
        setSelectionNam(false)
        setSelectionNu(true)
    }
    return (
        <SafeAreaView style={styles.container}>
                <Header navigation={navigation} title={'Thông tin cá nhân'} />
            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingVertical: 40, marginTop: 20, backgroundColor: Colors.white }}>
                    <View style={{ backgroundColor: Colors.white, }}>
                        <InputContrl
                            placeholder={'Email'} />
                    </View>
                    <View style={{ backgroundColor: Colors.white, marginVertical: 10 }}>
                        <InputContrl
                            placeholder={'Họ tên'} />
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
                                placeholder={'năm sinh'} />
                        </View>
                        <TouchableOpacity style={{ marginHorizontal: 15 }}>
                            <DateIcon color={Colors.gray} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: Colors.white, marginBottom: 10 }}>
                        <InputContrl
                            placeholder={'Số điện thoại'}
                            keyboardType={'numeric'}
                            maxLength={10} />
                    </View>
                    <View style={{ backgroundColor: Colors.white }}>
                        <InputContrl
                            placeholder={'Địa chỉ'} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <ButtonContrl
                        title={'Lưu'}
                        color={Colors.white} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


