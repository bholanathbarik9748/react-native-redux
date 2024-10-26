import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

const CartPage = () => {
  // Use useSelector outside of useEffect
  const cardState = useSelector((state) => state.card);

  useEffect(() => {
    // You can use the cardState here if needed
    console.log(cardState); // This is where you can inspect the state
    debugger; // This will trigger the debugger if you're running a debugger
  }, [cardState]); // Dependency array to run effect when cardState changes

  return (
    <View style={styles.container}>
      <Text>CartPage</Text>
      {/* You can render cart items here based on cardState */}
      {cardState.items.map((item) => (
        <Text key={item.id}>{item.name}</Text> // Adjust to your item structure
      ))}
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
});
