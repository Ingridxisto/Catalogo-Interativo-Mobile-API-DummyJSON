import React from "react";
import { View, Text } from "react-native";
import { ButtonDefault } from "../button-default/button-default";
import { InputWithTitle } from "../input-with-title/input-with-title";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";


interface ICardLogin {
  handleSubmit: () => void;
  loading: boolean;
  setValueName: (value: string) => void;
  setValuePassword: (value: string) => void;
  name: string;
  password: string;
  error?: boolean;
  errorMessage?: string;
  nameError?: string;
  passwordError?: string;
}

export const CardLogin = ({
  handleSubmit,
  loading,
  setValueName,
  setValuePassword,
  name,
  password,
  error,
  errorMessage,
  nameError,
  passwordError,
}: ICardLogin) => {
  return (
    <View style={styles.cardContainer}>
      <InputWithTitle onChangeText={setValueName} title="Username" 
      value={name} 
      error={!!nameError} 
      />
      {nameError && (
        <View style={styles.errorRow}>
          <Feather name="alert-circle" size={16} color="red" />
          <Text style={styles.titleError}>{nameError}</Text>
        </View>
      )}

      <InputWithTitle
        onChangeText={setValuePassword}
        title="Senha"
        value={password}
        styleContainer={{ marginTop: 24 }}
        haveIcon={true}
        error={!!passwordError}
      />

      {passwordError && (
        <View style={styles.errorRow}>
          <Feather name="alert-circle" size={16} color="red" />
          <Text style={styles.titleError}>{passwordError}</Text>
        </View>
      )}

      {error && !nameError && !passwordError && (
        <View style={styles.errorRow}>
          <Feather name="alert-circle" size={16} color="red" />
          <Text style={styles.titleError}>{errorMessage}</Text>
        </View>
      )}

      <ButtonDefault 
        title="Entrar" 
        onPress={handleSubmit} 
        loading={loading}
      />
    </View>
  );
};