import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView >
        <View style={styles.container} behavior="padding">
          <Image style={styles.image} source={require('../assets/pinterest.png')} />
          <Text style={styles.title}>
            Selamat Datang di Pintaran
      </Text>

          <LoginForm navigate={navigate} />
          <View style={styles.fb}>
            <Button title="Continue with Facebook" onPress={() => alert('Facebook Login')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  },
  image: {
    height: 170,
    width: 170
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  fb: {
    width: 340,
    marginBottom: 25
  }
});
