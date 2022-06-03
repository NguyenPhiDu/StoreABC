import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import Header from '../../Components/Header';
import ButtonContrl from '../../Components/ButtonContrl';
import { createProduct, Default_Image_Add } from '../../Utils/firebase';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default AdminAddProducts = ({ navigation }) => {
    const [img1, setImg1] = useState("")
    const [img2, setImg2] = useState("")
    const [img3, setImg3] = useState("")
    const [product, setProduct] = useState({
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
    const createPr = () => {
        createProduct({ ...product, img1, img2, img3 })
        setProduct({
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
    }

    const changePhoto = (i, path) => {
        switch (i) {
            case 1:
                setImg1(path);
                break;
            case 2:
                setImg2(path);
                break;
            case 3:
                setImg3(path);
                break;
            default:
                setImg1(Default_Image_Add)
                setImg2(Default_Image_Add)
                setImg3(Default_Image_Add)
                break;
        }
    }
    const choosePhotoFromLibrary = async (i) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
            mediaType: "application/octet-stream;BASE64",
            includeBase64: true,
        }).then(image => {
            handleUpimge(i, image.path)

        });
    }
    const handleUpimge = async (i, path) => {
        const uploadUrl = "Products/" + Date.now() + ".png"
        const reference = storage().ref(uploadUrl);
        await reference.putFile(path)
            .then(() => {
                reference
                    .getDownloadURL()
                    .then((url) => {
                        changePhoto(i, url)
                    })
            })

    }
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Thêm sản phẩm'} />
            <ScrollView>
                <View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Image source={{ uri: img1 || Default_Image_Add }} style={{
                            width: 100,
                            height: 100
                        }} />
                        <TouchableOpacity style={{
                            borderRadius: 5,
                            width: 100,
                            padding: 10,
                            borderColor: Colors.black,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} onPress={() => { choosePhotoFromLibrary(1) }}>
                            <Text style={styles.buttonText}>chọn ảnh</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img2 || Default_Image_Add }} style={{
                            width: 100,
                            height: 100
                        }} />
                        <TouchableOpacity style={{
                            borderRadius: 5,
                            width: 100,
                            padding: 10,
                            borderColor: Colors.black,
                            borderWidth: 1,
                            marginVertical: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} onPress={() => { choosePhotoFromLibrary(2) }}>
                            <Text style={styles.buttonText}>chọn ảnh</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img3 || Default_Image_Add }} style={{
                            width: 100,
                            height: 100
                        }} />
                        <TouchableOpacity style={{
                            borderRadius: 5,
                            width: 100,
                            padding: 10,
                            borderColor: Colors.black,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} onPress={() => { choosePhotoFromLibrary(3) }}>
                            <Text style={styles.buttonText}>chọn ảnh</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Tên sản phẩm...'}
                                value={product.name}
                                onChangeText={(e) => { setProduct({ ...product, name: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Hãng...'}
                                value={product.firm}
                                onChangeText={(e) => { setProduct({ ...product, firm: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Số lượng...'}
                                maxLength={4}
                                keyboardType={'numeric'}
                                value={product.quantity}
                                onChangeText={(e) => { setProduct({ ...product, quantity: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Đơn giá...'}
                                keyboardType={'numeric'}
                                value={product.price}
                                onChangeText={(e) => { setProduct({ ...product, price: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Màn hình...'}
                                value={product.display}
                                onChangeText={(e) => { setProduct({ ...product, display: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Hệ điều hành...'}
                                value={product.os}
                                onChangeText={(e) => { setProduct({ ...product, os: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Camera trước...'}
                                value={product.cameraT}
                                onChangeText={(e) => { setProduct({ ...product, cameraT: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Camera sau..'}
                                value={product.cameraS}
                                onChangeText={(e) => { setProduct({ ...product, cameraS: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Chip...'}
                                value={product.chip}
                                onChangeText={(e) => { setProduct({ ...product, chip: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'RAM...'}
                                value={product.ram}
                                onChangeText={(e) => { setProduct({ ...product, ram: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Bộ nhớ trong...'}
                                value={product.rom}
                                onChangeText={(e) => { setProduct({ ...product, rom: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'SIM...'}
                                value={product.sim}
                                onChangeText={(e) => { setProduct({ ...product, sim: e }) }}
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Pin, Sạc...'}
                                value={product.pin}
                                onChangeText={(e) => { setProduct({ ...product, pin: e }) }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <ButtonContrl
                    title={'Lưu'}
                    color={Colors.white}
                    onPress={() => { createPr() }} />
            </View>
        </SafeAreaView>
    );
};