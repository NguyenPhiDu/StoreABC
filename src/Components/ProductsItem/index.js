import React from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'

export default ProductsItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={{ uri: props.img }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.price}>{props.price}đ</Text>
                    <TouchableOpacity style={{ padding: 2 }}
                        onPress={props.onPressAdd}>
                        <AddIcon color={Colors.purple}></AddIcon>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
};