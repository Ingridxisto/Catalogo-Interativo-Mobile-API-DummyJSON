import { theme } from "@/src/utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
    marginBottom: 6,
  },
  contentInput: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  input: {
    height: 37,
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.gray_500,
    borderRadius: 4,
    paddingLeft: 12,
    paddingRight: 34,
  },
  buttonEye: {
    position: "absolute",
    right: 7,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textError: {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fonts.regular,
    color: theme.colors.red,
  },
});