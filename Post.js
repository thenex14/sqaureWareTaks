import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, SliderComponent, Button, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider'

const Post = () => {
    const [sliderValue, setSliderValue] = useState(35)

    return (
        <View style={styles.topContainer}>
            <View style={styles.topButtons}>
                <TouchableOpacity> <Text style={styles.cancelButtonText}>Cancel</Text></TouchableOpacity>
                <Text style={styles.lightSubText}><Text style={styles.darkSubText}>1</Text>/2</Text>
            </View>
            <View style={styles.coverPhotoBox}>
                <Image style={styles.image} source={require('./assets/Icons/icon.png')} />
                <Text style={styles.coverPhotoBoxDarkText}>Add Cover Photo</Text>
                <Text style={styles.coverPhotoBoxLightText}>(Up to 12 Mb)</Text>
            </View>
            <View>
                <Text style={styles.recipeText}>Recipe Name</Text>
                <TextInput style={styles.recipeTextInput} placeholder='Enter recipe name'></TextInput>
            </View>
            <View>
                <Text style={styles.descriptionText}>Description</Text>
                <TextInput style={styles.descriptionTextInput} placeholder='Tell the community a little about your recipe'></TextInput>
            </View>
            <View>
                <Text style={styles.cookingMainText}>Cooking Duration <Text style={styles.cookingSubText}>(in minutes)</Text></Text>
            </View>
            <View style={styles.threeComponents}>
                <Text style={styles.yellowText}>{'<10'}</Text>
                <Text style={styles.yellowText}>{sliderValue}</Text>
                <Text style={styles.greyText}>{'>60'}</Text>
            </View>
            <View>
                <Slider
                    maximumValue={60}
                    minimumValue={10}
                    minimumTrackTintColor="#FFF395"
                    maximumTrackTintColor="#9FA5C0"
                    thumbTintColor="#FFF395"
                    step={1}
                    value={sliderValue}
                    onValueChange={(sliderValue) => setSliderValue(sliderValue)}
                />
            </View>
            <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
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

    lightSubText: {
        color: '#9FA5C0',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 27,
    },

    darkSubText: {
        color: '#3E5481',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 27
    },

    coverPhotoBox: {
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#9FA5C0',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    image: {
        height: 64,
        width: 64,
        marginBottom: 15
    },
    coverPhotoBoxDarkText: {
        color: '#3E5481', // Dark Shade
        fontWeight: 700,
        lineHeight: 25,
        fontSize: 15,

    },

    coverPhotoBoxLightText: {
        color: '#9FA5C0', // Light Shade
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 25
    },
    recipeText: {
        color: '#3E5481',
        fontWeight: 700,
        lineHeight: 27,
        fontSize: 17,
        paddingTop: 10,
        paddingBottom: 10
    },

    recipeTextInput: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#9FA5C0',
        borderRadius: 10
    },

    descriptionText: {
        color: '#3E5481',
        fontWeight: 700,
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 27,
        fontSize: 17,
    },

    descriptionTextInput: {
        color: '9FA5C0',
        padding: 15,
        paddingBottom: 45,
        borderWidth: 1,
        borderColor: '#9FA5C0',
        borderRadius: 10

    },

    cookingMainText: {
        color: '#3E5481',
        fontWeight: 700,
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 27,
        fontSize: 17,
    },

    cookingSubText: {
        color: 'grey',
        fontWeight: 500
    },
    threeComponents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },

    yellowText: {
        color: '#FFF395',
        fontWeight: 700
    },

    greyText: {
        color: '#9FA5C0',
        fontWeight: 700
    },

    button: {
        backgroundColor: '#FFF395',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFF395',
        padding: 10,
        borderRadius: 50,
        marginTop: 10,

    },

    buttonText: {
        fontWeight: 700
    }

})

export default Post