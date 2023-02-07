import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import { Container, Account, Title, Subtitle } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Alert } from "react-native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignInAnonymously() {
    const { user } = await auth().signInAnonymously();
    console.log(user);
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("User created successfully"))
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Email is already in use");
        }
      });
  }

  async function handleSignInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          Alert.alert("User not found. Invalid user or password.");
        }
      });
  }

  async function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "We have sent a link to your email to reset your password."
        );
      });
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista para te ajudar nas compras 🛍</Subtitle>

      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input placeholder="Senha" onChangeText={setPassword} secureTextEntry />

      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={handleForgotPassword} />
        <ButtonText
          title="Criar minha conta"
          onPress={handleCreateUserAccount}
        />
      </Account>
    </Container>
  );
}
