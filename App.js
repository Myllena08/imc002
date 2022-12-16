// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo.js';
import Principal from './src/components/principal.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Principal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#05b0ab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FonteBlue: {
    color: 'blue',
     fontWeight:'bold',
     fontSize: 30,
  }
});
