import React, { Component } from 'react'
import { View, Text, Modal, Dimensions } from 'react-native'
import { width, height } from '../../utils/layout'
import { ButtonWithoutFeedback } from './ButtonWithoutFeedback'

class ConfirmModal extends Component {
  render() {
    const {
      modalVisible,
      leftButtonText,
      rightButtonText,
      leftButtonFn,
      rightButtonFn,
      closeModalFn,
      title,
      des,
    } = this.props

    const {
      containerStyle,
      titleTextBoxStyle,
      buttonStyle,
      buttonBoxStyle,
      backgroundStyle,
      buttonTextStyle,
      titleTextStyle,
      desTextStyle,
    } = styles

    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={containerStyle}>
          <View style={titleTextBoxStyle}>
            <Text style={titleTextStyle}>{title}</Text>
            <Text style={desTextStyle}>{des}</Text>
          </View>
          <View style={buttonBoxStyle}>
            <ButtonWithoutFeedback
              onPress={() => leftButtonFn()}
              viewStyle={{ ...buttonStyle, borderRightWidth: 1 }}
              textStyle={buttonTextStyle}
            >
              {leftButtonText}
            </ButtonWithoutFeedback>
            <ButtonWithoutFeedback
              onPress={() => rightButtonFn()}
              viewStyle={{ ...buttonStyle, borderLeftWidth: 1 }}
              textStyle={{ ...buttonTextStyle, color: '#fd5293' }}
            >
              {rightButtonText}
            </ButtonWithoutFeedback>
          </View>
        </View>

        <ButtonWithoutFeedback
          viewStyle={backgroundStyle}
          onPress={() => closeModalFn()}
        />
      </Modal>
    )
  }
}
const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: (height - 215) / 2,
    height: 215,
    width: 290,
    borderRadius: 8,
  },
  titleTextBoxStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 17,
    marginBottom: 18,
    color: '#000',
  },
  desTextStyle: {
    fontSize: 13,
    color: '#9b9b9b',
    width: 240,
    textAlign: 'center',
  },
  buttonBoxStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
    height: 50,
    borderTopWidth: 2,
    borderColor: '#e2e3e6',
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    zIndex: -1,
    position: 'absolute',
    height: height,
    width: width,
  },
  buttonTextStyle: {
    fontSize: 17,
    color: '#9b9b9b',
  },
}

export { ConfirmModal }
