import { createStackNavigator } from 'react-navigation'
import AuthIntroScreen from './intro/AuthIntroScreen'
import AuthLoginScreen from './login/AuthLoginScreen'

const AuthStack = createStackNavigator({
  authIntro: AuthIntroScreen,
  authLogin: AuthLoginScreen,
})

export default AuthStack
