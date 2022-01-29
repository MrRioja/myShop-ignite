import React, { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

import { Container } from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { Input } from "../Input";

export function FormBox() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  async function handleProductAdd() {
    firestore()
      .collection("products")
      .add({ description, quantity, done: false })
      .then(() => {
        Alert.alert("Product added successfully");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        onChangeText={setDescription}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        onChangeText={(value) => setQuantity(Number(value))}
        style={{ marginHorizontal: 8 }}
      />

      <ButtonIcon
        size="large"
        icon="add-shopping-cart"
        onPress={handleProductAdd}
      />
    </Container>
  );
}
