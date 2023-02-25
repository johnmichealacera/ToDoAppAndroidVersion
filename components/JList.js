import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button } from 'react-native';
const {width} = Dimensions.get('window');

const INCREMENT = 1;
   
class JList extends Component {
   constructor(props){
      super(props);
      this.state={
         myText: props.myText,
         counter: 0,
         numOfInput: [0],
         names: [],
         newTask: '',
      };
      this.addInput = this.addInput.bind(this);
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   addInput(){
      if (this.state.newTask) {
         this.state.counter = this.state.counter + INCREMENT;
         this.state.names.push({ id: this.state.counter, name: this.state.newTask});
         this.setState((state) => ({
            counter: state.counter++,
            numOfInput: [...state.numOfInput, state.counter]
         }));
         this.state.newTask = '';
      } else {
         alert('Please enter a new task!')
      }
  }
   render() {
      return (
         <View style={{flex: 12, width: width}}>
            <View style={styles.inputList}>
               <TextInput style={styles.input} placeholder="What do we want to do?"
                  onChangeText={(task) => this.setState({newTask: task})}
                  value={this.state.newTask}
               />
               <Button title={this.state.myText} style={{flex: 1}} onPress={this.addInput}/>
            </View>
            <View style={{flex: 11}}>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            </View>
         </View>
      )
   }
}
export default JList

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      alignItems: 'center',
      backgroundColor: '#fff',
   },
   text: {
      color: '#4f603c'
   },
   inputList: {
      flex: 1,
      width,
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
    },
})