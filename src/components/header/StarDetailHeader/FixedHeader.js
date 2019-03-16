import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { width } from '../../../utils/layout'

import whiteArrowBack from '../../../assets/images/png/white_arrow_back.png'
import whiteStar from '../../../assets/images/png/white_star.png'

export default class FixedHeader extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => console.log(123)}>
          <Image source={whiteArrowBack} />
        </TouchableOpacity>
        <Text style={{ color: '#fff' }}>워너원</Text>
        <TouchableOpacity onPress={ () => console.log(123)}>
          <Image source={whiteStar} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    width,
    height: 150,
    position: 'absolute',
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20,
  },
})
