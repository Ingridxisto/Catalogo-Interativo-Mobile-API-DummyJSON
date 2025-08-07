import { useThemeColor } from "@/hooks/useThemeColor";
import { calculatePercent } from "@/src/utils/calculate-percent";
import { money } from "@/src/utils/money";
import { theme } from "@/src/utils/theme";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDetailsProduct } from "@/src/store/slices/details-product-slice";

export const CardItemList = ({ item, style }: {item: any; style?: any}) => {
  const dispatch = useDispatch()

  const handlePressImage = () => {
    dispatch(setDetailsProduct(item))
    router.navigate('/(stacks)/details-product')
  }
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {
          borderColor: theme.colors.gray_200,
          backgroundColor: theme.colors.white,
        },
        style,
      ]}
    >
    <TouchableOpacity 
      onPress={handlePressImage}
      style={styles.imageItem}
    >
      <Image
        source={{ uri: item?.thumbnail }}
        resizeMode="contain"
        style={styles.imageItem}
      />
    </TouchableOpacity>
      <View
        style={[styles.itemDetails, { borderTopColor: theme.colors.gray_200 }]}
      >
        <Text style={[styles.itemTitle, { fontSize: theme.fontSizes.sm }]}>
          {item?.title}
        </Text>
        <Text
          style={[
            styles.itemDescription,
            { fontSize: theme.fontSizes.xs, color: theme.colors.background },
          ]}
        >
          {item?.description}
        </Text>
        <View style={styles.contentAmount}>
          {item?.discountPercentage && (
            <Text
              numberOfLines={1}
              style={[
                styles.discountText,
                {
                  fontSize: theme.fontSizes.md,
                  color: theme.colors.red,
                  fontFamily: theme.fonts.medium,
                },
              ]}
            >
              {money(calculatePercent(item?.price, item?.discountPercentage))}
            </Text>
          )}
          <Text
            numberOfLines={1}
            style={[
              styles.itemPrice,
              {
                fontSize: item?.discountPercentage
                  ? theme.fontSizes.md
                  : theme.fontSizes.sm,
                color: theme.colors.background,
                fontFamily: theme.fonts.medium,
                textDecorationLine: item?.discountPercentage
                  ? "line-through"
                  : "none",
              },
            ]}
          >
            {money(item?.price.toFixed(2))}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
