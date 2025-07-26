
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const CalendarIcon = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push('/Atm')}
      style={styles.container}
    >
      <View style={styles.centerContainer}>
        <Text style={styles.TheText}>REVOLUT</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TheText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default CalendarIcon;