import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { BottomButton, Input } from '../../../components/common'
import { DatePickerModal, } from '../../../components/modal'
import navigationService from '../../../utils/navigationService'

import { inject, observer } from 'mobx-react'
import { Calendar, LocaleConfig } from 'react-native-calendars'

@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    modalVisible: false,
    type: ''
  }

  closeConfirmModal = () => {
    this.setState({modalVisible: false})
  }

  openModal = (type) => () => {
    this.setState({modalVisible: true, type})
  }

  handleDateValue = (obj) => () => {
    this.closeConfirmModal()
    const { setBirthday, setDebutDate } = this.props.curationStore
    if (obj.type === 'birthday') {
      setBirthday(obj.date)
    } else {
      setDebutDate(obj.date)
    }
  }

  render() {
    const { birthday, debutDate } = this.props.curationStore
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainerStyle}>
          <White180pxHeader text={"My스타의 페이지를\n만들어주세요!"} backArrow></White180pxHeader>
          <TouchableOpacity
            style={styles.inputButtonStyle}
            onPress={this.openModal('birthday')}
          >
            <Text style={styles.textStyle}>
              {birthday ? birthday : '생일'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.inputButtonStyle, {marginTop: 20}]}
            onPress={this.openModal('debutDate')}
          >
            <Text style={styles.textStyle}>
              { debutDate ? debutDate : '데뷔일' }
            </Text>
          </TouchableOpacity>

          <DatePickerModal
            modalVisible={this.state.modalVisible}
            closeModalFn={this.closeConfirmModal}
            rightButtonFn={this.handleDateValue}
            type={this.state.type}
          />
        </View>
        <BottomButton onPress={() => navigationService.navigate('curationColorPick')}>
          다음
        </BottomButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  bodyContainerStyle: {
    flex: 1,
  },
  textStyle: {
    padding: 15,
    color: '#98a3ab',
  },
  inputButtonStyle: {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e2e3e6'
  }
});
