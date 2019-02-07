import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import navigationService from 'app/src/utils/navigationService'

class BackArrowHeader extends Component {
  render() {
    const {
      containerStyle,
      backArrowIconStyle,
      textStyle,
    } = styles

    const {
      firstLineText,
      secondLineText,
      style,
    } = this.props
    return (
      <View style={[containerStyle, style]}>
        <View>
          <TouchableWithoutFeedback
            onPress={() => navigationService.goBack()}
          >
            {/* <MaterialIcons
              name="arrow-back"
              size={24}
              style={backArrowIconStyle}
            /> */}
          </TouchableWithoutFeedback>
          <Text style={[textStyle, { marginTop: 10 }]}>{firstLineText}</Text>
          <Text style={textStyle}>{secondLineText}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    height: 180,
  },
  backArrowIconStyle: {
    marginTop: 48,
    marginLeft: 21,
    width: 26,
    color: '#fff',
  },
  textStyle: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 30,
    fontWeight: '500',
  },
}

export { BackArrowHeader }
