import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import moreImage from '../../../../assets/images/png/more.png'

export default class RankScreen extends Component {
  static navigationOptions = {
    header: null,
  }

    // writerImageUrl
    // witerName
    // Level
    // createdAt
    // imageUrl
    // likeCount
    // commentCount
    // hashTags
    // Comments
  render() {
    console.log(this.props.data.writerImageUrl)
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Image
            source={{
              uri: this.props.data.writerImageUrl,
            }}
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderWidth: 1,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ fontSize: 14, marginBottom: 5, }}>{ this.props.data.writerName }</Text>
            <Text style={{ fontSize: 10, }}>{ `Lv.${this.props.data.level} | 1시간 전` }</Text>
          </View>
          <TouchableOpacity style={{ position: 'absolute', right: 20,}}>
            <Image source={moreImage}></Image>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: this.props.data.imageUrl,
          }}
          style={{ height: 350, alignSelf: 'stretch'}}
        />
        <View style={{ flexDirection: 'row', borderWidth: 1, height: 50, alignSelf: 'stretch' }}>

        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // height: 380,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
  },
  headerStyle: {
    height: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  }
})
