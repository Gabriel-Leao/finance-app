import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Leão" />
      <Balance saldo="562,00" gastos="-150,37"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});