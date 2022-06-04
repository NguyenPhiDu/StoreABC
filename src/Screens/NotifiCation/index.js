import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from '../../Utils/Color';
import GalaxyS22 from '../../static/images/GalaxyS22.jpg'
import { styles } from './styles';
import NotifiCationItem from '../../Components/NotifiCationItem';
import Header from '../../Components/Header';
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { AuthContext } from '../../Components/Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';
import { delNotification } from '../../Utils/firebase';

export default NotifiCation = ({ navigation }) => {
    const { token } = useContext(AuthContext)
    const [notification, setNotification] = useState([])
    const GetNotification = () => {
        const Ref = ref(database, 'notifications/' + token.accountId)
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setNotification(returnArr)
        });
    }
    useEffect(() => {
        if (token.accountId != "") {
            GetNotification()
        }
    }, [token.accountId])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={'Thông báo'} />
            <View style={styles.Fil}>
            </View>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <FlatList
                    data={notification}
                    renderItem={({ item }) => (
                        <NotifiCationItem title={item.comment} id={item.idOrder}
                            onPressDelete={() => {
                                delNotification({ userId: token.accountId, id: item.idOrder })
                            }}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView >
    )
};