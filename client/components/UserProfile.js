import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import NavbarProfile from './NavbarProfile'
import { fetchDataByAuthor } from '../actions/postAction'
import index from 'axios';

class UserProfile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('dataEmail').then((value) => {
      this.setState({
        email: value
      })
      this.props.fetchAuthor(this.state.email)
    })

  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.user}>
            <Image style={styles.image} source={require('../assets/profile.png')} />
            <Text style={styles.email}>
              {this.state.email}
            </Text>
          </View>
          <View style={styles.post}>
            <View style={styles.grid}>
              {
                this.props.posts.length >= 1 &&
                this.props.posts.map((post, index) => {
                  return (
                    <View key = {index}>
                      <Image
                        source={{ uri: post.images }}
                        style={styles.images}
                      />
                    </View>
                  )
                })
              }
            </View>
          </View>
          <View style={styles.navbar}>
            <NavbarProfile navigate={navigate} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const fullWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  navbar: {
    width: fullWidth
  },
  user: {
    alignItems: 'center',
    padding: 20
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  post: {
    width: fullWidth,
    borderTopWidth: 1,
    height: 320
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  images: {
    height: 70,
    width: 100,
    flexBasis: 150,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 20
  }
});



const mapStateToProp = (state) => {
  return {
    posts: state.postReducer.posts
  }
}

const mapActionToProp = (dispatch) => {
  return {
    fetchAuthor: (author) => dispatch(fetchDataByAuthor(author))
  }
}
export default connect(mapStateToProp, mapActionToProp)(UserProfile)