import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JText from './components/JText';
import JList from './components/JList';

export default function App() {
  return (
    <View style={styles.container}>
      <JText myText = 'To Dos'/>
      <JText myText = 'Task Completed:'/>
      <JList myText = 'Add Task'/>
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
