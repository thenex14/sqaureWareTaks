import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import CMR from './CMR'
const Pic = () => {
    return (
        <View>
            <View style={styles.topContainer}>
                <View style={styles.topButtons}>
                    <TouchableOpacity> <Text style={styles.cancelButtonText}>Cancel</Text></TouchableOpacity>
                </View>
                <CMR></CMR>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        alignItems: 'space-between',
        marginLeft: 100 / 2,
        marginRight: 100 / 2,
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 10

    },
    cancelButtonText: {
        color: '#FF6464',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 27

    },
})




export default Pic