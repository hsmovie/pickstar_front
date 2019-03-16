import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

export default class FeedComments extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>
            댓글 { this.props.commentCount }개 전체 보기
          </Text>
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
    paddingLeft: 20 
  },
  textStyle: {
    color: '#98a3ab',
    fontSize: 12,
  }
})
