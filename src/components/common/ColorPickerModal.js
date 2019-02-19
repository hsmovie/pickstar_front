import React, { Component } from 'react'
import { View, Text, Modal } from 'react-native'
import { width, height } from '../../utils/layout'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import { ButtonWithoutFeedback } from './ButtonWithoutFeedback'
import { inject, observer } from 'mobx-react'

@inject("curationStore")
@observer
class ColorPickerModal extends Component {
  setColor = (color) => {
    const { setColor } = this.props.curationStore
    setColor(fromHsv({h: color.h, s: color.s, v: color.v}))
  }
  render() {
    const {
      modalVisible,
      leftButtonFn,
      rightButtonFn,
      closeModalFn,
    } = this.props

    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={styles.containerStyle}>
          <ColorPicker
            onColorSelected={color => alert(`Color selected: ${color}`)}
            onColorChange={color => this.setColor(color)}
            defaultColor={this.props.curationStore.color}
            style={styles.colorPickerStyle}
          />
          <View style={styles.buttonsContainer}>
            <ButtonWithoutFeedback
              onPress={closeModalFn}
              viewStyle={[styles.buttonStyle, {marginRight: 10}]}
              textStyle={{color: '#b5bec6'}}
            >
              Cancel
            </ButtonWithoutFeedback>
            <ButtonWithoutFeedback
              onPress={rightButtonFn}
              viewStyle={[styles.buttonStyle]}
              textStyle={{color: '#fe5167'}}
            >
              Ok
            </ButtonWithoutFeedback>
          </View>
          <ButtonWithoutFeedback
            viewStyle={styles.backgroundStyle}
            onPress={closeModalFn}
          />
        </View>
      </Modal>
    )
  }
}
const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  buttonsContainer: {
    zIndex: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 300,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    height: 50,
    width: 80,
  },
  backgroundStyle: {
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'stretch',
  },
  colorPickerStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 300,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    zIndex: 3,
  }
}

export { ColorPickerModal }
