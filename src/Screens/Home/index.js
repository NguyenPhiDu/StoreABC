import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";


export default Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'blue' }}>Home</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


