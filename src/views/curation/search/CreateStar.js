import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import navigationService from '../../../utils/navigationService'
import logo from '../../../assets/images/png/logo.png'

class CreateStar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  pressButton() {
    navigationService.navigate('create')
  }

  render() {
    const {
      containerStyle,
      textStyle,
      textBoxStyle,
    } = styles
    return (
      <View style={containerStyle}>
        <TouchableWithoutFeedback
          onPress={() => this.pressButton()}
        >
          <Image
            source={logo}
          />
        </TouchableWithoutFeedback>
        <View style={textBoxStyle}>
          <Text style={textStyle}>찾고있는 나의 스타의 페이지가 없나요?</Text>
          <Text style={textStyle}>My 스타의 첫페이지를 만들어주세요.</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxStyle: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'center',
  },
}

export default CreateStar
