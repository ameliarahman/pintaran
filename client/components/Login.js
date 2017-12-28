import React from 'react';
import { StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native';

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Selamat Datang di Pintaran
      </Text>
        <Image style={styles.image} source={require('../assets/pinterest.png')} />
        <View style={styles.fb}>
          <Button title="Continue with Facebook" onPress={() => navigate('Home')} />
        </View>
      </View>
    );
  }
}
const fullWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  },
  image: {
    height: 200,
    width: 200
  },
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  fb:{
    marginTop: 150,
    width: 300
  }
});
