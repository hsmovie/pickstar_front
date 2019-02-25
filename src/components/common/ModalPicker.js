import React, { Component } from 'react'
import { View, Text, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { width, height } from '../../utils/layout'
import { ButtonWithoutFeedback } from '../common'

class ModalPicker extends Component {
  renderItem = (data) => {
    const sampleData = [
      '여자',
      '남자',
    ]
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, data.index === sampleData.length - 1 ? {borderBottomWidth: 1} : {}]}
        onPress={() => this.props.selectedValue(data.item)}
      >
        <Text>{ data.item }</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const {
      modalVisible,
      closeModalFn,
      
    } = this.props
    const sampleData = [
      '여자',
      '남자',
    ]
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
          <View style={styles.pickerContainerStyle}>
            <FlatList
              data={sampleData}
              renderItem={this.renderItem}
              keyExtractor={(dataRow) => dataRow.toString()}
              // numColumns={3}
              // style={{zIndex: 3,}}
              contentContainerStyle={styles.flatListStyle}
            />
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  pickerContainerStyle: {
    zIndex: 3,
    width: 300,
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  flatListStyle: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  backgroundStyle: {
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'stretch',
  },
  buttonStyle: {
    height: 50,
    borderTopWidth: 1,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export { ModalPicker }