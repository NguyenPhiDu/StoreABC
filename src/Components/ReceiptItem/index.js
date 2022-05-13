import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import ReceiptIcon from '../../Icons/ReceiptIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default ReceiptItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Mã HĐ : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.MaHD}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tên KH : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.TenKH}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Số lượng SP: </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.quantity}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 0.5, color: Colors.black, fontSize: 15, fontWeight: 'bold' }}>Tổng tiền : </Text>
                    <Text style={{ flex: 1, color: Colors.red, fontSize: 17 }}>{props.price}đ</Text>
                    <TouchableOpacity style={{}}
                        onPressDelete={props.onPressDelete}>
                        <DeleteIcon color={Colors.orange}></DeleteIcon>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};