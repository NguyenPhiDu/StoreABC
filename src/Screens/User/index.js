import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";


export default User = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'blue' }}>Profile</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


