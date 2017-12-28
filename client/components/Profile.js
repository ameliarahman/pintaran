import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default class Profile extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Form Upload Images</Text>
        <View style={{flexDirection: 'row'}} >
          <TextInput style={styles.input} placeholder="  URL Images . . . "/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input} placeholder="  File Images . . .  "/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input} placeholder="  Description . . . "/>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
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
});
