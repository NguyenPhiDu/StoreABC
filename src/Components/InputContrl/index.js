import React from 'react';
import { TextInput } from "react-native";
import { styles } from './styles';
import { Colors } from '../../Utils/Color';

export default InputControl = (props) => {
    return (
        <TextInput
            style={styles.container}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.gray}
            secureTextEntry={props.secureTextEntry}
            maxLength={props.maxLength}
            keyboardType={props.keyboardType}
        />
    )
};