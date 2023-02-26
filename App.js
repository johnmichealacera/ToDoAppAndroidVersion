import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JText from './components/JText';
import JList from './components/JList';
import React from "react";

export default function App() {
  const [taskCompleted, setTaskCompleted] = React.useState(0);
  const [allTask, setAllTask] = React.useState(0);
  const fetchTaskCompleted = (taskCompleted) => {
    setTaskCompleted(taskCompleted);
  };
  const fetchAllTask = (allTask) => {
    setAllTask(allTask);
  };
  return (
    <View style={styles.container}>
      <JText myText = 'To Dos'/>
      <JText myText = {'Task Completed:' + taskCompleted}/>
      <JList myText = 'Add Task' fetchTaskCompleted={fetchTaskCompleted} fetchAllTask={fetchAllTask}/>
      <JText myText = 'By: JM Acera'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
