import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles'

export default OrderItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={{ uri: props.img }} />
            </View>
            <View style={{ flex: 2, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>Số lượng : </Text>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>{props.quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>Giá : </Text>
                        <Text style={{ color: Colors.red, fontSize: 13, fontWeight: 'bold' }}>{props.price}đ</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};