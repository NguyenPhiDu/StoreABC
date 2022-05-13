import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
    },
    Fil: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingVertical: 5,
        marginBottom: 10,
    },
    SapXep: {
        paddingLeft: 5,
        color: Colors.black
    }
});
