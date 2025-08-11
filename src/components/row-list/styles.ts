import { StyleSheet } from "react-native";
import { theme } from "@/src/utils/theme";


export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: theme.colors.white,
    alignItems: "flex-start",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.black,
    textAlign: "left",
  },
  priceRow: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  discountPrice: {
    fontSize: 28,
    color: theme.colors.red,
    fontWeight: "600",
    marginRight: 10,
  },
  price: {
    fontSize: 20,
    color: theme.colors.background,
  },
  priceDiscounted: {
    textDecorationLine: "line-through",
    color: theme.colors.gray_400,
  },
  description: {
    marginTop: 16,
    fontSize: 19,
    color: theme.colors.gray_500,
    textAlign: "left",
  },
});
