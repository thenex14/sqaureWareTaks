import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './Post'
import Home from './Home'
import Pic from './Pic'

const App = () => {
    return (
        <View style={styles.container}>
            <Home />
            <Post />
            <Pic />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App