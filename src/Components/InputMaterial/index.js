import React from 'react';
import { Colors } from '../../Utils/Color';
import { TextInput } from "@react-native-material/core";

export default InputMaterialr = (props) => {
    return (
        <TextInput
            color={Colors.gray}
            onChangeText={props.onChangeText}
            value={props.value}
            keyboardType={props.keyboardType}
            placeholderTextColor={Colors.gray}
            secureTextEntry={props.secureTextEntry}
            variant="outlined"
            label={props.label}
        />
    )
};