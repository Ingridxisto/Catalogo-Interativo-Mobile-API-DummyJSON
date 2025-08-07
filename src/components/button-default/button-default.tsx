import { theme } from "@/src/utils/theme";
import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

export interface IButtonDefault {
  title: string;
  styleContent?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  onPress: () => void;
  loading?: boolean;
  Icon?: React.ElementType;
}

export const ButtonDefault = ({
  styleContent,
  title,
  onPress,
  loading,
  Icon,
  styleTitle,
}: IButtonDefault) => {
  return (
    <TouchableOpacity
      style={[styles.contentButton, styleContent as ViewStyle]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size={16} color={theme.colors.white} />
      ) : (
        <View style={styles.contentIcon}>
          <Text style={[styles.titleButton, styleTitle as TextStyle]}>
            {title}
          </Text>
          {Icon && <Icon />}
        </View>
      )}
    </TouchableOpacity>
  );
};