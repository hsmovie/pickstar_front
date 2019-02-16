import React from 'react'
import {  View, TouchableOpacity } from 'react-native'

const ButtonWithFeedback = ({ onPress, children, viewStyle, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
    >
      <View style={viewStyle}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export { ButtonWithFeedback }
