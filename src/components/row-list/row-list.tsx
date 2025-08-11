import { calculatePercent } from "@/src/utils/calculate-percent";
import { money } from "@/src/utils/money";
import { styles } from "@/src/components/row-list/styles";
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
}
