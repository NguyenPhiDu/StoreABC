import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';

export default Cartitem = (props) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={{ uri: props.img }} />
            </View>
            <View style={{ flex: 2, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 15 }}>Số lượng : </Text>
                    <Text style={{ color: Colors.black, fontSize: 15 }}>{props.quantity}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 15 }}>Giá : </Text>
                    <Text style={styles.price}>{props.price}đ</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ padding: 2 }}
                           onPress={props.onPress}>
                            <DeleteIcon color={Colors.orange} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};