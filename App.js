import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import Routes from './Routes'
import data from './test_pois.json';

class App extends Component {
  render() {
     return (
        <Routes/>
     )
  }
}
export default App
AppRegistry.registerComponent('App', () => App)
