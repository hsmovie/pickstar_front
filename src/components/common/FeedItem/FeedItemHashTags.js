import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

export default class FeedItemHashTags extends Component {
  renderHashTags () {
    return this.props.hashTags.map((item, index) => {
      return (
      <TouchableOpacity key={index} style={{ marginLeft: 5, }}>
        <Text>#{ item }</Text>
      </TouchableOpacity>
      )
    })
  }

  render () {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.hashTagsAreaStyle}>
          { this.renderHashTags() }
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>더보기</Text>
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
  hashTagsAreaStyle: {
    width: 250,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  buttonStyle: {
    marginLeft: 10,
  },
  textStyle: {
    color: '#98a3ab',
    fontSize: 14,
  }
})
