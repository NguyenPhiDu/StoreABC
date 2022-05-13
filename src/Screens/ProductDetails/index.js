import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import HeaderColorPurple from '../../Components/HeaderColorPurple';
import ButtonContrl from '../../Components/ButtonContrl';

export default ProductDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderColorPurple navigation={navigation} title={'Chi tiết sản phẩm'} />
            <ScrollView>
                <View style={{ marginHorizontal: 20, borderRadius: 20, backgroundColor: Colors.white }}>
                    <View style={{ width: "100%", padding: 40, }}>
                        <Image
                            style={styles.img}
                            source={require('../../static/images/GalaxyS22.jpg')}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ color: Colors.black, fontSize: 17, fontWeight: 'bold' }}>Điện thoại Samsung Galaxy S22 Ultra 5G 128GB</Text>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: Colors.black, fontSize: 17, fontWeight: 'bold' }}>Điện thoại Samsung</Text>
                        </View>
                        <View style={{ marginBottom: 40 }}>
                            <Text style={{ color: Colors.red, fontSize: 20, fontWeight: 'bold' }}>20000000đ</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ marginLeft: 20, marginTop: 20, color: Colors.black, fontSize: 17, fontWeight: 'bold' }}>Cấu hình sản phẩm :</Text>
                <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Màn hình :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Dynamic AMOLED 2X6.8"Quad HD+ (2K+)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Hệ điều hành :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Android 12</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera sau :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Camera trước :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>40MP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Chip :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Snapdragon 8 Gen 1 8 nhân</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>RAM :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>8GB</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Bộ nhớ trong :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>128 GB</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SIM :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>2 Nano SIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Pin, Sạc :</Text>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>5000 mAh45 W</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ margin: 20 }}>
                <ButtonContrl
                    title={'Thêm vào giỏ hàng'} color={Colors.white} />
            </View>
        </SafeAreaView>
    );
};


