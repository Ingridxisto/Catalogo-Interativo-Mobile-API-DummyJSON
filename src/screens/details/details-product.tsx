import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { View, StyleSheet } from "react-native";
import { DetailsProduct } from "@/src/components/row-list/row-list";

export default function DetailsProductScreen() {
  const item = useSelector((state: RootState) => state.detailsProduct.details);

  return (
    <View style={styles.container}>
      <DetailsProduct item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
