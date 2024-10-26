import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "@/src/navigation/RootNavigator"; // Adjust this path as necessary
import { Provider } from "react-redux";
import store from "../src/store/store"; // Ensure this path points to your Redux store file

const _layout = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
