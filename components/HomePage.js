import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import data from '../test_pois.json';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: data,
            location: {},
            getLocation: 0 // 0 - NotAllowLocation, 1 - AllowLocation
        };
    }
    watchID = null;

    buttonClickSecondPage() {
        Actions.SecondPage(
            {
                addresses: this.state.addresses,
                location: { ...this.state.location },
                getLocation: this.state.getLocation
            });
    }

    componentDidMount  = () => {
        this.watchID = navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                this.setState({ location });
                this.setState({ getLocation: 1 });
            },
            (error) => {
                this.setState({ getLocation: 0 });
                Alert.alert(
                    'Attention !!',
                    'Some services may not work correctly.'
                );
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    componentWillUnmount  = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 40, fontSize: 20 }}>App Home Page</Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[{ width: "40%", margin: 10 }]}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.buttonClickSecondPage.bind(this)}
                        >
                         <Text style={styles.text}>Goto Second Page</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 11
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },
    text: {
        color: '#fff'
    }
});