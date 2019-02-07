import { createStackNavigator } from 'react-navigation'
import IntroScreen from './intro/IntroScreen'
import LoginScreen from './login/LoginScreen'

const AuthStack = createStackNavigator({
  login: LoginScreen,
  intro: IntroScreen,
})

export default AuthStack
