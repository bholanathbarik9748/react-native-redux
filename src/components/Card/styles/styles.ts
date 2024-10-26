import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    padding: width * 0.05,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  CardHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: width * 0.04,
  },
  CardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    flexShrink: 1,
  },
  CategoryBadge: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  CardCategory: {
    fontSize: 12,
    color: "#666",
  },
  CardDescription: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: width * 0.04,
  },
  CardFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CardPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#27ae60",
  },
  addToCardBtn: {
    backgroundColor: "#27ae60",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addToCardBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
