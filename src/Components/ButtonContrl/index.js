import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { styles } from './styles';
import RightIcon from '../../Icons/RightIcon'
import { Colors } from '../../Utils/Color';

export default ButtonContrl = (props) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={props.onPress}>
            <Text style={{ color: props.color, fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
        </TouchableOpacity>
    )
};