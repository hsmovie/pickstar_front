import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,} from 'react-native'
import { width } from '../../../utils/layout'

export default class Background extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={{
            uri: 'http://post.phinf.naver.net/MjAxNzA3MDJfMTgw/MDAxNDk4OTI0MTg5OTU0.SHHVt9vn4NPFWpDQCkouY2SmHraCISFB6XquLsWsX9Mg.VWCFfdB1XOs5vH9CP3XB3hrGU5PIqotkRJ4MnY05egsg.JPEG/mug_obj_149892419005326582.jpg',
            width,
            height: 140,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: width,
            height: 140,
            backgroundColor: 'rgba(0,0,0,.4)',
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})
