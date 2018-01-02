import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button } from 'react-native';

export default class LoginForm extends React.Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }
  getDataLogin(){
    console.log(this.state)
    this.props.navigate('Home')
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
       <TextInput style={styles.formLogin} placeholder="Email" onChangeText={(text)=>this.setState({email: text})} />
       <TextInput secureTextEntry style={styles.formLogin} placeholder="Password" onChangeText={(text)=>this.setState({password: text})} />
       <View style={styles.formInput}>
       <Button color="#a80303" title="Continue" onPress={()=> this.getDataLogin()} />
       </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  },
  formLogin: {
    width: 340,
    height: 35
  },
  formInput:{
    width: 340,
    marginBottom: 25
  }
});
