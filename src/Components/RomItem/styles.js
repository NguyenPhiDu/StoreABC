import { Colors } from "../../Utils/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        height: 30,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    name: {
        color: Colors.black
    }
})