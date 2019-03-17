import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { width } from '../../../utils/layout'
import arrowDownImage from '../../../assets/images/png/arrow_down.png'
import { inject, observer } from 'mobx-react'
import { Switch, } from '../../common'
import { ModalPicker, } from '../../modal'

@inject("starDetailStore")
@observer
export default class Foreground extends Component {
  state = { modalVisible: false }
  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  selectedValue = (item) => {
    this.props.starDetailStore.setGenderFilter(item)
    this.closeModal()
  }
  render () {
    return (
      <View style={styles.containerStyle}>
         <View style={styles.innerContainerStyle}>
          <Image
            source={{uri: 'http://blogfiles.naver.net/MjAxNzExMjhfNCAg/MDAxNTExODgwNTg2OTQ3.bL_KDqxDupYWf-TPVNbauYhU9ds-_lCVglb7VOoLLEcg.l5YmTuV8Dm58ZVdIsDrsqYIhiJwpNQ9A_H4HaZTevZog.JPEG.wldnjs2285/Screenshot_20171128-224650_edit.jpg'}}
            style={styles.circleImage}
          />
          <Text style={styles.upperTextStyle}>1위 워너원</Text>
            <Text style={styles.lowerTextStyle}>8,293,192</Text>
          <TouchableOpacity
            style={styles.cheerButtonStyle}
            onPress={() => console.log(123)}
          >
            <Text style={styles.cheerTextStyle}>응원하기</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.grayAreaStyle} />
  
        <View style={styles.subHeaderStyle}>
          <TouchableOpacity
            style={styles.genderButtonStyle}
            onPress={() => this.setState({modalVisible: true})}
          >
            <Image source={arrowDownImage} style={{ marginRight: 10, }} />
            <Text style={styles.genderTextStyle}>{this.props.starDetailStore.genderFilter}</Text>
          </TouchableOpacity>

          <View style={styles.filterContainerStyle}>
            <Text style={styles.filterTextStyle}>공식 피드만 보기</Text>
            <Switch
              switchValue={this.props.starDetailStore.feedFilter}
              onPress={() => this.props.starDetailStore.setFeedFilter(!this.props.starDetailStore.feedFilter)}
            />
          </View>
        </View>

        <ModalPicker
          modalVisible={this.state.modalVisible}
          closeModalFn={this.closeModal}
          selectedValue={this.selectedValue}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width,
    height: 240,
    marginTop: 140,
  },
  innerContainerStyle: {
    height: 50,
    alignSelf: 'stretch',
  },
  circleImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    top: -40,
    left: 20,
  },
  upperTextStyle: {
    position: 'absolute',
    top: -25,
    left: 110,
    color: '#fff',
    fontSize: 15,
  },
  lowerTextStyle: {
    position: 'absolute',
    left: 105,
    top: 10,
    color: '#98a3ab',
  },
  cheerButtonStyle: {
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
  },
  cheerTextStyle: {
    color: '#fe5167',
    fontSize: 14,
  },
  grayAreaStyle: {
    height: 8,
    backgroundColor: '#f4f6f7',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e2e3e6'
  },
  subHeaderStyle: {
    height: 50,
    alignSelf: 'stretch',
    borderColor: '#e2e3e6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  genderButtonStyle: {
    width: 120,
    borderRightWidth: 1,
    borderColor: '#e2e3e6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  genderTextStyle: {
    color: '#4a4a4a',
    fontSize: 12,
  },
  filterContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  filterTextStyle: {
    fontSize: 12,
    marginRight: 10,
    color: '#4a4a4a',
  },
})
