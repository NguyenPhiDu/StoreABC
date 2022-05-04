import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
        paddingBottom:70,
        alignItems:'center'
    },
    Fil: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingVertical: 15,
        marginBottom:10,
         alignItems:'center'
    },
    SapXep: {
        paddingLeft:5,
        color: Colors.black
    }
});