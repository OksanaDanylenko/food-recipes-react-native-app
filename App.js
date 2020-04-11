import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';
import MealsNavigator from './navigatiion/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import * as Fonts from 'expo-font';

enableScreens();

const fetchFonts = () => {
  return Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <MealsNavigator />;
}
