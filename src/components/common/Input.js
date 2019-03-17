import React from 'react'
import { TextInput, View, Image, TouchableOpacity } from 'react-native'
import searchGrayImage from '../../assets/images/png/search_gray.png'

const Input = ({ value, onChangeText, placeholder, secureTextEntry, style, noIcon, writerImageUrl, disabled }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      {
        writerImageUrl
        ?
        <Image
          source={{ uri: writerImageUrl, }}
          style={styles.leftImageStyle}
        />
        :
        null
      }
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="#fff"
        disabled={disabled}
      />
      {
        noIcon ? null
        :
        <TouchableOpacity style={styles.searchImageStyle}>
          <Image source={searchGrayImage} />
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
  },
  leftImageStyle: {
    height: 24,
    width: 24,
    borderRadius: 15,
    marginLeft: 12,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    flex: 1,
  },
  searchImageStyle: {
    width: 20,
    height: 20,
    marginRight: 20,
  }
}

export { Input }
