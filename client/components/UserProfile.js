import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'

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
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Button title="+" onPress={() => navigate('Profile')}></Button>
        </View>
        <View style={styles.user}>
          <Image style={styles.image} source={require('../assets/profile.png')} />
          <Text style={styles.email}>
            {this.state.email}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
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

  }
});



const mapStateToProp = (state) => {
  return {

  }
}

const mapActionToProp = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProp, mapActionToProp)(UserProfile)