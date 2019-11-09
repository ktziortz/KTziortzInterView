
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonClickList() {
    Actions.Addresses(
      {
        addresses: this.props.addresses,
        location: this.props.location,
        getLocation: this.props.getLocation
      });
  }

  buttonClickMap = () => {
   Actions.Map(
      {
        addresses: this.props.addresses,
        location: this.props.location,
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 40, fontSize: 20 }}>App Second Page</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[{ width: "40%", margin: 10 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.buttonClickList.bind(this)}
            >
              <Text style={styles.text}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.buttonClickMap.bind(this)}>
              <Text style={styles.text}>Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>);
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