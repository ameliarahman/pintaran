import React from 'react';
import { StyleSheet, Text, View, ListView, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchAllPostData } from '../actions/postAction'

class HomeFeed extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>
        Data
        </Text>
        <Text>
          {JSON.stringify(this.props.posts)}
        </Text>
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

const mapStateToProp = (state) => {
  console.log("ini data di state....",state)
  return {
    posts : state.postReducer.posts
  }
}

const mapActionToProp = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchAllPostData())
  }
}
export default connect(mapStateToProp, mapActionToProp)(HomeFeed)