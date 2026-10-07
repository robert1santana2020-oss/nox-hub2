import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nox Hub</Text>
      <Text style={styles.subtitle}>Seu hub está online. ⚡</Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: 16,
    marginTop: 10,
  },
});