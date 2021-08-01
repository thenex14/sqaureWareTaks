import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

const CMR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View>
            <View style={styles.container}>
                <Camera></Camera>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Image style={styles.button} source={require('./assets/homeIcons/search.png')}></Image>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: 450,
        justifyContent: 'center',
    },

    buttonContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },

    button: {
        height: 60,
        width: 60,
        paddingLeft: 50
    }
});

export default CMR