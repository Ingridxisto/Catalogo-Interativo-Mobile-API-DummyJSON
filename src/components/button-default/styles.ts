import { theme } from "@/src/utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentButton: {
    height: 40,
    width: "100%",
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    borderRadius: 4,
  },
  titleButton: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
  },
  contentIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});