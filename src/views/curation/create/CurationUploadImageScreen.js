import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { BottomButton } from '../../../components/common'
import navigationService from '../../../utils/navigationService'

import { inject, observer } from 'mobx-react'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import pinkPlusImage from '../../../assets/images/png/pink_plus.png'

@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const { starName } = this.props.curationStore
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainerStyle}>
          <White180pxHeader text={starName + "의 페이지를\n만들었어요!"} skip></White180pxHeader>
          <Text style={styles.textStyle}>첫 프로필 사진을 직접 설정해주세요.</Text>
          <View style={styles.buttonContainerStyle}>
            <TouchableOpacity
            >
              <Image source={pinkPlusImage} />
            </TouchableOpacity>
          </View>
      </View>
      <BottomButton onPress={() => navigationService.navigate('mainRankStar')}>
        프로필 사진 설정하기
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
    color: '#98a3ab',
    marginLeft: 20,
  },
  inputButtonStyle: {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e2e3e6'
  },
  buttonContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
