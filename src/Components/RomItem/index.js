import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import ReceiptIcon from '../../Icons/ReceiptIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default RomItem = (props) => {
    const {item, selectItem, setSelectItem } = props

    return (
        <TouchableOpacity 
        style={[styles.item, selectItem.id == item.id && {backgroundColor: Colors.orange}]}
            onPress={() => selectItem.id == item.id ? setSelectItem({}) : setSelectItem(item)}>
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    )
};