import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo'
export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>React Native Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop:10,
    fontSize:14,
    fontWeight:'bold',
    color:'blue'
  }
});
