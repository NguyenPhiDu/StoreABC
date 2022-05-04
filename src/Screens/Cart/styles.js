import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
    },
    Fil: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingVertical: 15,
        marginBottom: 10,
        alignItems: 'center'
    },
    SapXep: {
        paddingLeft: 5,
        color: Colors.black
    }
});
