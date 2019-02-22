import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { width } from '../../../../utils/layout'
import { inject, observer } from 'mobx-react'

import whiteArrowBack from '../../../../assets/images/png/white_arrow_back.png'
import whiteStar from '../../../../assets/images/png/white_star.png'

export default class RankScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          backgroundColor="#fff"
          // contentBackgroundColor="pink"
          parallaxHeaderHeight={180}
          stickyHeaderHeight={100}
          backgroundSpeed={10}
          renderBackground={() => (
            <View key="background">
              <Image
                source={{
                  uri: 'http://post.phinf.naver.net/MjAxNzA3MDJfMTgw/MDAxNDk4OTI0MTg5OTU0.SHHVt9vn4NPFWpDQCkouY2SmHraCISFB6XquLsWsX9Mg.VWCFfdB1XOs5vH9CP3XB3hrGU5PIqotkRJ4MnY05egsg.JPEG/mug_obj_149892419005326582.jpg',
                  width,
                  height: BACKGROUND_HEIGHT,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  width: width,
                  height: BACKGROUND_HEIGHT,
                  backgroundColor: 'rgba(0,0,0,.4)',
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                  height: BACKGROUND_HEIGHT,
                  width,
                  paddingRight: 20,
                  paddingLeft: 20,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingBottom: 20,
                  zIndex: 222,
                }}
              >
                <TouchableOpacity style={{borderWidth: 2,}} onPress={() => console.log(123)}>
                  <Image source={whiteArrowBack} />
                </TouchableOpacity>
                <Text style={{ color: '#fff' }}>워너원</Text>
                <TouchableOpacity style={{borderWidth: 2,}} onPress={() => console.log(123)}>
                  <Image source={whiteStar} />
                </TouchableOpacity>
              </View>
              <Image
                source={{uri: 'http://blogfiles.naver.net/MjAxNzExMjhfNCAg/MDAxNTExODgwNTg2OTQ3.bL_KDqxDupYWf-TPVNbauYhU9ds-_lCVglb7VOoLLEcg.l5YmTuV8Dm58ZVdIsDrsqYIhiJwpNQ9A_H4HaZTevZog.JPEG.wldnjs2285/Screenshot_20171128-224650_edit.jpg'}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginTop: -45,
                  marginLeft: 20,
                }}
              />
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={styles.stickySection}>
              {/* <Text style={styles.stickySectionText}>Rich Hickey Talks</Text> */}
            </View>
          )}

          renderForeground={() => (
            <View style={{ width }}></View>
          )}

          renderFixedHeader={() => (
            <View
              style={{
                alignItems: 'center',
                width,
                height: 150,
                borderWidth: 2,
                position: 'absolute',
                paddingRight: 20,
                paddingLeft: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 20,
              }}
            >
              <TouchableOpacity style={{borderWidth: 2, zIndex: 222,}} onPress={() => console.log(123)}>
                <Image source={whiteArrowBack} />
              </TouchableOpacity>
              <Text style={{ color: '#fff' }}>워너원</Text>
              <TouchableOpacity style={{borderWidth: 2,}} onPress={() => console.log(123)}>
                <Image source={whiteStar} />
              </TouchableOpacity>
            </View>
          )}
        >

          <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text>Scroll me</Text>
          </View>

        </ParallaxScrollView>


      </View>
    )
  }
}

const BACKGROUND_HEIGHT = 140

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickySection: {
    height: 100,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: '#000'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
})
