import React from 'react'
import { TextInput, View, Image, TouchableOpacity } from 'react-native'
import searchGrayImage from '../../assets/images/png/search_gray.png'

const Input = ({ value, onChangeText, placeholder, secureTextEntry, style, noIcon, disabled }) => {
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
        disabled={disabled}
      />
      {
        noIcon ? null
        :
        <TouchableOpacity style={styles.searchImageStyle}>
          <Image
            source={searchGrayImage}
          />
        </TouchableOpacity>
      }
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
    marginRight: 20,
  }
}

export { Input }
