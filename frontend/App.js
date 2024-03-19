import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>我离开!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AppNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
