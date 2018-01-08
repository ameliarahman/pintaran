import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

class FeedDetail extends React.Component {

  render() {
    const { state } = this.props.navigation
    return (
      <View style={styles.container}>
       <Text style={styles.title}>
          {state.params.post.category}
        </Text>
        <View style={styles.box}>
          <Image source={{ uri: state.params.post.images }} style={styles.image} />
        </View>
        <Text style={styles.desc}>
          {state.params.post.description}
        </Text>
        
        <Text>
          Posted By:  {state.params.post.author}
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
    paddingTop: 70
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 30
  },
  box: {
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc:{
    fontSize: 15
  }
});



export default FeedDetail