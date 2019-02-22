import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native'
import { White180pxHeader } from '../../../components/header'
import { Input, BottomButton } from '../../../components/common'
import StarItem from './StarItem'
import CreateStar from './CreateStar'
import ProgressCircle from 'react-native-progress/Circle'
import { inject, observer } from 'mobx-react'
import navigationService from '../../../utils/navigationService'


@inject("curationStore")
@observer
export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    isVisible: false,
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        isVisible: true,
      });
    });
  }

  renderItem (rankData) {
    return <StarItem rankData={rankData} />
  }

  renderList() {
    const { flatListStyle } = styles
    const allRankData = this.props.curationStore.stars.slice()
    if (allRankData.length === 0) {
      if (this.props.curationStore.search.length === 0) {
        if (!this.state.isVisible) return null
        return (
          <View style={styles.progressCircleStyle}>
            <ProgressCircle
                size={40}
                progress={0.5}
                unfilledColor="#fff"
                color="#ff457f"
                thickness={2}
                borderWidth={0}
                indeterminate
            />
          </View>
        )
      } else {
        return (
          <View style={styles.progressCircleStyle}>
            <CreateStar />
          </View>
        )
      }
    } else {
      return (
        <FlatList
          data={allRankData}
          renderItem={this.renderItem}
          keyExtractor={(allRankData) => allRankData.rank.toString()}
          numColumns={3}
          style={flatListStyle}
        />
      )
    }
  }

  render() {
    const { search, setSearch, selectedStars } = this.props.curationStore
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView
          style={styles.bodyContainerStyle}
          onContentSizeChange={(width, height) => {
            console.log(width, height)
          }}
        >
          <White180pxHeader text={"응원할 스타를\n선택해주세요"} skip></White180pxHeader>
          <Input
            style={styles.inputStyle}
            value={search}
            onChangeText={setSearch}
          />
          {this.renderList()}
        </ScrollView>
        <BottomButton
            onPress={() => navigationService.navigate('mainRank')}
            disabled={selectedStars.length === 0}
          >{ selectedStars.length }명 선택완료</BottomButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backArrowimageStyle: {
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
  inputStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: 25,
  },
  flatListStyle: {
    // borderWidth: 2,
  },
  progressCircleStyle: {
    minHeight: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
  }
})
