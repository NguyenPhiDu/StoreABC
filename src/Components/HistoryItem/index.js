import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';

export default HistoryItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={props.img} />
            </View>
            <View style={{ flex: 2, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.SapXep}>Số lượng : </Text>
                    <Text style={styles.SapXep}>{props.quantity}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.SapXep}>Tổng tiền : </Text>
                        <Text style={styles.price}>{props.price}đ</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ padding: 2 }}>
                        <DeleteIcon color={Colors.orange} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};