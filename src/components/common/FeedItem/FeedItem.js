import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { Input } from '..'

import FeedItemHeader from './FeedItemHeader'
import FeedItemStatus from './FeedItemStatus'
import FeedItemHashTags from './FeedItemHashTags'
import FeedComments from './FeedComments'

class FeedItem extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    comment: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <FeedItemHeader
          writerImageUrl={this.props.data.writerImageUrl}
          writerName={this.props.data.writerName}
          level={this.props.data.level}
        />

        <Image
          source={{
            uri: this.props.data.imageUrl,
          }}
          style={{ height: 350, alignSelf: 'stretch'}}
        />

        <FeedItemStatus
          likeCount={this.props.data.likeCount}
          commentCount={this.props.data.commentCount}
        />

        <FeedItemHashTags hashTags={this.props.data.hashTags} />
        <FeedComments commentCount={this.props.data.commentCount} />
        <Input
          style={styles.inputStyle}
          noIcon
          writerImageUrl={this.props.data.writerImageUrl}
          placeholder="내 스타를 응원하는 댓글을 달아주세요!!"
          value={this.state.comment}
          onChangeText={(e) => this.setState({comment: e})}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // height: 380,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputStyle: {
    height: 60,
    alignSelf: 'stretch',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  }
})

export { FeedItem }
