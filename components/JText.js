import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

const JText = (props) => (
  <View style={styles.container}>
    <Text>{props.myText}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default JText;