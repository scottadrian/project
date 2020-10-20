import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, Alert} from 'react-native';

export default class Parking extends Component {
    render() {
        return (
            //Første lag af View som indeholder alle underviews, her bruges Flex for at fylde hele skærmen ud
            <View style={{flex: 1}}>
                {/*Dette view viser logoet i toppen*/}
                <View style={styles.header}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>ParkBuddy</Text>
                </View>
                {/*Dette view viser det primære indhold på skærmen. Herunder knap til at tage billede af parkeringspladsen, kalender til valg af periode og tekstfelt til noter om pris osv.*/}
                <View style={styles.mainContainer}>
                    <View style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        backgroundColor: '#ffffff',
                        flex: 0.2,
                        width: "100%",
                        marginBottom: 10
                    }}>
                        <Text style={{padding: 20, flex: 1}}>Take a picture of your parking space</Text>
                        <Image
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 114,
                                height: 114,
                                backgroundColor: '#D8D8D8'
                            }}
                            source={require('./camera-icon.jpg')}/>
                    </View>
                    {/*Da en kalender ikke er implementeret, er der brugt et screenshot af en kalender som placeholder*/}
                    <View style={{
                        borderWidth: 1,
                        backgroundColor: '#ffffff',
                        flex: 0.6,
                        width: "100%",
                        marginBottom: 10
                    }}>
                        <Image source={require('./calendar.jpg')}/>
                    </View>
                    <View style={{padding: 20, borderWidth: 1, backgroundColor: '#ffffff', flex: 0.2, width: "100%"}}>
                        <Text style={{fontWeight: "bold"}}>Notes</Text>
                        <Text>Please write the parking fee and other information if necessary.</Text>
                    </View>
                </View>
                {/*Knap i footeren til at oprette parkeringspladsen*/}
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => Alert.alert('This feature is not working yet.')}>
                        <Text style={styles.btnText}>Create Parking Space</Text>
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
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    subContainer: {
        height: 120,
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

});
