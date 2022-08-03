import { StyleSheet, Text, View, FlatList } from 'react-native'

import Actions from '../../components/Actions'
import Balance from '../../components/Balance'
import Header from '../../components/Header'
import Movements from '../../components/Movements'

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '128,63',
    date: '15/07/2022',
    type: 0 // GASTO
  },
  {
    id: 2,
    label: 'Cartão de crédito',
    value: '842,87',
    date: '10/07/2022',
    type: 0 // GASTO
  },
  {
    id: 3,
    label: 'PIX Recebido',
    value: '891,19',
    date: '08/07/2022',
    type: 1 // RECEBIDO
  },
  {
    id: 4,
    label: 'Salário',
    value: '2.500,00',
    date: '05/07/2022',
    type: 1 // RECEBIDO
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Leão" />

      <Balance saldo="3.391,19" gastos="-971,50"/>

      <Actions />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginEnd: 14,
    marginStart: 14
  }
})