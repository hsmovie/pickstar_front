import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';

export default class StarDetailStore {
  @observable genderFilter = '남자'
  @observable feedFilter = true

  @action setGenderFilter (genderFilter) {
    this.genderFilter = genderFilter
  }

  @action setFeedFilter (feedFilter) {
    this.feedFilter = feedFilter
  }
}
