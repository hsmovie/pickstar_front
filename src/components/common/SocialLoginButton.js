import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import googleImage from '../../assets/images/png/google.png'
import facebookImage from '../../assets/images/png/facebook.png'
import kakaoImage from '../../assets/images/png/kakao.png'

class SocialLoginButton extends Component {
  logoGenerator = () => {
    const { type } = this.props
    switch (type) {
      case 'google':
        return googleImage
      case 'facebook':
        return facebookImage
      case 'kakao':
        return kakaoImage
    }
  }
  render () {
    const {
      containerStyle,
      textStyle,
      imageStyle,
      viewStyle,
    } = styles
    const {
      onPress
    } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerStyle}
      >
        <View style={viewStyle}>
          <Image
            source={this.logoGenerator()}
            style={imageStyle}
          />
          <Text style={textStyle}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 20,
    borderWidth: 1,
    height: 56,
    marginRight: 40,
    marginLeft: 40,
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 24,
    height: 24,
    marginRight: 15
  }
}

export { SocialLoginButton }
