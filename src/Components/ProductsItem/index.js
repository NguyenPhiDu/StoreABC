import React from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../AddIcon';
import { styles } from './styles'

export default ProductsItem = ({ img, name, price }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={img} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.price}>{price}đ</Text>
                    <TouchableOpacity style={{padding:2}}>
                        <AddIcon color={Colors.gray}></AddIcon>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};