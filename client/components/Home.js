import React from 'react';
import { StyleSheet, Text, View, ListView, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Home...</Text>
        <Button title="+Add" onPress={() => navigate('Profile')}></Button>
      </View>
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
