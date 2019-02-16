import {observable, computed, action, toJS} from 'mobx';
import { AsyncStorage } from 'react-native';
import rankData from '../../rankData.json'

export default class CurationStore {
  @observable search = ''
  @observable selectedStars = []
  @observable stars = []

  constructor () {
    setTimeout(() => {
      this.stars = rankData.rank
    }, 2000)
  }

  async saveCuration () {
    try {
      await AsyncStorage.setItem('@curationStore:search', this.search)
      await AsyncStorage.setItem('@curationStore:selectedStars', this.selectedStars)
    } catch (error) {
      console.log(error)
    }
  }

  @action setSearch = (search) => {
    this.search = search
  }

  @action addSelectedStars (selectedStars) {
    this.selectedStars.push(selectedStars)
  }

  @action removeSelectedStars (selectedStars) {
    this.selectedStars = this.selectedStars.filter((star) => {
      return star.rank !== selectedStars.rank
    })
  }

  @action async loadSearch () {
    try {
      this.search = await AsyncStorage.getItem('@curationStore:search')
      this.selectedStars = await AsyncStorage.getItem('@curationStore:selectedStars')
    } catch (error) {
      console.log(error)
    }
  }

  @computed get accessSearch () {
    return this.search
  }
}
