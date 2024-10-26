import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  addToCardBtn: {
    backgroundColor: "#27ae60",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 20,
  },
  addToCardBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
