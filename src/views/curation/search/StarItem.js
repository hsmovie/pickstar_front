import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { width } from '../../../utils/layout'
import logo from '../../../assets/images/png/logo.png'
import { inject, observer } from 'mobx-react'

@inject("curationStore")
@observer
class StarItem extends Component {
  state = {
    isSelected: false
  }

  handleStarSelect = () => () => {
    this.setState(prevState => ({isSelected: !prevState.isSelected}))
    if (!this.state.isSelected) {
      this.props.curationStore.addSelectedStars(this.props.rankData.item)
    } else {
      this.props.curationStore.removeSelectedStars(this.props.rankData.item)
    }
  }

  circleStyle () {
    const dimensionWidthSize = width / 3
    const innerCircleSize = dimensionWidthSize / 1.5

    if (!this.state.isSelected) {
      return {
        width: innerCircleSize,
        height: innerCircleSize,
        borderRadius: innerCircleSize,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      }
    } else {
      return {
        width: innerCircleSize,
        height: innerCircleSize,
        borderRadius: innerCircleSize,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  }

  render() {
    const {
      containerStyle,
      circleStyle,
      textStyle,
      imageStyle,
      dimStyle
    } = styles

    const {
      name,
      rank
    } = this.props.rankData.item

    return (
      <View
        style={containerStyle}
      >
        <TouchableOpacity
          style={this.circleStyle()}
          onPress={this.handleStarSelect(rank)}
        >
          <Image
            source={logo}
            style={imageStyle}
          />
        </TouchableOpacity>
        <Text style={textStyle}>
          {name.length > 4 ? `${name.substring(0, 4)}...` : name }
        </Text>
      </View>
    )
  }
}

const dimensionWidthSize = width / 3
const innerCircleSize = dimensionWidthSize / 1.5

const styles = StyleSheet.create({
  containerStyle: {
    width: dimensionWidthSize,
    height: dimensionWidthSize,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  circleStyle: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedStarsColor: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  imageStyle: {
    width: 24,
    height: 24,
    backgroundColor: '#000'
  },
})

export default StarItem
