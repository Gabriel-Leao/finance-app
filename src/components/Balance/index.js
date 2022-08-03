import { View, Text, StyleSheet } from 'react-native'

const Balance = ({ saldo, gastos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>

        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gasto</Text>

        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99
  },
  itemTitle: {
    fontSize: 20,
    color: '#dadada'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySimbol: {
    color: '#DADADA',
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c'
  }
})

export default Balance;