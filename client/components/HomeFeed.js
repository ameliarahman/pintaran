import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Button } from 'react-native';

export default class HomeFeed extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Ini HomeFeed</Text>
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
  }
});
