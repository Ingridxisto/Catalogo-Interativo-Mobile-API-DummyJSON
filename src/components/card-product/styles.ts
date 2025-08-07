import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  imageItem: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  itemDetails: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
    borderTopWidth: 0.5,
    width: "100%",
    flex: 1,
  },
  itemTitle: {
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 8,
  },
  itemDescription: {
    textAlign: "left",
  },
  contentAmount: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 8,
    width: "100%",
    overflow: "scroll",
  },
  itemPrice: {
    textDecorationLine: "none",
  },
  discountText: {
    marginRight: 8,
  },
});