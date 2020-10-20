import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default class Settings extends Component {

    //Sætter indstillingernes state til false
    state = {
        clicked: false,
        btnTitle: 'Y/N'
    }

    //Her kan indstillingerne slåes til eller fra
    //Dog virker de ikke seperat og funktionaliteten er ikke bundet op på de faktiske indstillinger
    onPress = () => {
        if (!this.state.clicked) {
            this.setState({
                btnTitle: 'ON',
                clicked: true
            })
        } else {
            this.setState({
                btnTitle: 'OFF',
                clicked: false
            })
        }
    };

    render() {
        return (
            //View der fylder hele skærmen
            <View style={{flex: 1}}>
                {/*View som bruges som header og indeholder logo*/}
                <View style={styles.header}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>ParkBuddy</Text>
                </View>
                {/*View som indeholder sidens primære indhold: indstillinger & handelsbetingelser i scrollview*/}
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.toggle} onPress={this.onPress}>
                        <Text>Share Location: </Text>
                        <Text>{this.state.btnTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle} onPress={this.onPress}>
                        <Text>Push notifications: </Text>
                        <Text>{this.state.btnTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle} onPress={this.onPress}>
                        <Text>Notify of a near parking space: </Text>
                        <Text>{this.state.btnTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggle} onPress={this.onPress}>
                        <Text>Remember where i parked: </Text>
                        <Text>{this.state.btnTitle}</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Terms & Conditions</Text>
                    <ScrollView>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum. Suscipit tellus mauris a diam
                            maecenas sed. Elementum integer enim neque volutpat. Volutpat blandit aliquam etiam erat.
                            Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Vitae et leo duis
                            ut diam quam nulla porttitor. Elementum eu facilisis sed odio morbi quis commodo odio. Molestie
                            nunc non blandit massa enim. Mattis enim ut tellus elementum sagittis vitae. Enim eu turpis
                            egestas pretium aenean pharetra magna ac placerat. Eget nulla facilisi etiam dignissim diam.
                            Facilisis mauris sit amet massa vitae. Sed lectus vestibulum mattis ullamcorper velit sed
                            ullamcorper morbi tincidunt. A lacus vestibulum sed arcu non.

                            Nisi est sit amet facilisis magna etiam. Sit amet consectetur adipiscing elit ut aliquam purus
                            sit. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Est ante in nibh mauris
                            cursus mattis molestie. In pellentesque massa placerat duis ultricies. Sed odio morbi quis
                            commodo odio aenean sed adipiscing. Cras sed felis eget velit. Magna ac placerat vestibulum
                            lectus mauris ultrices eros in. Diam sit amet nisl suscipit adipiscing. Tristique magna sit amet
                            purus gravida. Tincidunt augue interdum velit euismod in. Quis risus sed vulputate odio ut enim
                            blandit volutpat maecenas. Cum sociis natoque penatibus et magnis dis parturient montes. Mattis
                            molestie a iaculis at erat pellentesque.

                            Vitae tempus quam pellentesque nec. Integer eget aliquet nibh praesent tristique magna sit. Vel
                            quam elementum pulvinar etiam non quam lacus. Tellus pellentesque eu tincidunt tortor aliquam
                            nulla facilisi cras fermentum. Lorem sed risus ultricies tristique nulla aliquet enim. Facilisis
                            volutpat est velit egestas dui id ornare. Commodo elit at imperdiet dui. Sociis natoque
                            penatibus et magnis. Purus faucibus ornare suspendisse sed nisi. Dis parturient montes nascetur
                            ridiculus mus mauris. Et pharetra pharetra massa massa ultricies.

                            Rhoncus urna neque viverra justo. Turpis massa sed elementum tempus egestas sed sed risus
                            pretium. Iaculis urna id volutpat lacus laoreet. Et egestas quis ipsum suspendisse ultrices
                            gravida dictum. Malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus vitae
                            congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nec
                            ullamcorper sit amet risus nullam. Elementum sagittis vitae et leo duis ut. Pellentesque diam
                            volutpat commodo sed egestas. Amet mauris commodo quis imperdiet. Ac auctor augue mauris augue.
                            Lacinia quis vel eros donec. Ut tristique et egestas quis ipsum. Neque gravida in fermentum et
                            sollicitudin ac orci phasellus.

                            Vivamus arcu felis bibendum ut tristique et. Morbi tincidunt ornare massa eget egestas purus
                            viverra accumsan. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Vitae
                            semper quis lectus nulla. Elit pellentesque habitant morbi tristique senectus et netus. Odio
                            euismod lacinia at quis. Proin fermentum leo vel orci porta non. Et sollicitudin ac orci
                            phasellus egestas tellus rutrum tellus pellentesque. Eu tincidunt tortor aliquam nulla. Lacus
                            luctus accumsan tortor posuere ac ut consequat. Diam donec adipiscing tristique risus nec
                            feugiat in fermentum. Sollicitudin tempor id eu nisl. Dignissim enim sit amet venenatis. Massa
                            placerat duis ultricies lacus sed turpis tincidunt id. Sit amet venenatis urna cursus eget nunc
                            scelerisque viverra. In iaculis nunc sed augue lacus viverra vitae congue eu. In iaculis nunc
                            sed augue lacus viverra vitae congue. Sociis natoque penatibus et magnis dis parturient montes.
                            Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Ut tellus elementum sagittis
                            vitae et.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingBottom: 15,
        paddingTop: 50
    },
    toggle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderColor: '#333',
        padding: 10,
        width: 400
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 50
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        paddingBottom: 50
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#265ca2',
        paddingTop: 35,
        paddingBottom: 5,
        height: 100
    },
});
