import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { BottomButton, ColorPickerModal } from '../../../components/common'
import { width } from '../../../utils/layout'
import { inject, observer } from 'mobx-react'
import checkImage from '../../../assets/images/png/check.png'
import plusGrayImage from '../../../assets/images/png/plus_gray.png'
import navigationService from '../../../utils/navigationService'

@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    modalVisible: false
  }

  handleColor = (color) => () => {
    const { setColor } = this.props.curationStore
    setColor(color)
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  openModal = () => {
    this.setState({modalVisible: true})
  }

  confirm = () => {
    this.closeModal()
    navigationService.navigate('curationUploadImage')
  }

  renderColors () {
    const colorData = ['#f12727', '#fd513e', '#ffa600', '#ffcf00', '#fff93b', '#daea3c', '#99d154', '#58bb5c', '#00a294', '#0086a2', '#62e3ec', '#00b3ff', '#2a72fd', '#4c5bc0', '#7243c1', '#a62dba', '#e53d79', '#f3799f', '#fff', '#000']
    return colorData.map((color) => {
      return (
        <TouchableOpacity
            key={color}
            style={[styles.colorPickStyle, {backgroundColor: color}, color === '#fff' ? {borderWidth: 1, borderColor: '#e2e3e6'} : null]}
            onPress={this.handleColor(color)}
          >
          {
            this.props.curationStore.color === color ?
            <Image
              source={checkImage}
            />
            :
            null
          }
        </TouchableOpacity>
      )
    })
  }

  render() {
    const colorData = ['#f12727', '#fd513e', '#ffa600', '#ffcf00', '#fff93b', '#daea3c', '#99d154', '#58bb5c', '#00a294', '#0086a2', '#62e3ec', '#00b3ff', '#2a72fd', '#4c5bc0', '#7243c1', '#a62dba', '#e53d79', '#f3799f', '#fff', '#000']
    const { color } = this.props.curationStore
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainerStyle}>
          <White180pxHeader text={"My스타의 팬덤컬러를\n골라주세요."} backArrow></White180pxHeader>
          <View style={styles.colorContainerStyle}>
            {this.renderColors()}
          </View>
          <TouchableOpacity style={styles.findColorButtonStyle} onPress={this.openModal}>
            <Image source={plusGrayImage} style={styles.findColorImageStyle}/>
          </TouchableOpacity>
        </View>
        <BottomButton onPress={() => navigationService.navigate('curationUploadImage')}>
          페이지 생성하기
        </BottomButton>
        <ColorPickerModal
            modalVisible={this.state.modalVisible}
            closeModalFn={this.closeModal}
            rightButtonFn={this.confirm}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
  },
  colorPickStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatListStyle: {
    alignSelf: 'center',
    borderWidth: 1,
  },
  bodyContainerStyle: {
    flex: 1,
  },
  colorContainerStyle: {
    flexWrap: 'wrap',
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  findColorButtonStyle: {
    height: 56,
    width: 56,
    alignSelf: 'center',
    marginTop: 40,
  },
  findColorImageStyle: {
    height: 56,
    width: 56,
  }
})
