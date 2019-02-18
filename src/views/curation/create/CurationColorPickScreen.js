import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { BottomButton } from '../../../components/common'
import { width } from '../../../utils/layout'
import { inject, observer } from 'mobx-react'

@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  handleColor = (color) => () => {
    console.log(color)
  }

  render() {
    const colorData = ['#f12727', '#fd513e', '#ffa600', '#ffcf00', '#fff93b', '#daea3c', '#99d154', '#58bb5c', '#00a294', '#0086a2', '#62e3ec', '#00b3ff', '#2a72fd', '#4c5bc0', '#7243c1', '#a62dba', '#e53d79', '#f3799f', '#fff', '#000']
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainerStyle}>
          <White180pxHeader text={"My스타의 팬덤컬러를\n골라주세요."} backArrow></White180pxHeader>
          <FlatList
            data={colorData}
            renderItem={(color) => {
              return (
                <TouchableOpacity
                  style={[styles.colorPickStyle, {backgroundColor: color.item}, color.item === '#fff' ? {borderWidth: 1, borderColor: '#e2e3e6'} : null]}
                  onPress={this.handleColor(color.item)}
                >
                </TouchableOpacity>
              )
            }}
            keyExtractor={(color) => color.toString()}
            numColumns={5}
            style={styles.flatListStyle}
            // contentContainerStyle={styles.flatContainerStyle}
          />
        </View>
        <BottomButton>
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
  colorPickStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    margin: 5,
  },
  flatListStyle: {
    alignSelf: 'center',
  },
  bodyContainerStyle: {
    flex: 1,
  }
});
