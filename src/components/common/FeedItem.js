import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { Input } from '../../components/common'
import moreImage from '../../assets/images/png/more.png'
import commentImage from '../../assets/images/png/comment.png'
import likeImage from '../../assets/images/png/like.png'
import shareImage from '../../assets/images/png/share.png'

class FeedItem extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    comment: ''
  }

  renderHashTags () {
    return this.props.data.hashTags.map((item, index) => {
      return (
      <TouchableOpacity key={index} style={{ marginLeft: 5, }}>
        <Text>#{ item }</Text>
      </TouchableOpacity>
      )
    })
  }

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
        <View style={[styles.rowContainer, {marginTop: 10,}]}>
          <TouchableOpacity
            style={{ height: 24, width: 24, }}
          >
            <Image
              source={likeImage}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>{ this.props.data.likeCount }</Text>
          <TouchableOpacity
            style={{ height: 24, width: 24, marginLeft: 10, }}
          >
            <Image
              source={commentImage}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 6, fontSize: 12 }}>{ this.props.data.commentCount }</Text>
          <TouchableOpacity
            style={{
              height: 24,
              width: 24,
              position: 'absolute',
              right: 20,
            }}
          >
            <Image
              source={shareImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ width: 250, flexDirection: 'row', overflow: 'hidden',}}>
            { this.renderHashTags() }
          </View>
          <TouchableOpacity style={{ marginLeft: 10, }}>
            <Text style={{ color: '#98a3ab', fontSize: 14, }}>더보기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Text style={{ color: '#98a3ab', fontSize: 12, }}>댓글 { this.props.data.commentCount }개 전체 보기</Text>
          </TouchableOpacity>
        </View>
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
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    height: 40,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20 
  },
  headerStyle: {
    height: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputStyle: {
    alignSelf: 'stretch',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  }
})

export { FeedItem }
