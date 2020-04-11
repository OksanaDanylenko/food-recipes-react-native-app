import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './navigatiion/MealsNavigator';

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
