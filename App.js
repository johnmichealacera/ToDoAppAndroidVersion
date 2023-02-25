import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JInputList from './components/JInputList';
import JText from './components/JText';
import JList from './components/JList';
import AddInputDemo from './components/AddInputDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <JText myText = 'To Dos' style={{ marginTop: 75 }}/>
      <JText myText = 'Task Completed:' />
      {/* <JInputList myText = 'Add Task'/> */}
      <JList myText = 'Add Task'/>
      {/* <AddInputDemo /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'space-around',
    justifyContent: 'space-around',
  },
});
