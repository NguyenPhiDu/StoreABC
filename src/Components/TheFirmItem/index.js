import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import { styles } from './styles'

export default TheFirmItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <Image style={styles.imgLogo} source={props.img} ></Image>
        </TouchableOpacity>
    )
};