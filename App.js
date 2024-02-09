import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex justify-center items-center h-screen w-screen">
      <Text className="text-center text-green-500">Equipe 02 - Mobile usando NativeWind - React Native + Tailwindcss!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
