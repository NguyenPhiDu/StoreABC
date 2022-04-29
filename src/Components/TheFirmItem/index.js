import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import {styles} from './styles'

export default TheFirmItem = ({ img }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Image style={styles.imgLogo} source={img} ></Image>
        </TouchableOpacity>
    )
};