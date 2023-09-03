import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';

import { Dimensions } from 'react-native'

export default function App() {
  return (
      <View style={styles.container}>
        
        <View>
          <Text>Open up App.tsasdasdasdx to start 1 1123on your app!</Text>
        </View>
        

        <View style={styles.navbar}>
          <Navbar />
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  navbar: {
//    marginTop:'auto',
    
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width,
  }
});
