import { CardLogin } from "@/src/components/card-login/card-login";
import { useDispatch } from "react-redux";
import { loginUser } from "@/src/store/slices/logout";
import React, { useState } from "react";
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";

// username: João da Silva
// password: joaodasilva

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState("");

  const dispatch = useDispatch();

  const submit = () => {

    setNameError('');
    setPasswordError('');
    setErrorMessage('');

    let hasError = false;

    if (name.trim() === "") {
      setNameError('Campo obrigatório');
      hasError = true;
    }

    if (password.trim() === "") {
      setPasswordError('Campo obrigatório');
      hasError = true;
    }

    if (hasError) return;


    if (name !== "João da Silva" || password !== "joaodasilva") {
      setFormError("Username ou senha incorretos.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
    dispatch(loginUser({name, password}));
    router.replace('/(tabs)');
    setLoading(false);
  }, 1000);
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.contentTop} />
          <View style={styles.contentBottom} />
          <View style={styles.contentAbsolute}>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.description}>
              Insira seus dados para entrar na sua conta.
            </Text>
            <CardLogin
              handleSubmit={submit}
              loading={loading}
              name={name}
              setValueName={setName}
              setValuePassword={setPassword}
              password={password}
              error={!!formError}
              errorMessage={formError}
              nameError={nameError}
              passwordError={passwordError}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};