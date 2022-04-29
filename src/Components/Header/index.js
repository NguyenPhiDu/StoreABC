import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LeftIcon from "../../Icons/LeftIcon";
import { Colors } from "../../Utils/Color";
import { styles } from "./styles";

export default function Header({ navigation, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <LeftIcon color={Colors.black} />
            </TouchableOpacity>
            {
                title && <Text style={styles.title}>{title}</Text>
            }
        </View>
    )
}