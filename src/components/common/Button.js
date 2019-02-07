import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
    >
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ff6791',
    fontSize: 15,
    fontWeight: '600',
  },
}

export { Button }
