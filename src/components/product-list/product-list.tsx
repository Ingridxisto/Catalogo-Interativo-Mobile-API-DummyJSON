import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { CardItemList } from "../card-product/card-product";

type ProductListProps = {
  products: any[];
  loading?: boolean;
};

export const ProductList = ({ products, loading }: ProductListProps) => {
  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nenhum produto encontrado.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CardItemList item={item} />}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
