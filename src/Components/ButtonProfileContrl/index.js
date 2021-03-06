import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { styles } from './styles';
import RightIcon from '../../Icons/RightIcon'
import { Colors } from '../../Utils/Color';

export default ButtonProfileContrl = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={props.onPress}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {props.icon}
            </View>
            <View style={{ flex: 5, flexDirection: 'row' }}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={{ flex: 0.5 }}>
                    {props.notification}
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <RightIcon color={Colors.gray} />
            </View>
        </TouchableOpacity>
    )
};