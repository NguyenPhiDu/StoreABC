import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default CustomerItem = (props) => {
    const [count, setCount] = useState(1);
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Mã KH : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.MaKH}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>Tên KH : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.TenKH}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>SĐT : </Text>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15 }}>{props.SDT}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ flex: 1, color: Colors.black, fontSize: 15, fontWeight: 'bold' }}>Tổng tiền mua hàng : </Text>
                    <View>
                        <Text style={{ flex: 1, color: Colors.red, fontSize: 17, alignItems: 'flex-end' }}>{props.price}đ</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
};