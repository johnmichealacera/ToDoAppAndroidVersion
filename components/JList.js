import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const {width} = Dimensions.get('window');

const INCREMENT = 1;
   
class JList extends Component {
   constructor(props){
      super(props);
      this.state={
         myText: props.myText,
         counter: 0,
         tasks: [],
         newTask: '',
         fetchTaskCompleted: props.fetchTaskCompleted,
      };
      this.addInput = this.addInput.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
   }
   alertItemName = (item) => {
      this.setState(
         { tasks: this.state.tasks.map((task) => 
            { 
               if (task.id === item.id) {
                  task.isChecked = !item.isChecked; 
                  task.iconName = task.isChecked ?
                  "checkbox-marked" : "checkbox-blank-outline";
                  return task;
                  }
            else {
               return task;
            }
         }),
         fetchTaskCompleted: this.state.tasks.filter((task) => task.iconName === 'checkbox-marked').length,
      });
   }
   addInput(){
      if (this.state.newTask) {
         this.state.counter = this.state.counter + INCREMENT;
         this.setState(
            { 
               tasks: [
                  ...this.state.tasks, 
                  { 
                  id: this.state.counter, 
                  name: this.state.newTask,
                  isChecked: false,
                  iconName: 'checkbox-blank-outline',
                  }
               ],
               newTask: '',
               fetchTaskCompleted: this.state.tasks.filter((task) => task.iconName === 'checkbox-marked').length,
            }
         );
         this.state.newTask = '';
      } else {
         alert('Please enter a new task!')
      }
  }
  deleteTask(task) {
   this.setState({ tasks: this.state.tasks.filter((item) => item?.id !== task.id)
   });
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
            <ScrollView>
               {
                  this.state.tasks.map((item, index) => (
                     <TouchableOpacity
                        key = {item.id}
                        style = {styles.container}
                        onPress = {() => this.alertItemName(item)}
                        >
                        <MaterialCommunityIcons 
                           name={item.iconName} size={24} color="#000" style={{flex: 1}}/>
                        <Text style = {styles.text}>
                           {item.name}
                        </Text>
                        <Button title='Delete' style={{flex: 1}}
                           onPress = {() => this.deleteTask(item)}
                        />
                     </TouchableOpacity>
                  ))
               }
            </ScrollView>
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
      flexDirection: 'row'
   },
   text: {
      color: '#4f603c',
      flex: 10,
      textAlign: 'left',
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