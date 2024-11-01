import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card/Card";

const CartPage = () => {
  const cardState = useSelector((state) => state.card);

  return (
    <View style={styles.container}>
      {cardState?.items?.length > 0 ? (
        <FlatList
          data={cardState.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card CardDetails={item} />}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No items in the cart</Text>
      )}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
  listContainer: {
    marginTop: 10,
  },
});
