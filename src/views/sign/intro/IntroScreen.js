import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {
  ButtonWithoutFeedback,
  ConfirmModal,
} from '../../../components/common'

import navigationService from '../../../utils/navigationService'

import Hello from '../../../assets/images/png/phone.png'

class IntroScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    modalVisible: false,
  }

  openConfirmModal(sign) {
    this.setState({ modalVisible: sign })
  }

  closeConfirmModal() {
    this.setState({ modalVisible: false })
  }

  navigate (path) {
    this.closeConfirmModal()
    navigationService.navigate(path)
  }

  render() {
    const {
      containerStyle,
      titleBoxStyle,
      textStyle,
      buttonBoxStyle,
      imageBoxStyle,
      imageStyle,
      buttonStyle,
      buttonTextStyle,
    } = styles

    return (
      <View style={containerStyle}>
        <View style={titleBoxStyle}>
          <Text style={textStyle}>내가 좋아하는 연예인에게</Text>
          <Text style={textStyle}>똑똑하게 투자 해보세요!</Text>
        </View>
        <View style={imageBoxStyle}>
          <Image
            source={Hello}
            style={imageStyle}
          />
        </View>
        <View style={buttonBoxStyle}>
          <ButtonWithoutFeedback
            viewStyle={buttonStyle}
            textStyle={{ ...buttonTextStyle, color: '#b3b9be' }}
            onPress={() => this.openConfirmModal(true)}
          >
            둘러보기
          </ButtonWithoutFeedback>
          <ButtonWithoutFeedback
            viewStyle={buttonStyle}
            textStyle={{ ...buttonTextStyle, color: '#ff6791' }}
            onPress={() => this.navigate('login')}
          >
            시작하기
          </ButtonWithoutFeedback>
        </View>
        <ConfirmModal
          title="SNS 로그인"
          des="SNS를 이용하여 로그인을 하시면 출첵 하트를 지급 받을 수 있습니다."
          modalVisible={this.state.modalVisible}
          leftButtonFn={() => navigationService.navigate('Main')}
          rightButtonFn={() => this.navigate('login')}
          leftButtonText="둘러보기"
          rightButtonText="로그인"
          closeModalFn={() => this.closeConfirmModal()}
        />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9696f'
  },
  titleBoxStyle: {
    marginTop: 150,
    marginBottom: 45,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  imageBoxStyle: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  imageStyle: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 75,
    marginBottom: -5,
  },
  buttonBoxStyle: {
    height: 56,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    flex: 1,
    borderWidth: 1,
    borderColor: '#f4f4f4',
  },
  buttonTextStyle: {
    fontSize: 14,
  },
}

export default IntroScreen
