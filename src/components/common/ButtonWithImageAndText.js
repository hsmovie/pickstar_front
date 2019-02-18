import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { ButtonWithFeedback } from '../common'

class ButtonWithImageAndText extends Component {
  render () {
    const { children, style, onPress, active, text } = this.props
    return (
      <ButtonWithFeedback
        onPress={onPress}
        style={[styles.containerStyle, style]}
      >
        { children }
        <Text style={styles.textStyle}>
          { text }
        </Text>
      </ButtonWithFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    borderWidth: 1,
    borderColor: '#98a3ab',
    marginRight: 6,
    marginLeft: 6,
  },
  textStyle: {
    marginTop: 5,
    textAlign: 'center',
  }
}

export { ButtonWithImageAndText }
