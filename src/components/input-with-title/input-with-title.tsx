import { theme } from "@/src/utils/theme";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

export interface IPropsCardLogin
  extends React.ComponentProps<typeof TextInput> {
  title: string;
  onChangeText: (value: string) => void;
  value: string;
  styleContainer?: StyleProp<ViewStyle>;
  haveIcon?: boolean;
  error?: boolean;
}

export const InputWithTitle = ({
  onChangeText,
  title,
  value,
  styleContainer,
  haveIcon,
  error,
  ...rest
}: IPropsCardLogin) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentInput}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.input,
            error && { borderColor: 'red', borderWidth: 1 }
          ]}
          secureTextEntry={haveIcon ? !showPassword : false}
          {...rest}
        />
        {haveIcon && (
          <TouchableOpacity
            style={styles.buttonEye}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={16}
              color={theme.colors.background}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};