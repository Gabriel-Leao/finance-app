import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Leão" />
      <Text>Home page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});