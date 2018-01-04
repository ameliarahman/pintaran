import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { connect } from 'react-redux'
import { signInUser } from '../actions/userAction'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount() {

  }
  getDataLogin() {
    if (this.state.email === '' && this.state.password==='') {
      this.props.navigate('Login')
    } else {
      this.props.signIn(this.state.email, this.state.password)
      this.props.navigate('Home')
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
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
  formLogin: {
    width: 340,
    height: 35
  },
  formInput: {
    width: 340,
    marginBottom: 25
  }
});

const mapStateToProp = (state) => {
  return {
    email: state.userReducer.email,
    password: state.userReducer.password,
    isLoggedIn: state.userReducer.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signInUser(email, password))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(LoginForm)