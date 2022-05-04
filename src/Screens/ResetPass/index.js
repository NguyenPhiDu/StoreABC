import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import { styles } from './styles';

export default ResetPass = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: Colors.white }}>ResetPass</Text>
        </SafeAreaView>
    );
};


