import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, ScrollView, TouchableOpacity } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import Header from '../../Components/Header';
import DateIcon from '../../Icons/DateIcon';
import CheckBox from '@react-native-community/checkbox';
import ButtonContrl from '../../Components/ButtonContrl';

export default AdminAddProducts = ({ navigation }) => {
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
            <Header navigation={navigation} title={'Thêm sản phẩm'} />
            <ScrollView>
                <View>
                    <View style={{ marginHorizontal: 20 }}>
                        {/* <View style={{ marginVertical: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1 }}>
                            <TextInput
                                placeholder={'Mã sản phẩm...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View> */}
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Tên sản phẩm...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Số lượng...'}
                                maxLength={4}
                                keyboardType={'numeric'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Đơn giá...'}
                                keyboardType={'numeric'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Màn hình...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Hệ điều hành...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Camera trước...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Camera sau..'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Chip...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'RAM...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Bộ nhớ trong...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'SIM...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Pin, Sạc...'}
                            // value={ }
                            // onChangeText={() => { }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <ButtonContrl
                    title={'Lưu'}
                    color={Colors.white} />
            </View>
        </SafeAreaView>
    );
};


AdminAddProducts