import { Colors } from "../../Utils/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        height:"95%",
        borderColor: Colors.gray,
        borderWidth: 1,
        padding: 15,
        marginHorizontal: 6,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: Colors.white,
        width:150
    },
    imgLogo: {
        height: 100,
        width: 100
    },
    price: {
        color: Colors.red,
        fontWeight: 'bold',
        flex: 1,
        fontSize: 16,
    },
    name: {
        color: Colors.black,
        fontSize: 13,
        fontWeight: 'bold',
    },
    viewImg: {
        flex: 1.5,
        alignItems: 'center',
    }
})