import React from 'react'
import { Image } from 'react-native'

export default class TabBarIcon extends React.Component {
  render() {
    const {
      iconColor,
    } = styles

    return (
      <Image
        source={require('../assets/images/logo.svg')}
      />
    )
  }
}

const tintColor = '#2f95dc'
const styles = {
  iconColor: {
    tintColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColor,
    tabBar: '#fefefe',
    errorBackground: 'red',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeBackground: tintColor,
    noticeText: '#fff',
  },
}
