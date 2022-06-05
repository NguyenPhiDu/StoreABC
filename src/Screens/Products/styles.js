import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
        paddingBottom: 70,
        alignItems: 'center'
    },
    Fil: {
        flex: 0.5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingVertical: 25,
        marginBottom: 20,
        alignItems: 'center'
    },
    SapXep: {
        paddingLeft: 5,
        color: Colors.black
    }

});