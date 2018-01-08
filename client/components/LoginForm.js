import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { signInUser } from '../actions/userAction'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      err: ''
    }
  }
  
  getDataLogin() {
    if (this.state.email === '' || this.state.password==='') {
      this.setState({
        err: 'Please complete the form'
      })
    } else {
      this.props.signIn(this.state.email, this.state.password)
      this.storeData(this.state.email)
    }
  }

  async storeData(email){
    try {
      await AsyncStorage.setItem('dataEmail', email)
      this.props.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

 
  render() {
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding" >
      <Text style={styles.err}> {this.state.err}</Text>
        <TextInput style={styles.formLogin} placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
        <TextInput secureTextEntry style={styles.formLogin} placeholder="Password" onChangeText={(text) => this.setState({ password: text })} />
        <View style={styles.formInput}>
          <Button color="#a80303" title="Continue" onPress={() => this.getDataLogin()} />
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
  err:{
    color: 'red'
  },
  formLogin: {
    width: 340,
    height: 35
  },
  formInput: {
    width: 340,
    marginBottom: 25
  }
});


const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signInUser(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)