import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StarDetailHeader } from '../../../../components/header'
import { FeedItem } from '../../../../components/common'

export default class RankScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <StarDetailHeader>
          <FeedItem
            data={{
              writerImageUrl: 'https://fimg4.pann.com/new/download.jsp?FileID=38125487',
              writerName: 'testName',
              level: 7,
              createdAt: '2019-11-02 19:20:42',
              imageUrl: 'https://img.huffingtonpost.com/asset/5c4037d22600001701faeb1e.jpeg?cache=9HwWd59uTl&ops=scalefit_630_noupscale',
              likeCount: 30,
              commentCount: 14,
              hashTags: [
                '181104',
                '워너원',
                '공항패션',
                '프리뷰',
              ],
            }}
          >
          </FeedItem>
          <FeedItem
            data={{
              writerImageUrl: 'https://fimg4.pann.com/new/download.jsp?FileID=38125487',
              writerName: 'testName',
              level: 7,
              createdAt: '2019-11-02 19:20:42',
              imageUrl: 'https://img.huffingtonpost.com/asset/5c4037d22600001701faeb1e.jpeg?cache=9HwWd59uTl&ops=scalefit_630_noupscale',
              likeCount: 30,
              commentCount: 14,
              hashTags: [
                '181104',
                '워너원',
                '공항패션',
                '프리뷰',
              ],
            }}
          >
          </FeedItem>
          {/* <FeedItem>
          </FeedItem>
          <FeedItem>
          </FeedItem> */}
        </StarDetailHeader>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
