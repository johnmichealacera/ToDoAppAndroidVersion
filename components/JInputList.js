import React from 'react'
import { Button, TextInput, View, StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

const JInputList = (props) => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder="What do we want to do?"/>
    <Button title={props.myText} style={{flex: 1}}/>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    // flexGrow: 0,
    // flexShrink: 1,
    flexDirection: 'row',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    flex: 5
  }
});
export default JInputList;