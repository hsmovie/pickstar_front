import React, {Component} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SocialLoginButton } from '../../../components/common'
import logo from '../../../assets/images/png/logo.png'
import navigationService from '../../../utils/navigationService'
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      (result) => {
        AccessToken.getCurrentAccessToken().then(
          (data) => { console.log(data) }
        )
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  navigate (path) {
    navigationService.navigate(path)
  }

  render() {
    return (
      <LinearGradient colors={['#f78462', '#fe5167']} style={styles.container}>
        <Image
          source={logo}
          style={styles.imageStyle}
        />
        <SocialLoginButton type="facebook" onPress={this.handleFacebookLogin}>
          페이스북으로 로그인
        </SocialLoginButton>
        <SocialLoginButton type="google">
          구글로 로그인
        </SocialLoginButton>
        <SocialLoginButton type="kakao">
          카카오톡으로 로그인
        </SocialLoginButton>
        <SocialLoginButton type="kakao" onPress={() => this.navigate('curationSearch')}>
          관심연예인 flow
        </SocialLoginButton>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageStyle: {
    marginBottom: 30
  }
});
