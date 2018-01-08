import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux'


class FeedCategory extends React.Component {

  getPost(post){
    this.props.navigation.navigate('FeedDetail', {post: post})
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.grid}>
      {
        this.props.posts.map((post, index) => {
          return (
              <TouchableOpacity style={styles.box} key={index} onPress={() => this.getPost(post)} >
                <Image
                  source={{ uri: post.images }}
                  style={styles.images}
                />
              </TouchableOpacity>
          )
        })
      }
    </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  box:{
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20
  },
  images : {
    height: 150,
    width: 150,
    flexBasis: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 5
  }
});

const mapStateToProp = (state) => {
  return {
    posts: state.postReducer.posts
  }
}


export default connect(mapStateToProp, null)(FeedCategory)