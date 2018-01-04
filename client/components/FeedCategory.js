import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'


class FeedCategory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text> FeedCategory</Text>
       <Text>  {JSON.stringify(this.props.posts)}</Text>
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
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    height: 300
  },
  btn: {
    marginBottom: 40
  },
  title: {
    textAlign: 'center'
  },
  img: {
    height: 200,
    width: 150
  }
});

const mapStateToProp = (state) => {
  console.log("state................", state)
  return {
    posts: state.postReducer.posts
  }
}


export default connect(mapStateToProp, null)(FeedCategory)