import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import HomePage from './components/HomePage'
import Addresses from './components/Addresses'
import SecondPage from './components/SecondPage'
import Map from './components/Map'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "HomePage" component = {HomePage} title = "Home Page" initial = {true} />
         <Scene key = "SecondPage" component = {SecondPage} title = "SecondPage" />
         <Scene key = "Addresses" component = {Addresses} title = "Addresses" />
         <Scene key = "Map" component = {Map} title = "Map" />
      </Scene>
   </Router>
)
export default Routes