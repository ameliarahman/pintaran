import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, AsyncStorage, ScrollView, Dimensions, KeyboardAvoidingView, TextInput } from 'react-native';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class NavbarProfile extends React.Component {
  
  async logOut() {
    await AsyncStorage.removeItem('dataEmail')
    this.props.navigate('Login')
  }
  render() {
    return (
      <NavBar>
        <NavButton onPress={() => this.props.navigate('Profile')}>
          <Text>
            +
          </Text>
        </NavButton>
        <NavButton onPress={() => this.logOut()}>
          <Text>
            Logout
          </Text>
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
