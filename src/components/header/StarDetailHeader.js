import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import navigationService from '../../utils/navigationService'
import whiteArrowBack from '../../assets/images/png/white_arrow_back.png'
import whiteStar from '../../assets/images/png/white_star.png'
import { ButtonWithFeedback, ModalPicker } from '../common'
import { inject, observer } from 'mobx-react'
import { width } from '../../utils/layout'
import SwitchToggle from 'react-native-switch-toggle'

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
    const { feedFilter, setFeedFilter } = this.props.starDetailStore
    return (
      <ParallaxScrollView
          backgroundColor="#fff"
          // contentBackgroundColor="pink"
          parallaxHeaderHeight={250}
          stickyHeaderHeight={100}
          backgroundSpeed={10}
          renderBackground={() => (
            <View
              style={{
              }}
            >
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
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={{ backgroundColor: '#000', height: 100, }}>
            </View>
          )}

          renderForeground={() => (
            <View
              style={{
                width,
                height: 240,
                marginTop: 140,
              }}
            >
              <View
                style={{
                  height: 50,
                  alignSelf: 'stretch',
                }}
              >
                <Image
                  source={{uri: 'http://blogfiles.naver.net/MjAxNzExMjhfNCAg/MDAxNTExODgwNTg2OTQ3.bL_KDqxDupYWf-TPVNbauYhU9ds-_lCVglb7VOoLLEcg.l5YmTuV8Dm58ZVdIsDrsqYIhiJwpNQ9A_H4HaZTevZog.JPEG.wldnjs2285/Screenshot_20171128-224650_edit.jpg'}}
                  style={{
                    position: 'absolute',
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    top: -40,
                    left: 20,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: -25,
                    left: 110,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 15, }}>1위 워너원</Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: 105,
                    top: 10,
                  }}
                >
                  <Text style={{ color: '#98a3ab' }}>8,293,192</Text>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    height: 28,
                    width: 90,
                    right: 20,
                    top: 10,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#fe5167',
                    borderRadius: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                  onPress={() => console.log(123)}
                >
                  <Text style={{ color: '#fe5167', fontSize: 14, }}>응원하기</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  height: 8,
                  backgroundColor: '#f4f6f7',
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: '#e2e3e6'
                }}
              />

              <View
                style={{
                  height: 50,
                  alignSelf: 'stretch',
                  borderColor: '#e2e3e6',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  style={{
                    // flex: 1,
                    width: 120,
                    borderRightWidth: 1,
                    borderColor: '#e2e3e6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'stretch'
                  }}
                  onPress={() => this.setState({modalVisible: true})}
                >
                  <Text>{this.props.starDetailStore.genderFilter}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, marginRight: 10, }}>공식 피드만 보기</Text>
                  <SwitchToggle
                    switchOn={feedFilter}
                    onPress={() => this.props.starDetailStore.setFeedFilter(!this.props.starDetailStore.feedFilter)}
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
                </View>
              </View>
            </View>
          )}

          renderFixedHeader={() => (
            <View
              style={{
                alignItems: 'center',
                width,
                height: 150,
                position: 'absolute',
                paddingRight: 20,
                paddingLeft: 20,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 20,
              }}
            >
              <TouchableOpacity onPress={() => console.log(123)}>
                <Image source={whiteArrowBack} />
              </TouchableOpacity>
              <Text style={{ color: '#fff' }}>워너원</Text>
              <TouchableOpacity onPress={() => console.log(123)}>
                <Image source={whiteStar} />
              </TouchableOpacity>
            </View>
          )}
        >
          { this.props.children }
          <ModalPicker
            modalVisible={this.state.modalVisible}
            closeModalFn={this.closeModal}
            selectedValue={this.selectedValue}
          />
        </ParallaxScrollView>
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
})

export { StarDetailHeader }
