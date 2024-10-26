import { FlatList, View } from "react-native";
import React from "react";
import Card from "../components/Card/Card";
import { product } from "../Data/product";

const HomePage = () => {
  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card CardDetails={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomePage;
