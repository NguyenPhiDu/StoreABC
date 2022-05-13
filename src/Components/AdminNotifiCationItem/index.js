import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import NotificationIcon2 from '../../Icons/NotificationIcon';

export default NotifiCationItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <NotificationIcon2 color={Colors.orange} width={25} height={27} />
            </View>
            <View style={{ flex: 3, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={{ padding: 2 }}
                    onPressDelete={props.onPressDelete}>
                    <DeleteIcon color={Colors.orange} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
};