import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import DeleteIcon from '../../Icons/DeleteIcon';
import { Colors } from '../../Utils/Color';
import { styles } from './styles'

export default AdminListPoductItem = (props) => {
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
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>Bộ nhớ trong : </Text>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>{props.internalMemory}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>Số lượng : </Text>
                        <Text style={{ color: Colors.black, fontSize: 13 }}>{props.quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 1, color: Colors.black, fontSize: 13 }}>Đơn giá : </Text>
                        <Text style={{ flex: 2, color: Colors.red, fontSize: 13, fontWeight: 'bold' }}>{props.price}đ</Text>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row-reverse', alignSelf: 'flex-end' }}
                            onPressDelete={props.onPressDelete}>
                            <DeleteIcon color={Colors.orange}></DeleteIcon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};