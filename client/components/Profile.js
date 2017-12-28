import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, CameraRoll, Button, Image } from 'react-native';
import axios from 'axios'

export default class Profile extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      photos: [],
      description: '',
      category: ''
    }
  }

  _handleButtonPress () {
     CameraRoll.getPhotos({
         first: 20,
         assetType: 'All',
       })
       .then(r => {
         this.setState({ photos: r.edges });
       })
       .catch((err) => {
       });
     };

  postPhoto (photos) {
    console.log('ini photo', photos.node.image)
    this.setState({
      photos: photos.node.image.filename
    })
  }

  postAll () {
    console.log(this.state.description + "------------" + this.state.photos + '+++++++++++' + this.state.category);
    axios.post('http://localhost:3000/pintaran', {
      images: this.state.photos,
      description : this.state.description,
      category : this.state.category
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  render() {
    return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text>Form Upload Images</Text>

      <View style={{flexDirection: 'row'}}>
        <Button style={styles.button} title="Upload Foto" onPress={() => this._handleButtonPress()}></Button>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TextInput onChangeText={(text) => this.setState({description: text})} style={styles.input} placeholder="  Description . . . "/>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TextInput onChangeText={(text) => this.setState({category: text})} style={styles.input} placeholder="  Category . . . "/>
      </View>

      <TouchableOpacity>
        <Text style={styles.button} onPress={() => this.postAll()}>Submit</Text>
      </TouchableOpacity>

      </View>

      <View>
      <Text> Your Gallery Phone : </Text>
            {
              this.state.photos.length > 1 &&
              this.state.photos.map((d,i) => {
                return (
                  <TouchableOpacity onPress={() => this.postPhoto(d)} >

                    <Image
                    key={i}
                    style={styles.image}
                    source={{ uri: d.node.image.uri }}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 200,
    margin: 5
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:5,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'green',
    textAlign:'center',
    width: 200,
    borderRadius: 5
  },
  image: {
    flexDirection: 'row',
    height: 100,
    width: 100
  }
});
