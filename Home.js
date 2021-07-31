import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import RecipeCards from './RecipeCards'

const Home = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.storyContainer}>
                <Image style={styles.storyPicture} source={require('./assets/Stories/person1.png')} />
                <Image style={styles.storyPicture} source={require('./assets/Stories/person2.png')} />
                <Image style={styles.storyPicture} source={require('./assets/Stories/person3.png')} />
                <Image style={styles.storyPicture} source={require('./assets/Stories/person4.png')} />
                <Image style={styles.storyPicture} source={require('./assets/Stories/person5.png')} />
            </View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Category</Text>
                <View style={styles.categoryButtonContainer}>
                    <TouchableOpacity style={styles.yellowButton}>
                        <Text style={styles.buttonText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greyButton}>
                        <Text style={styles.lightGreyButtonText}>Vegan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greyButton}>
                        <Text style={styles.lightGreyButtonText}>Keto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greyButton}>
                        <Text style={styles.lightGreyButtonText}>Veg</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <RecipeCards></RecipeCards>
            </View>
            <View style={styles.homeIconsMain}>
                <View style={styles.homeIconsBundle}>
                    <Image style={styles.homeIcon} source={require('./assets/homeIcons/Home.png')} />
                    <Text style={styles.homeIconBoldText}>Home</Text>
                </View>
                <View style={styles.homeIconsBundle}>
                    <Image style={styles.homeIcon} source={require('./assets/homeIcons/Post.png')} />
                    <Text style={styles.homeIconText}>Post</Text>
                </View>
                <View style={styles.homeIconsBundle}>
                    <Image style={styles.homeIconLarge} source={require('./assets/homeIcons/searchSub.png')} />
                    <Text style={styles.homeIconText}>Search</Text>
                </View>
                <View style={styles.homeIconsBundle}>
                    <Image style={styles.homeIcon} source={require('./assets/homeIcons/Notification.png')} />
                    <Text style={styles.homeIconText}>Notification</Text>
                </View>
                <View style={styles.homeIconsBundle}>
                    <Image style={styles.homeIcon} source={require('./assets/homeIcons/Profile.png')} />
                    <Text style={styles.homeIconText}>Profile</Text>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20
    },
    storyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10
    },

    storyPicture: {
        height: 50,
        width: 50
    },

    categoryContainer: {
        borderBottomWidth: 8,
        borderColor: '#F4F5F7'
    },
    categoryText: {
        color: '#3E5481',   // Dark Shade
        fontWeight: 700,
        padding: 10,
        fontSize: 17,
        paddingLeft: 20

    },

    categoryButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20
    },
    yellowButton: {
        backgroundColor: '#FFF395',
        alignItems: 'center',
        width: 90,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFF395',
        padding: 10,
        borderRadius: 50,
        marginTop: 10,
    },
    greyButton: {
        backgroundColor: '#F4F5F7',
        alignItems: 'center',
        width: 90,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#F4F5F7',
        padding: 10,
        borderRadius: 50,
        marginTop: 10,
    },

    buttonText: {
        fontWeight: 700
    },

    lightGreyButtonText: {
        color: '#9FA5C0',
        fontWeight: 500
    },

    homeIconLarge: {
        height: 25,
        width: 25,
    },

    homeIconsMain: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },

    homeIconsBundle: {
        alignItems: 'center'
    },

    homeIcon: {
        paddingTop: 20,
        height: 25,
        width: 25,
    },

    homeIconBoldText: {
        paddingTop: 10,
    }
    ,
    homeIconText: {
        paddingTop: 10,
        color: '#9FA5C0'
    }
})



export default Home