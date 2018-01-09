import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchDataByCategory } from '../actions/postAction'

class Home extends React.Component {

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
          <Button title="All Data" onPress={() => navigate('HomeFeed')} />
        </View>

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



const mapActionToProp = (dispatch) => {
  return {
    fetchData: (category) => dispatch(fetchDataByCategory(category))
  }
}

export default connect(null, mapActionToProp)(Home)
