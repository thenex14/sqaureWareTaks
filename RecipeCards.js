import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native"

const RecipeCards = () => {
    return (
        <View>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.firstContainer}>
                        <Image style={styles.personImage} source={require('./assets/cardImages/persons/p1.png')}></Image>
                        <Text style={styles.personName}>Calum Lewis</Text>
                    </View>
                    <View >
                        <Image style={styles.dishImage} source={require('./assets/cardImages/dishes/d1.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.foodName}>Pancake</Text>
                        <Text style={styles.foodDetails}>{'Food .  >60 min'}</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.firstContainer}>
                        <Image style={styles.personImage} source={require('./assets/cardImages/persons/p2.png')}></Image>
                        <Text style={styles.personName}>Ellif Sonas</Text>
                    </View>
                    <View >
                        <Image style={styles.dishImage} source={require('./assets/cardImages/dishes/d2.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.foodName}>Salad</Text>
                        <Text style={styles.foodDetails}>{'Food .  >60 min'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.firstContainer}>
                        <Image style={styles.personImage} source={require('./assets/cardImages/persons/p3.png')}></Image>
                        <Text style={styles.personName}>Elena Shelby</Text>
                    </View>
                    <View >
                        <Image style={styles.dishImage} source={require('./assets/cardImages/dishes/d3.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.foodName}>Oat Meal</Text>
                        <Text style={styles.foodDetails}>{'Food .  >20 min'}</Text>
                    </View>
                </View>


                <View>
                    <View style={styles.firstContainer}>
                        <Image style={styles.personImage} source={require('./assets/cardImages/persons/p4.png')}></Image>
                        <Text style={styles.personName}>John Priyadi</Text>
                    </View>
                    <View >
                        <Image style={styles.dishImage} source={require('./assets/cardImages/dishes/d4.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.foodName}>Fruit Salad</Text>
                        <Text style={styles.foodDetails}>{'Food .  >20 min'}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },

    firstContainer: {
        flexDirection: 'row',

    },
    personImage: {
        height: 35,
        width: 35
    },
    personName: {
        fontWeight: 500,
        color: '#2E3E5C',
        fontSize: 12,
        alignSelf: 'center',
        paddingLeft: 10
    },

    dishImage: {
        marginTop: 10,
        height: 140,
        width: 140,
        marginBottom: 20
    },
    foodName: {
        fontWeight: 700,
        color: '#3E5481',
        fontSize: 17,
        lineHeight: 27
    },

    foodDetails: {
        color: '#9FA5C0',
        fontSize: 12,
        lineHeight: 14.52,
        fontWeight: 500,

    }




})

export default RecipeCards