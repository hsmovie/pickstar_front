import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';

export default class AuthStore {
  @observable accessToken = 'test'

  async saveAuth () {
    try {
      await AsyncStorage.setItem('@authStore:accessToken', this.accessToken)
    } catch (error) {
      console.log(error)
    }
  }

  @action setAccessToken (accessToken) {
    this.accessToken = accessToken
  }

  @action async loadAccessToken () {
    try {
      await AsyncStorage.getItem('@authStore:accessToken')
    } catch (error) {
      console.log(error)
    }
  }

  @computed get accessTokenExist () {
    return this.accessToken
  }
}