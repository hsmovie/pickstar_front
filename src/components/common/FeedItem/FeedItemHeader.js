import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image,} from 'react-native'
import moreImage from '../../../assets/images/png/more.png'

export default class FeedItemHeader extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <Image
            source={{ uri: this.props.writerImageUrl, }}
            style={styles.writerImageStyle}
          />
        <View>
          <Text style={{ fontSize: 14, marginBottom: 5, }}>{ this.props.writerName }</Text>
          <Text style={{ fontSize: 10, }}>{ `Lv.${this.props.level} | 1시간 전` }</Text>
        </View>
        <TouchableOpacity style={{ position: 'absolute', right: 20,}}>
          <Image source={moreImage}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  writerImageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 10,
  },
})
