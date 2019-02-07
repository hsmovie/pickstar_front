import React from 'react'
import { TextInput, View } from 'react-native'

const Input = ({ value, onChangeText, placeholder, secureTextEntry, style }) => {
  const { inputStyle, containerStyle } = styles
  return (
    <View style={[containerStyle, style]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="#fff"
      />
    </View>
  )
}

const styles = {
  containerStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 23,
    flex: 1,
  },
}

export { Input }
