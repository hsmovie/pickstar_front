import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import rankData from '../../rankData.json'

export default class CurationStore {
  @observable search = ''
  @observable selectedStars = []
  @observable stars = []
  @observable starType = ''
  @observable starGender = ''
  @observable starName = '워너원'
  @observable birthday = undefined
  @observable debutDate = undefined
  @observable color = '#ff0000'

  constructor () {
    setTimeout(() => {
      this.stars = rankData.rank
    }, 2000)
  }

  async saveCuration () {
    try {
      await AsyncStorage.setItem('@curationStore:search', this.search)
      await AsyncStorage.setItem('@curationStore:selectedStars', this.selectedStars)
      await AsyncStorage.setItem('@curationStore:stars', this.stars)
      await AsyncStorage.setItem('@curationStore:starType', this.starType)
      await AsyncStorage.setItem('@curationStore:starGender', this.starGender)
      await AsyncStorage.setItem('@curationStore:starName', this.starName)
    } catch (error) {
      console.log(error)
    }
  }

  @action setSearch = (search) => {
    this.search = search
    if (this.search === '') {
      this.stars = rankData.rank
    } else {
      this.stars = rankData.rank.filter((star) => {
        return star.name.indexOf(this.search) > -1
      })
    }
  }

  @action setStarType = (type) => this.starType = type
  @action setStarGender = (gender) => this.starGender = gender
  @action setStarName = (name) => this.starName = name
  @action setBirthday = (date) => this.birthday = date
  @action setDebutDate = (date) => this.debutDate = date
  @action setColor = (color) => this.color = color

  @action addSelectedStars (selectedStars) {
    this.selectedStars.push(selectedStars)
  }

  @action removeSelectedStars (selectedStars) {
    this.selectedStars = this.selectedStars.filter((star) => {
      return star.rank !== selectedStars.rank
    })
  }

  @action resetSelectedStarsAndSearch () {
    this.selectedStars = []
    this.search = ''
    this.stars = rankData.rank
  }

  @action async loadSearch () {
    try {
      this.search = await AsyncStorage.getItem('@curationStore:search')
      this.selectedStars = await AsyncStorage.getItem('@curationStore:selectedStars')
      this.stars = await AsyncStorage.getItem('@curationStore:stars')
      this.starType = await AsyncStorage.getItem('@curationStore:starType')
      this.starGender = await AsyncStorage.getItem('@curationStore:starGender')
      this.starName = await AsyncStorage.getItem('@curationStore:starName')
    } catch (error) {
      console.log(error)
    }
  }

  // @computed get accessSearch () {
  //   return this.search
  // }
}
