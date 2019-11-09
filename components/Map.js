import React, { Component } from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput
// } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import data from '../test_pois.json';


export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    // createMarker(data) {
    //     let marker = [],
    //         length = data.length;

    //     for (let i = 0; i < length; i++) {
    //         item = data[i];
    //         marker.push(
    //             <Marker
    //                 key={item.id}
    //                 draggable
    //                 coordinate={{
    //                     latitude: parseInt(item.latitude, 10),
    //                     longitude: parseInt(item.longitude, 10)
    //                 }}
    //                 onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
    //                 title={item.address}
    //                 description = {JSON.stringify(e.nativeEvent.coordinate)}
    //             />
    //         )
    //     }

    //     return marker;
    // }  
    // render() {
    //     let setMarker = this.createMarker(this.props.addresses);

    //     return (
    //         <View style={style.container}>
    //             <MapView
    //                 provider={MapView.PROVIDER_GOOGLE}
    //                 style={style.map}
    //                 zoomEnabled={true}
    //                 loadingIndicatorColor={"#ffbbbb"}
    //                 loadingBackgroundColor={"#ffbbbb"}
    //                 showsUserLocation = {true}
    //                 zoomEnabled = {true}
    //             >
    //                 {setMarker}

    //             </MapView>
    //         </View>
    //     );
    // }
}


// const style = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFill
//     }
//   });