import React, {Component} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { Input, BottomButton, ButtonWithImageAndText } from '../../../components/common'
import navigationService from '../../../utils/navigationService'

import personActiveImage from '../../../assets/images/png/person_people_active.png'
import personInactiveImage from '../../../assets/images/png/person_people_inactive.png'
import femaleActiveImage from '../../../assets/images/png/female_people_active.png'
import femaleInactiveImage from '../../../assets/images/png/female_people_inactive.png'
import groupActiveImage from '../../../assets/images/png/group_people_active.png'
import groupInactiveImage from '../../../assets/images/png/group_people_inactive.png'
import mixedActiveImage from '../../../assets/images/png/mixed_people_active.png'
import mixedInactiveImage from '../../../assets/images/png/mixed_people_inactive.png'

import { inject, observer } from 'mobx-react'

@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  handleStarType = (value) => () => {
    const { setStarType, starType } = this.props.curationStore
    setStarType(value)
  }

  handleStarGender = (gender) => () => {
    const { setStarGender, starGender } = this.props.curationStore
    setStarGender(gender)
  }

  render() {
    const { starType, starGender, starName, setStarName } = this.props.curationStore
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView style={styles.bodyContainerStyle}>
          <White180pxHeader text={"My스타의 페이지를\n만들어주세요!"} backArrow></White180pxHeader>
          <Text style={[styles.textStyle, {marginTop: 0}]}>유형 *</Text>
          <View style={styles.buttonsContainer}>
            <ButtonWithImageAndText
              text="개인"
              onPress={this.handleStarType('person')}
            >
              <Image source={starType === 'person' ? personActiveImage : personInactiveImage} />
            </ButtonWithImageAndText>
            <ButtonWithImageAndText
              text="그룹"
              onPress={this.handleStarType('group')}
            >
              <Image source={starType === 'group' ? groupActiveImage : groupInactiveImage} />
            </ButtonWithImageAndText>
          </View>

          <Text style={styles.textStyle}>성별 *</Text>
          <View style={styles.buttonsContainer}>
            <ButtonWithImageAndText
              text="남돌"
              onPress={this.handleStarGender('male')}
            >
              <Image source={starGender === 'male' ? personActiveImage : personInactiveImage} />
            </ButtonWithImageAndText>
            <ButtonWithImageAndText
              text="여돌"
              onPress={this.handleStarGender('female')}
            >
              <Image source={starGender === 'female' ? femaleActiveImage : femaleInactiveImage} />
            </ButtonWithImageAndText>
            <ButtonWithImageAndText
              text="혼성"
              onPress={this.handleStarGender('mixed')}
            >
              <Image source={starGender === 'mixed' ? mixedActiveImage : mixedInactiveImage} />
            </ButtonWithImageAndText>
          </View>
          <Text style={styles.textStyle}>이름 *</Text>
          <Input
            style={styles.inputStyle}
            noIcon
            value={starName}
            onChangeText={setStarName}
          />
        </ScrollView>
        <BottomButton onPress={() => navigationService.navigate('curationDatePick')}>
          다음
        </BottomButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
    color: '#4a4a4a',
  },
  inputStyle: {
    marginTop: 12,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  bodyContainerStyle: {
    flex: 1,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginRight: 14,
    marginLeft: 14,
  }
});
