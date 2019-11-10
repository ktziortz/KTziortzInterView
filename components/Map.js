import React, { Component } from "react";
import {
    StyleSheet,
    View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null
        }
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    createMarker(data) {
        let marker = [],
            length = data.length;

        for (let i = 0; i < length; i++) {
            item = data[i];
            marker.push(
                <Marker
                    key={item.id}
                    draggable
                    coordinate={{
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                    }}
                    onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                    title={item.address}
                    description={item.latitude + ', ' + item.longitude}
                />
            )
        }
        return marker;
    }

    render() {
        let setMarker = this.createMarker(this.props.addresses);
        return (
            <View style={style.container}>
                <MapView
                    provider={MapView.PROVIDER_GOOGLE}
                    style={style.map}
                    zoomEnabled={true}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: 23.748550,
                        latitudeDelta: 8,
                        longitudeDelta: 8,
                    }}
                >
                    {setMarker}
                </MapView>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFill
    }
});



// import React from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// export default class Map extends React.Component {
//     onRegionChange(region) {
//         this.setState({ region });
//     }
//     render() {
//         var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     style={styles.map}
//                     initialRegion={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                     customMapStyle={mapStyle}
//                 >
//                     <Marker
//                         draggable
//                         coordinate={{
//                             latitude: 37.78825,
//                             longitude: -122.4324,
//                         }}
//                         onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
//                         title={'Test Marker'}
//                         description={'This is a description of the marker'}
//                     />
//                 </MapView>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//     },
//     map: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//     },
// });