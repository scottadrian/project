import * as React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import Constants from 'expo-constants';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";

export default class Map extends React.Component {
    mapViewRef = React.createRef();

    state = {
        //Dette tjekker om lokations tilladelse er givet
        hasLocationPermission: null,
        //Denne tjekker brugerens lokation
        currentLocation: null,
        //Array af brugerens fastsatte pins på kortet
        userMarkerCoordinates: [],
        //Denne tjekker den valgte markørs koordinater
        selectedCoordinate: null,
        //Denne finder adressen for den valgte markør
        selectedAddress: null,
    };

    //Asynkront kald omkring om der er tilladelse til at tjekke lokation
    getLocationPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({hasLocationPermission: status});
    };

    componentDidMount = async () => {
        await this.getLocationPermission();
    };

    //Eventhandler som opdaterer brugerens lokation
    //Accuracy er sat til høj, da det er vigtigt at kende den præcise lokation af en fri parkeringsplads
    updateLocation = async () => {
        const {coords} = await Location.getCurrentPositionAsync({accuracy: Accuracy.High});
        this.setState({currentLocation: coords});
    };

    //Sætter en ny markør, når brugeren laver et langt tryk på kortet
    handleLongPress = event => {
        const {coordinate} = event.nativeEvent;
        this.setState(prevState => {
            return {
                userMarkerCoordinates: [...prevState.userMarkerCoordinates, coordinate],
            };
        });
    };

    handleSelectMarker = coordinate => {
        this.setState({selectedCoordinate: coordinate});
        this.findAddress(coordinate);
    };

    findAddress = async coordinate => {
        const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
        this.setState({selectedAddress});
    };

    closeInfoBox = () =>
        this.setState({selectedCoordinate: null, selectedAddress: null});

    //Denne metode siger hvis der ikke er adgang til lokations
    //Hvis der er tilladelse oprettes en knap som gør det muligt at opdatere brugerens lokation
    renderCurrentLocation = () => {
        const {hasLocationPermission, currentLocation} = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
        if (hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View>
                <Button title="update location" onPress={this.updateLocation}/>
                {currentLocation && (
                    <Text>
                        {`${currentLocation.latitude}, ${
                            currentLocation.longitude
                        } ${currentLocation.accuracy}`}
                    </Text>
                )}
            </View>
        );
    };

    render() {
        const {
            userMarkerCoordinates, selectedCoordinate, selectedAddress,
        } = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#265ca2'}}>
                <View style={styles.header}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>ParkBuddy</Text>
                </View>
                <SafeAreaView style={styles.container}>
                    {this.renderCurrentLocation()}
                    {/*Bruger Google map - Grundet "showsUserLocation" viser den vores lokation*/}
                    <MapView
                        provider="google"
                        style={styles.map}
                        ref={this.mapViewRef}
                        showsUserLocation
                        onLongPress={this.handleLongPress}>
                        {/*De 3 koordinater som vises på kortet*/}
                        <Marker
                            coordinate={{latitude: 55.681878, longitude: 12.526751}}
                            title="Solbjerg Plads"
                            description="You can park close to CBS Solbjerg Plads."
                        />
                        <Marker
                            coordinate={{latitude: 55.369827, longitude: 10.431646}}
                            title="Syddansk Universitet"
                            description="You can park close to SDU Odense."
                        />
                        <Marker
                            coordinate={{latitude: 57.015304, longitude: 9.985305}}
                            title="Aalborg Universitet"
                            description="You can park close to Aalborg Universitet."
                        />
                        {/*Vælger den valgte koordinat, som er sendt med et langt klik via onPress*/}
                        {/*Og finder adressen via "findAdress" kaldet*/}
                        {userMarkerCoordinates.map((coordinate, index) => (
                            <Marker
                                coordinate={coordinate}
                                key={index.toString()}
                                onPress={() => this.handleSelectMarker(coordinate)}
                            />
                        ))}
                    </MapView>
                    {/*Denne laver et view, som indeholder tekst som indeholder koordinaterne*/}
                    {/*Når der klikkes på en markør. Viser derudover info tekst, navn og postnummer*/}
                    {/*Knappen lukker boksen og fjerner de fremviste værdier*/}
                    {selectedCoordinate && (
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                            </Text>
                            {selectedAddress && (
                                <Text style={styles.infoText}>
                                    {selectedAddress.name} {selectedAddress.postalCode}
                                </Text>
                            )}
                            <Button title="close" onPress={this.closeInfoBox}/>
                        </View>
                    )}
                </SafeAreaView>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => Alert.alert('This feature is not working yet.')}>
                        <Text style={styles.btnText}>Find parking</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        marginLeft: 15,
        marginRight: 15
    },
    map: {flex: 1},
    infoBox: {
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {fontSize: 15},
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#265ca2',
        paddingTop: 35,
        paddingBottom: 5,
        height: 100
    },
    subContainer: {
        height: 120,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#265ca2'
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
