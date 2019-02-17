import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { MainGradationHeader } from '../../../components/header/MainGradationHeader';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MainNewsFeedScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <View >
          <MainGradationHeader/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
