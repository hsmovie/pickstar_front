import React, {Component} from 'react'
import ParallaxScrollView from 'react-native-parallax-scroll-view'

import Background from './Background'
import Foreground from './Foreground'
import FixedHeader from './FixedHeader'
import StickyHeader from './StickyHeader'

class StarDetailHeader extends Component {
  render() {
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

export { StarDetailHeader }
