import React from 'react';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, Button } from 'react-native';

export default class Home extends React.Component {
  constructor(){
    super()
    
  }
  handleOnPress(){

  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.boardRow} >
          <TouchableOpacity>
            <Text style={styles.title}>
              Technology
            </Text>
            <Image style={styles.img} source={require('../assets/technology.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.title}>
              Photograph
            </Text>
            <Image style={styles.img} source={require('../assets/photograph.jpeg')} />
          </TouchableOpacity>
        </View>
        <View style={styles.boardRow}>
          <TouchableOpacity>
            <Text style={styles.title}>
              Sport
            </Text>
            <Image style={styles.img} source={require('../assets/sport.jpeg')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.title}>
              Humor
            </Text>
            <Image style={styles.img} source={require('../assets/humor.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Button title="Submit" onPress={() => navigate('HomeFeed')} />
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
  btn:{
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
