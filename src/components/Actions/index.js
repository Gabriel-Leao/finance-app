import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const Actions = () => {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.buttonArea}>
          <MaterialIcons name="attach-money" size={26} color="#000" />
        </View>

        <Text style={styles.buttonLabel}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.buttonArea}>
          <MaterialIcons name="money-off" size={26} color="#000" />
        </View>

        <Text style={styles.buttonLabel}>Saídas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.buttonArea}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>

        <Text style={styles.buttonLabel}>Cartão</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.buttonArea}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>

        <Text style={styles.buttonLabel}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.buttonArea}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>

        <Text style={styles.buttonLabel}>Configurações</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 14,
    paddingEnd: 14,
    maxHeight: 90,
    marginBottom: 14,
    marginTop: 18,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32
  },
  buttonArea: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  buttonLabel: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Actions