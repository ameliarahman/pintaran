import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Button, AsyncStorage, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { fetchDataByCategory } from '../actions/postAction'
import Navbar from './Navbar'

class Home extends React.Component {

  componentWillMount() {
    this.getData()
  }

  async getData() {
    try {
      let dataStorage = await AsyncStorage.getItem('dataEmail')
      console.log(dataStorage, "Ini di async di Home....")
    } catch (error) {
      console.log(error)
    }
  }

  handleOnPress(category) {
    this.props.fetchData(category)
    this.props.navigation.navigate('FeedCategory')
  }
  render() {
    const { navigate } = this.props.navigation
    return (

      <View style={styles.container}>
        <View style={styles.boardRow} >
          <TouchableOpacity onPress={() => this.handleOnPress("technology")} >
            <Text style={styles.title}>
              Technology
            </Text>
            <Image style={styles.img} source={require('../assets/technology.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleOnPress("photography")}>
            <Text style={styles.title}>
              Photograph
            </Text>
            <Image style={styles.img} source={require('../assets/photograph.jpeg')} />
          </TouchableOpacity>
        </View>
        <View style={styles.boardRow}>
          <TouchableOpacity onPress={() => this.handleOnPress("sport")}>
            <Text style={styles.title}>
              Sport
            </Text>
            <Image style={styles.img} source={require('../assets/sport.jpeg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleOnPress("humor")}>
            <Text style={styles.title}>
              Humor
            </Text>
            <Image style={styles.img} source={require('../assets/humor.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Button color='#a80303' title="All Categories" onPress={() => navigate('HomeFeed')} />
        </View>
        <View style={styles.navbar}>
          <Navbar navigate= {navigate} />
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
    width: fullWidth
  },
  navbar: {
    width: fullWidth
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    height: 300,
  },
  btn: {
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  img: {
    height: 200,
    width: 150
  }
});


const mapStateToProp = (state) => {

  return {
    email: state.userReducer.email,
    token: state.userReducer.token
  }
}

const mapActionToProp = (dispatch) => {
  return {
    fetchData: (category) => dispatch(fetchDataByCategory(category))
  }
}

export default connect(mapStateToProp, mapActionToProp)(Home)