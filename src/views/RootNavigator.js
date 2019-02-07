import React, { Component } from 'react'
// import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import navigationService from '../utils/navigationService'

import MainTabNavigator from './main/MainTabNavigator'
import SignNavigator from './sign/SignNavigator'
// import CurationNavigator from 'app/src/views/curation/CurationNavigator'

// import SplashScreen from 'app/src/screens/loading/SplashScreen'

const navigatorConfig = {
  initialRouteName: 'Sign',
}

const SwitchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Sign: SignNavigator,
  // AuthLoading: { screen: SplashScreen },
  Main: MainTabNavigator,
  // Curation: CurationNavigator,
}, navigatorConfig)

const AppContainer = createAppContainer(SwitchNavigator)

class App extends Component {
  render () {
    return (
      <AppContainer
        ref={navigatorRef => {
          navigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    )
  }
}

export default App
