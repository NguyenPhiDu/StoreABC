import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default CustomerItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Mã KH : </Text>
                    <Text style={{ flex: 3, color: Colors.black, fontSize: 15, fontWeight: 'bold' }}>{props.MaKH}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tên KH : </Text>
                    <Text style={{ flex: 3, color: Colors.black, fontSize: 15 }}>{props.TenKH}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <Text style={{ flex: 3, color: Colors.black, fontSize: 15 }}>{props.SDT}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>địa chỉ : </Text>
                    <Text style={{ flex: 3, color: Colors.black, fontSize: 15 }}>{props.address}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
};