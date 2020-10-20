import React from 'react';
import {createAppContainer} from "react-navigation";
import Home from "./components/Home";
import Map from "./components/Map";
import Parking from "./components/Parking";
import Settings from "./components/Settings";
import {createDrawerNavigator} from "react-navigation-drawer";

//Navigation laves med router for hver af knapper i navigationen, til de 4 forskellige views
const navi = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Map: {
        screen: Map,
    },
    Parking: {
        screen: Parking,
    },
    Settings: {
        screen: Settings,
    }
});

const AppNav = createAppContainer(navi)

export default class App extends React.Component {
    render() {
        return (
            <AppNav/>
        )
    }
}
