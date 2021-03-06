import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
    },
    timKiem: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingRight: 20,
        backgroundColor: Colors.white
    },
    inputSearch: {
        marginLeft: 5,
        flex: 1
    },
    ThuongHieu: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 17,
    },
    viewAll: {
        color: Colors.purple,
        fontSize: 12,
        borderColor: Colors.purple,
        borderBottomWidth: 1,

    },
    styleViewAll: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'flex-end',
        alignItems: 'center'
    },
    item: {
        borderColor: Colors.gray,
        borderWidth: 1,
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 15,
        marginVertical: 15,
        backgroundColor: Colors.white
    },
    imgLogo: {
        height: 100,
        width: 100
    },
    ImageBackground: {
        height: 150,
        width: 350,
    }
});
