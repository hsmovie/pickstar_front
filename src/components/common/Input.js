import React from 'react'
import { TextInput, View, Image, TouchableOpacity } from 'react-native'
import searchGrayImage from '../../assets/images/png/search_gray.png'

const Input = ({ value, onChangeText, placeholder, secureTextEntry, style, noIcon, writerImageUrl, disabled }) => {
  const { inputStyle, containerStyle } = styles
  return (
    <View style={[containerStyle, style]}>
      {
        writerImageUrl
        ?
        <Image
          source={{
            uri: writerImageUrl,
          }}
          style={{
            height: 24,
            width: 24,
            borderRadius: 15,
            marginLeft: 12,
          }}
        />
        :
        null
      }
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
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#e2e3e6',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 10,
    paddingLeft: 10,
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
