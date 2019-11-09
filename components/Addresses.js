import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { getDistance } from '../calculateDistance';


export default class Addresses extends React.Component {
    constructor(props) {
        super(props);
    }

    calcDistance(data, location) {
        var tmpList = [];
        let dist = 0;
        for (let i = 0; i < data.length; i++) {
            item = data[i];
            const start = {
                latitude: item.latitude,
                longitude: item.longitude
            }
            dist = this.props.getLocation === 0? 0 : getDistance(start, location);
            tmpList.push(
                {
                    'id': item.id,
                    address: item.address,
                    'distance': dist
                }
            )
        }
        return tmpList
    }

    createList(data, location) {
        let list = [];
        var tmpData = this.calcDistance(data, location);

        if (this.props.getLocation)  tmpData.sort((a, b) => a.distance > b.distance);
        else tmpData.sort((a, b) => a.address > b.address);

        for (let i = 0; i < tmpData.length; i++) {
            item = tmpData[i];

            list.push(
                <TouchableOpacity
                    key={item.id}
                    style={styles.container}>
                    <Text style={styles.text}>
                        {item.address}
                    </Text>
                    <Text style={styles.text}>
                        Distance : {item.distance} km
                    </Text>
                </TouchableOpacity>
            )
        }
        return list;
    }

    render() {
        let addresses = this.createList(this.props.addresses, this.props.location);
        return (
            <View>
                <ScrollView>
                    {addresses}
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#F5FCFF',
    },
    text: {
        textAlign: "left",
        color: '#4f603c',
    },
})




