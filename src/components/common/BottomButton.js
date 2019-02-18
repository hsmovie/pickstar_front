import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class BottomButton extends Component {
  render () {
    const { buttonStyle, textStyle, gradientStyle } = styles
    const { style, onPress, disabled, children } = this.props
    return (
      <TouchableOpacity
        style={[buttonStyle, style, disabled ? { backgroundColor: '#e2e3e6' } : {backgroundColor: '#fe5167'}]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={textStyle}>
          { children }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  buttonStyle: {
    height: 56,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
  },
}

export { BottomButton }
