import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import navigationService from '../utils/navigationService'

import MainTabNavigator from './main/MainTabNavigator'
import AuthNavigator from './auth/AuthNavigator'
import CurationNavigator from './curation/CurationNavigator'
import { Provider } from "mobx-react";
import stores from '../store'
const navigatorConfig = {
  initialRouteName: 'Curation',
}

const SwitchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Curation: CurationNavigator,
  Auth: AuthNavigator,
  Main: MainTabNavigator,
}, navigatorConfig)

const AppContainer = createAppContainer(SwitchNavigator)

class App extends Component {
  render () {
    return (
      <Provider {...stores}>
        <AppContainer
          ref={navigatorRef => {
            navigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    )
  }
}

export default App
