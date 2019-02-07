import React from 'react'
import { Platform, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import RankScreen from './rank/RankScreen'
import NewsFeedScreen from './news-feed/NewsFeedScreen'
import MyScreen from './my/MyScreen'

import TabBarIcon from '../../components/TabBarIcon'
// import StarScreen from '../../screens/main/rank-stack/StarScreen'

const RankStack = createStackNavigator({
  Rank: RankScreen
})

RankStack.navigationOptions = {
  tabBarLabel: '스타랭킹',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../../assets/images/png/logo.png')}
    />
  ),
}

const NewsFeedStack = createStackNavigator({
  NewsFeed: NewsFeedScreen
})

NewsFeedStack.navigationOptions = {
  tabBarLabel: '새소식',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
  //   />
  // ),
}

const MyStack = createStackNavigator({
  My: MyScreen,
})

MyStack.navigationOptions = {
  tabBarLabel: 'My',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
}

const materialBottomTabNavigatorConfig = {
  initialRouteName: 'RankStack',
  activeTintColor: '#ff6791',
  inactiveTintColor: '#3e2465',
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