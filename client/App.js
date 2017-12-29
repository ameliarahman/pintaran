import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator
} from 'react-navigation'
import store from './store'
import { Provider } from 'react-redux'
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import HomeFeed from './components/HomeFeed';

const NavigationBase = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  HomeFeed: { screen: HomeFeed },
  Profile: { screen: Profile }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationBase />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
