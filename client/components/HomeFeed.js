import React from 'react';
import { StyleSheet, Text, View, ListView, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchAllPostData } from '../actions/postAction'
import Navbar from './Navbar'

class HomeFeed extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }
  
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
     <Navbar  />
      </ScrollView>
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
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 20
  }
});

const mapStateToProp = (state) => {
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