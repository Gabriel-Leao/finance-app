import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import { MotiView, MotiText, AnimatePresence } from 'moti'

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        { showValue ? (
            <AnimatePresence exitBeforeEnter>
              <MotiText style={data.type === 1 ? styles.value : styles.expenses}
                from={{
                  translateX: 100
                }}
                animate={{
                  translateX: 0
                }}
                transition={{
                  type: 'spring',
                  duration: 500
                }}
              >
                { data.type === 1 ? `R$ ${data.value}` : ` R$ -${data.value}` }
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView style={styles.skeleton}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'timing' }}
              >
              </MotiView>
            </AnimatePresence>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#dadada',
    borderBottomWidth: .5,
    flex: 1,
    marginBottom: 24,
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  value: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: 'bold'
  },
  expenses: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: 'bold'
  },
  skeleton: {
    backgroundColor: '#dadada',
    borderRadius: 6,
    height: 10,
    margintTop: 6,
    width: 80,
  }
})

export default Movements