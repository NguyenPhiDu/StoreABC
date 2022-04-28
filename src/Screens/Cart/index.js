import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";


export default Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'blue' }}>Cart</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});


