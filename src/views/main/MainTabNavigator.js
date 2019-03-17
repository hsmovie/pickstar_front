import React from 'react'
import { Platform, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import MainRankScreen from './rank/MainRankScreen'
import MainRankStarScreen from './rank/star/MainRankStarScreen'
import NewsFeedScreen from './news-feed/MainNewsFeedScreen'
import MyScreen from './my/MainMyScreen'

import rank_tab from '../../assets/images/png/rank_tab.png'
import rank_tab_pink from '../../assets/images/png/rank_tab_pink.png'
import feed_tab from '../../assets/images/png/feed_tab.png'
import feed_tab_pink from '../../assets/images/png/feed_tab_pink.png'
import my_tab from '../../assets/images/png/my_tab.png'
import my_tab_pink from '../../assets/images/png/my_tab_pink.png'
// import StarScreen from '../../screens/main/rank-stack/StarScreen'

const RankStack = createStackNavigator({
  mainRankStar: MainRankStarScreen,
  mainRank: MainRankScreen,
})
// #9b9b9b
RankStack.navigationOptions = {
  tabBarLabel: '스타랭킹',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? rank_tab_pink : rank_tab}
      style={{ width: 24, height: 24 }}
    />
  ),
}

const NewsFeedStack = createStackNavigator({
  NewsFeed: NewsFeedScreen
})

NewsFeedStack.navigationOptions = {
  tabBarLabel: '새소식',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? feed_tab_pink : feed_tab}
    />
  ),
}

const MyStack = createStackNavigator({
  My: MyScreen,
})

MyStack.navigationOptions = {
  tabBarLabel: 'My',
  tabBarIcon: ({ focused }) => (
    <Image
      source={focused ? my_tab_pink : my_tab}
    />
  ),
}

const materialBottomTabNavigatorConfig = {
  initialRouteName: 'RankStack',
  activeTintColor: '#ff6791',
  inactiveTintColor: '#9b9b9b',
  barStyle: {
    backgroundColor: '#fff',
    height: 60,
  },
}

export default createMaterialBottomTabNavigator({
  RankStack,
  NewsFeedStack,
  MyStack,
}, materialBottomTabNavigatorConfig)
