import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RootNavigator from '@/src/navigation/RootNavigator';

const _layout = () => {
  return (
    <RootNavigator />
  );
}

export default _layout

const styles = StyleSheet.create({})