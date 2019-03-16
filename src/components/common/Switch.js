import React, { Component } from 'react'
import SwitchToggle from 'react-native-switch-toggle'

class Switch extends Component {
  render () {
    return (
      <SwitchToggle
        switchOn={this.props.switchValue}
        onPress={this.props.onPress}
        containerStyle={{
          width: 35,
          height: 20,
          borderRadius: 25,
          // backgroundColor: '#ccc',
          padding: 5,
          marginRight: 20,
        }}
        circleStyle={{
          width: 14,
          height: 14,
          borderRadius: 7,
          // backgroundColor: '#fe5167', // rgb(102,134,205)
        }}
        circleColorOff='#fe5167'
        circleColorOn='#fff'
        backgroundColorOff='#e5e1e0'
        backgroundColorOn='#fe5167'
      />
    )
  }
}

export { Switch }
