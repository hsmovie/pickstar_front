import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

const ButtonWithoutFeedback = ({ onPress, children, viewStyle, textStyle }) => {
  const {
    containerStyle,
  } = styles

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={[containerStyle, viewStyle]}>
        <Text style={textStyle}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export { ButtonWithoutFeedback }
