import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
       <TextInput style={styles.formLogin} placeholder="Email" />
       <TextInput secureTextEntry style={styles.formLogin} placeholder="Password" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
    padding: 35
  },
  formLogin: {
    width: 340,
    height: 35
  }
});
