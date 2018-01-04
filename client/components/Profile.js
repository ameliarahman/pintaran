import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, CameraRoll, Button, Image } from 'react-native';
import axios from 'axios'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      description: '',
      category: ''
    }
  }

  _handleButtonPress() {
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

  postPhoto(photos) {
    this.setState({
      photos: photos
    })
  }

  postAll() {
    console.log(this.state.photos.node.image)
    console.log(this.state.description + "------------" + this.state.photos + '+++++++++++' + this.state.category);
    var foto = {
        uri: this.state.photos.node.image.uri,
        type: this.state.photos.node.type,
        name: Math.random() + `images`
    }
    const data = new FormData()
    data.append('description', this.state.description)
    data.append('category', this.state.category)
    data.append('images', foto)

    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    };

    axios.post('http://192.168.1.101:3000/pintaran', data, config)
      .then(data => {
        console.log("masuk data kah....", data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text>Form Upload Images</Text>

          <View style={{ flexDirection: 'row' }}>
            <Button style={styles.button} title="Upload Foto" onPress={() => this._handleButtonPress()}></Button>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TextInput onChangeText={(text) => this.setState({ description: text })} style={styles.input} placeholder="  Description . . . " />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TextInput onChangeText={(text) => this.setState({ category: text })} style={styles.input} placeholder="  Category . . . " />
          </View>

          <TouchableOpacity>
            <Text style={styles.button} onPress={() => this.postAll()}>Submit</Text>
          </TouchableOpacity>

        </View>

        <View>
          <Text> Your Gallery Phone : </Text>
          {
            this.state.photos.length > 1 &&
            this.state.photos.map((d, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => this.postPhoto(d)} >

                  <Image

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
    marginRight: 40,
    marginLeft: 40,
    marginTop: 5,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    width: 200,
    borderRadius: 5
  },
  image: {
    flexDirection: 'row',
    height: 100,
    width: 100
  }
});
