import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,} from 'react-native'

import commentImage from '../../../assets/images/png/comment.png'
import likeImage from '../../../assets/images/png/like.png'
import shareImage from '../../../assets/images/png/share.png'

export default class FeedItemStatus extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Image source={likeImage} />
        </TouchableOpacity>
        <Text style={styles.textStyle}>{ this.props.likeCount }</Text>

        <TouchableOpacity style={[styles.buttonStyle, {marginLeft: 10,}]}>
          <Image source={commentImage} />
        </TouchableOpacity>
        <Text style={[styles.textStyle, {marginLeft: 6,}]}>{ this.props.commentCount }</Text>

        <TouchableOpacity
          style={[styles.buttonStyle, {
            position: 'absolute',
            right: 20,
          }]}
        >
          <Image
            source={shareImage}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  buttonStyle: {
    width: 24,
    height: 24,
  },
  textStyle: {
    fontSize: 12,
  }
})
