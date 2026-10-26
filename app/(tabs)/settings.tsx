import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <Text style={styles.text}>
        Halaman ini dapat dikembangkan pada praktikum berikutnya.
      </Text>

      <Pressable
        onPress={() => router.push('/about')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Tentang Aplikasi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});