import React, { useState, useEffect } from 'react';
import { SafeAreaView, Modal, View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import Header from '../../Components/Header';
import DateIcon from '../../Icons/DateIcon';
import CheckBox from '@react-native-community/checkbox';
import ButtonContrl from '../../Components/ButtonContrl';
import ModalAdmin from '../../Components/ModalAdmin';
import EditIcon from '../../Icons/EditIcon';
import { database } from '../../Utils/firebase-Config';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { UpdateProduct } from '../../Utils/firebase';

export default AdminEditProducts = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    const [modalVisible7, setModalVisible7] = useState(false);
    const [modalVisible8, setModalVisible8] = useState(false);
    const [modalVisible9, setModalVisible9] = useState(false);
    const [modalVisible10, setModalVisible10] = useState(false);
    const [modalVisible11, setModalVisible11] = useState(false);
    const [modalVisible12, setModalVisible12] = useState(false);
    const [modalVisible13, setModalVisible13] = useState(false);

    const [product, setProduct] = useState({
        id: route.params,
        name: "",
        quantity: "",
        display: "",
        os: "",
        cameraS: "",
        cameraT: "",
        chip: "",
        ram: "",
        rom: "",
        sim: "",
        pin: "",
        price: "",
        firm: "",
    })

    const GetProduct = () => {
            const Ref = ref( database,`products/` + route.params)
            onValue(Ref, (data) => {
                setProduct({
                    ...product,
                    name: data.val().name,
                    quantity: data.val().quantity,
                    display: data.val().display,
                    os: data.val().os,
                    cameraS: data.val().cameraS,
                    cameraT: data.val().cameraT,
                    chip: data.val().chip,
                    ram: data.val().ram,
                    rom: data.val().rom,
                    sim: data.val().sim,
                    pin: data.val().pin,
                    price: data.val().price,
                    firm: data.val().firm,
                })
            })
    }
    const updateProduct = () => {
        UpdateProduct({ ...product, id: route.params })
    }
    useEffect(() => {
        GetProduct()
        const willFocusSubscription = navigation.addListener('focus', () => {
            GetProduct()
        })
        return willFocusSubscription
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Thông tin sản phẩm'} />
            <ScrollView>
                <View>
                    <ModalAdmin
                        visible={modalVisible2}
                        onRequestClose={() => { setModalVisible2(!modalVisible2) }}
                        onPressOut={() => { setModalVisible2(!modalVisible2) }}
                        title={'Tên sản phẩm'}
                        placeholder={'Tên sản phẩm...'}
                        value={product.name}
                        onChangeText={(e) => { setProduct({ ...product, name: e }) }}
                        onPress={() => { setModalVisible2(!modalVisible2) }}
                    />
                    <ModalAdmin
                        visible={modalVisible3}
                        onRequestClose={() => { setModalVisible3(!modalVisible3); }}
                        onPressOut={() => { setModalVisible3(!modalVisible3) }}
                        title={'Số lượng'}
                        placeholder={'Số lượng...'}
                        keyboardType={'numeric'}
                        maxLength={4}
                        value={product.quantity}
                        onChangeText={(e) => { setProduct({ ...product, quantity: e }) }}
                        onPress={() => { setModalVisible3(!modalVisible3) }}
                    />
                    <ModalAdmin
                        visible={modalVisible4}
                        onRequestClose={() => { setModalVisible4(!modalVisible4); }}
                        onPressOut={() => { setModalVisible4(!modalVisible4) }}
                        title={'Màn hình'}
                        placeholder={'Màn hình...'}
                        value={product.display}
                        onChangeText={(e) => { setProduct({ ...product, display: e }) }}
                        onPress={() => { setModalVisible4(!modalVisible4) }}
                    />
                    <ModalAdmin
                        visible={modalVisible5}
                        onRequestClose={() => { setModalVisible5(!modalVisible5); }}
                        onPressOut={() => { setModalVisible5(!modalVisible5) }}
                        title={'Hệ điều hành'}
                        placeholder={'Hệ điều hành...'}
                        value={product.os}
                        onChangeText={(e) => { setProduct({ ...product, os: e }) }}
                        onPress={() => { setModalVisible5(!modalVisible5) }}
                    />
                    <ModalAdmin
                        visible={modalVisible6}
                        onRequestClose={() => { setModalVisible6(!modalVisible6); }}
                        onPressOut={() => { setModalVisible6(!modalVisible6) }}
                        title={'Camera sau'}
                        placeholder={'Camera sau...'}
                        keyboardType={'numeric'}
                        value={product.cameraS}
                        onChangeText={(e) => { setProduct({ ...product, cameraS: e }) }}
                        onPress={() => { setModalVisible6(!modalVisible6) }}
                    />
                    <ModalAdmin
                        visible={modalVisible7}
                        onRequestClose={() => { setModalVisible7(!modalVisible7); }}
                        onPressOut={() => { setModalVisible7(!modalVisible7) }}
                        title={'Camera trước'}
                        placeholder={'Camera trước...'}
                        keyboardType={'numeric'}
                        value={product.cameraT}
                        onChangeText={(e) => { setProduct({ ...product, cameraT: e }) }}
                        onPress={() => { setModalVisible7(!modalVisible7) }}
                    />
                    <ModalAdmin
                        visible={modalVisible8}
                        onRequestClose={() => { setModalVisible8(!modalVisible8); }}
                        onPressOut={() => { setModalVisible8(!modalVisible8) }}
                        title={'Chip'}
                        placeholder={'Chip...'}
                        value={product.chip}
                        onChangeText={(e) => { setProduct({ ...product, chip: e }) }}
                        onPress={() => { setModalVisible8(!modalVisible8) }}
                    />
                    <ModalAdmin
                        visible={modalVisible9}
                        onRequestClose={() => { setModalVisible9(!modalVisible9); }}
                        onPressOut={() => { setModalVisible9(!modalVisible9) }}
                        title={'RAM'}
                        placeholder={'RAM...'}
                        keyboardType={'numeric'}
                        value={product.ram}
                        onChangeText={(e) => { setProduct({ ...product, ram: e }) }}
                        onPress={() => { setModalVisible9(!modalVisible9) }}
                    />
                    <ModalAdmin
                        visible={modalVisible10}
                        onRequestClose={() => { setModalVisible10(!modalVisible10); }}
                        onPressOut={() => { setModalVisible10(!modalVisible10) }}
                        title={'Bộ nhớ trong'}
                        placeholder={'Bộ nhớ trong...'}
                        keyboardType={'numeric'}
                        value={product.rom}
                        onChangeText={(e) => { setProduct({ ...product, rom: e }) }}
                        onPress={() => { setModalVisible10(!modalVisible10) }}
                    />
                    <ModalAdmin
                        visible={modalVisible11}
                        onRequestClose={() => { setModalVisible11(!modalVisible11); }}
                        onPressOut={() => { setModalVisible11(!modalVisible11) }}
                        title={'SIM'}
                        placeholder={'SIM...'}
                        value={product.sim}
                        onChangeText={(e) => { setProduct({ ...product, sim: e }) }}
                        onPress={() => { setModalVisible11(!modalVisible11) }}
                    />
                    <ModalAdmin
                        visible={modalVisible12}
                        onRequestClose={() => { setModalVisible12(!modalVisible12); }}
                        onPressOut={() => { setModalVisible12(!modalVisible12) }}
                        title={'Pin, Sac'}
                        placeholder={'Pin, sạc...'}
                        value={product.pin}
                        onChangeText={(e) => { setProduct({ ...product, pin: e }) }}
                        onPress={() => { setModalVisible12(!modalVisible12) }}
                    />
                    <ModalAdmin
                        visible={modalVisible13}
                        onRequestClose={() => { setModalVisible13(!modalVisible13); }}
                        onPressOut={() => { setModalVisible13(!modalVisible13) }}
                        title={'Giá'}
                        placeholder={'Giá...'}
                        keyboardType={'numeric'}
                        value={product.price}
                        onChangeText={(e) => { setProduct({ ...product, price: e }) }}
                        onPress={() => { setModalVisible13(!modalVisible13) }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderBottomColor: Colors.gray,
                        borderBottomWidth: 1,
                        paddingVertical: 10,
                        borderBottomColor: Colors.gray,
                        borderBottomWidth:
                            1, paddingVertical: 10
                    }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Mã SP:</Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{route.params}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tên SP:</Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible2(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.name}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Số lượng : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible3(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.quantity}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Màn hình : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible4(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.display}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Hệ điều hành : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible5(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.os}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera sau : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible6(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.cameraS}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera trước : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible7(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.cameraT}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Chip : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible8(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.chip}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>RAM : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible9(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.ram}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Bộ nhớ trong : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible10(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.rom}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SIM : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible11(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.sim}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Pin, Sạc : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible12(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.pin}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Giá : </Text>
                        <TouchableOpacity style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { setModalVisible13(true) }}>
                            <Text style={{ flex: 3, color: Colors.gray, fontSize: 15 }}>{product.price}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                <EditIcon color={Colors.gray2} width={20} height={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ButtonContrl
                        title={"Lưu"}
                        color={Colors.white}
                        onPress={() => { updateProduct() }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};