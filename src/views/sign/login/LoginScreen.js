import React, {Component} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SocialLoginButton } from '../../../components/common'
import logo from '../../../assets/images/png/logo.png'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <LinearGradient colors={['#f78462', '#fe5167']} style={styles.container}>
        <Image
          source={logo}
          style={styles.imageStyle}
        />
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
        <SocialLoginButton type="facebook">
          페이스북으로 로그인
        </SocialLoginButton>
        <SocialLoginButton type="google">
          구글로 로그인
        </SocialLoginButton>
        <SocialLoginButton type="kakao">
          카카오톡으로 로그인
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
