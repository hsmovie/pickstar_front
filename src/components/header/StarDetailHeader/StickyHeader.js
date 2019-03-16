import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native'

export default class StickyHeader extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000',
    height: 100,
  },
})
