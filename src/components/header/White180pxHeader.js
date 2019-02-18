import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import backArrowImage from '../../assets/images/png/black_back_arrow.png'
import navigationService from '../../utils/navigationService'
import { ButtonWithFeedback } from '../common'

class White180pxHeader extends Component {
  ImageConditionalRender = () => {
    if (this.props.backArrow) {
      return (
        <ButtonWithFeedback
          onPress={() => navigationService.goBack()}
          style={styles.backArrowButtonStyle}
        >
          <Image
            source={backArrowImage}
            // style={styles.backArrowImageStyle}
          />
        </ButtonWithFeedback>
      )
    } else if (this.props.skip) {
      return (
        <ButtonWithFeedback
          onPress={this.navigate('mainRank')}
          style={styles.skipButtonStyle}
        >
          <Text style={styles.skipTextStyle}>Skip</Text>
        </ButtonWithFeedback>
      )
    }
  }

  navigate = (path) => () => {
    navigationService.navigate(path)
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        {this.ImageConditionalRender()}
        <Text style={styles.headerTextStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 180,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
  backArrowButtonStyle: {
    height: 24,
    width: 24,
    marginTop: 50,
    marginLeft: 20,
  },
  headerTextStyle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  skipButtonStyle: {
    marginTop: 50,
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  skipTextStyle: {
    fontSize: 12,
    color: '#98a3ab',
    padding: 5,
  }
});

export { White180pxHeader }
