import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FOCUS_TIME = 25 * 60;

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    if (secondsLeft === 0) {
  setIsRunning(false);
  setSessionComplete(true);
}

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(FOCUS_TIME);
  };

  const addFiveMinutes = () => {
  setSessionComplete(false);
  setSecondsLeft(5 * 60);
  setIsRunning(true);
};

const addTenMinutes = () => {
  setSessionComplete(false);
  setSecondsLeft(10 * 60);
  setIsRunning(true);
};

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const formattedTime = `${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tempo</Text>
      <Text style={styles.tagline}>Find your rhythm. Stay in flow.</Text>

      <View style={styles.timerCard}>
  {sessionComplete ? (
    <>
      <Text style={styles.celebrate}>🎉</Text>
      <Text style={styles.completeTitle}>Session Complete</Text>
      <Text style={styles.completeText}>
        Great job! You finished your focus session.
      </Text>

      <TouchableOpacity style={styles.button} onPress={addFiveMinutes}>
        <Text style={styles.buttonText}>+5 min</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={addTenMinutes}>
        <Text style={styles.buttonText}>+10 min</Text>
      </TouchableOpacity>
    </>
  ) : (
    <>
      <Text style={styles.mode}>Focus Session</Text>
      <Text style={styles.time}>{formattedTime}</Text>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Text style={styles.buttonText}>
          {isRunning ? 'Pause' : 'Start Focus'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </>
  )}
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
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  resetText: {
    color: '#94A3B8',
    fontSize: 16,
  },
  celebrate: {
  fontSize: 56,
  marginBottom: 12,
},
completeTitle: {
  fontSize: 28,
  fontWeight: '700',
  color: '#FFFFFF',
  marginBottom: 8,
},
completeText: {
  fontSize: 16,
  color: '#CBD5E1',
  textAlign: 'center',
  marginBottom: 28,
},
secondaryButton: {
  borderWidth: 1,
  borderColor: '#334155',
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 14,
},
secondaryButtonText: {
  color: '#E2E8F0',
  fontSize: 18,
  fontWeight: '600',
},
});