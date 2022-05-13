import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from "react-native";
import InputContrl from '../../Components/InputContrl';
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import ButtonContrl from '../../Components/ButtonContrl';

export default ModalAdmin = (props) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={
                props.onRequestClose
            }
        >
            <TouchableOpacity style={{
                flex: 1,
                justifyContent: "center",
            }}
                activeOpacity={1}
                onPressOut={props.onPressOut}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{props.title}</Text>
                    <InputContrl
                        placeholder={props.placeholder}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        maxLength={props.maxLength}
                        keyboardType={props.keyboardType} />
                    <View style={{ marginTop: 10 }}>
                        <ButtonContrl
                            title={'Lưu'}
                            color={Colors.white}
                            onPress={() => { props.onPress }} />
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};


