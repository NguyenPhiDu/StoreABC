import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../Utils/Color";

const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const styles = StyleSheet.create({
    container: {
        height: HEADER_HEIGHT,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: Colors.white
    },
    backButton: {
        height: 32,
        width: 32,
        borderColor: Colors.black,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        //fontFamily: ,
        fontSize: 16,
        color: Colors.black,
        marginLeft: 12
    }
})