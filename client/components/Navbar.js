import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, TextInput } from 'react-native';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class Navbar extends React.Component {
  render() {
    return (
      <NavBar>
        <NavButton onPress={() => this.props.navigate('Home')}>
          <Image style={styles.image} source={require('../assets/pinterest.png')} />
        </NavButton>
        <NavButton onPress={() => alert('Searching')}>
          <Image style={styles.image} source={require('../assets/search.png')} />
        </NavButton>
        <NavButton onPress={() => alert('Notification')}>
          <Image style={styles.image} source={require('../assets/chat-icon.png')} />
        </NavButton>
        <NavButton onPress={() => this.props.navigate('UserProfile')}>
          <Image style={styles.image} source={require('../assets/profile.png')} />
        </NavButton>
      </NavBar>
    );
  }
}
const fullWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  input: {
    borderRadius: 3,
    height: 30,
    width: 150
  },
  image: {
    height: 25,
    width: 25
  }
});
