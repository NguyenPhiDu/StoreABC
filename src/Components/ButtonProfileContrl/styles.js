import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Colors.gray2,
        borderBottomWidth: 2,
        backgroundColor: Colors.white,
        flexDirection: 'row'
    },
    title: {
        flex: 4.5,
        color: Colors.black,
    }
});
