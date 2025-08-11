import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentTop: {
    width: "100%",
    height: "50%",
    backgroundColor: "#2567E8",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 70,
  },
  contentBottom: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentAbsolute: {
    position: "absolute",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 32,
  },
});