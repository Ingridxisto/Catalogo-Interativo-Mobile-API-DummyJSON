import { calculatePercent } from "@/src/utils/calculate-percent";
import { money } from "@/src/utils/money";
import { theme } from "@/src/utils/theme";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

interface DetailsProductProps {
  item: any;
}

export const DetailsProduct = ({ item }: DetailsProductProps) => {
  if (!item) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: item?.thumbnail }}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.priceRow}>
        {item.discountPercentage && (
          <Text style={styles.discountPrice}>
            {money(calculatePercent(item.price, item.discountPercentage))}
          </Text>
        )}
        <Text
          style={[
            styles.price,
            item.discountPercentage && styles.priceDiscounted,
          ]}
        >
          {money(item.price)}
        </Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
