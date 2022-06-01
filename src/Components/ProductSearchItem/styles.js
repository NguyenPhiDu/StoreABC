import { Colors } from "../../Utils/Color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flex: 1,
        borderColor: Colors.gray,
        borderWidth: 1,
        padding: 15,
        marginHorizontal: 6,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: Colors.white,
    },
    imgLogo: {
        height: 50,
        width: 50
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
        flex: 0.5,
        alignItems: 'center',
        justifyContent:'center'
    },
    SapXep: {
        paddingLeft: 5,
        color: Colors.black
    }
})