import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Post from './Post'
import Home from './Home'


const App = () => {
    return (
        <View style={styles.container}>
            {/* <Post /> */}
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App