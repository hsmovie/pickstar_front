import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const ButtonGradient = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle, gradientStyle } = styles

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
    >
      <View colors={['#f77062', '#fe5196']} style={gradientStyle}>
        <Text style={textStyle}>
          { children }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  gradientStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
}

export { ButtonGradient }
