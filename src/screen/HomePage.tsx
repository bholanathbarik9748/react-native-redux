import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import Card from "../components/Card/Card";
import { product } from "../Data/product";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/HomePage";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  const handleCardListEvent = () => {
    navigation.navigate("Cart");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.addToCardBtn}
        onPress={handleCardListEvent}
      >
        <Text style={styles.addToCardBtnText}>Cart List</Text>
      </TouchableOpacity>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card CardDetails={item} />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default HomePage;
