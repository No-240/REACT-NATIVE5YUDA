import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACE, TYPO } from '../src/styles/tokens';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.body}>
        Diary App merupakan aplikasi praktikum Mobile Programming
        yang menggunakan Expo Router, Stack Navigation, Bottom Tabs,
        Dynamic Route, Route Params, dan Context.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.surface,
  },
  title: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  body: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 22,
  },
});