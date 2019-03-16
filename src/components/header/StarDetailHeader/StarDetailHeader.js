import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import navigationService from '../../../utils/navigationService'
import whiteArrowBack from '../../../assets/images/png/white_arrow_back.png'
import whiteStar from '../../../assets/images/png/white_star.png'
import { ButtonWithFeedback, ModalPicker } from '../../common'
import { inject, observer } from 'mobx-react'
import { width } from '../../../utils/layout'
import arrowDownImage from '../../../assets/images/png/arrow_down.png'

import Background from './Background'
import Foreground from './Foreground'
import FixedHeader from './FixedHeader'
import StickyHeader from './StickyHeader'

@inject("starDetailStore")
@observer
class StarDetailHeader extends Component {
  state = {
    modalVisible: false,
    switchOn: false
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }
  selectedValue = (item) => {
    this.props.starDetailStore.setGenderFilter(item)
    this.closeModal()
  }

  render() {
    const { feedFilter } = this.props.starDetailStore
    return (
      <ParallaxScrollView
          backgroundColor="#fff"
          // contentBackgroundColor="pink"
          parallaxHeaderHeight={250}
          stickyHeaderHeight={100}
          backgroundSpeed={10}
          renderBackground={() => <Background />}
          renderStickyHeader={() => <StickyHeader />}
          renderForeground={() => <Foreground />}
          renderFixedHeader={() => <FixedHeader />}
        >
          { this.props.children }
        </ParallaxScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { StarDetailHeader }
