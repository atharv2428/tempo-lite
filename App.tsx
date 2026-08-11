import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tempo</Text>
      <Text style={styles.tagline}>Find your rhythm. Stay in flow.</Text>

      <View style={styles.timerCard}>
        <Text style={styles.mode}>Focus Session</Text>
        <Text style={styles.time}>25:00</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Focus</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 42,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 48,
    textAlign: 'center',
  },
  timerCard: {
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
  },
  mode: {
    fontSize: 18,
    color: '#CBD5E1',
    marginBottom: 16,
  },
  time: {
    fontSize: 64,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});