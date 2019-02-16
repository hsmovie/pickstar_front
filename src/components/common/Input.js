import React from 'react'
import { TextInput, View, Image } from 'react-native'
import logo from '../../assets/images/png/logo.png'

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
      <Image
        source={logo}
        style={styles.searchImageStyle}
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
    borderColor: '#e2e3e6',
    borderWidth: 1,
    borderRadius: 25,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 23,
    flex: 1,
  },
  searchImageStyle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    marginRight: 20,
  }
}

export { Input }
