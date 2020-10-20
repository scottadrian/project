import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

export default class Home extends Component {

    render() {
        return (
            //Første lag af View som indeholder alle underviews, her bruges Flex for at fylde hele skærmen ud
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>ParkBuddy</Text>
                </View>
                {/*Dette view viser det primære indhold på skærmen, hvor der ses en velkomst besked.*/}
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>Welcome to Parkbuddy</Text>
                    <Text style={styles.text}>Use the navigation by swiping from the left of the screen.</Text>
                    <Image
                        style={styles.img}
                        source={require('./car-icon.jpg')}/>
                </View>
                {/*I footeren er der 3 knapper til navigation i appen - Disse er endnu ikke implementeret*/}
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => Alert.alert('This feature is not working yet. To use the navigation please slide from the left of the screen.')}>
                        <Text style={styles.btnText}>Find Parking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => Alert.alert('This feature is not working yet. To use the navigation please slide from the left of the screen.')}>
                        <Text style={styles.btnText}>Create Parking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => Alert.alert('This feature is not working yet. To use the navigation please slide from the left of the screen.')}>
                        <Text style={styles.btnText}>Edit Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        paddingBottom: 50
    },
    subContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#265ca2'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#265ca2',
        paddingTop: 35,
        paddingBottom: 5,
        height: 100
    },
    btnStyle: {
        backgroundColor: '#fc7d2d',
        flexDirection: 'column',
        alignItems: 'center',
        width: 350,
        margin: 10,
        padding: 10
    },
    btnText: {
        color: '#ffffff',
        fontSize: 20,
    },
    img: {
        width: 200,
        height: 200
    }
});
