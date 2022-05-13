import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    timKiem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingRight: 20,
        backgroundColor: Colors.white
    },
    inputSearch: {
        marginLeft: 5,
        flex: 1
    },
});