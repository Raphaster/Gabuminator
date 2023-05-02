import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import SituationImg from './assets/SituationImg.js';
import DialogBar from './assets/DialogBar.js';


export default function App() {
  return (
    <View style={styles.page}>
        <View style={styles.content}>
          <Text>Testando!</Text>
          <SituationImg />
          <DialogBar />
          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
