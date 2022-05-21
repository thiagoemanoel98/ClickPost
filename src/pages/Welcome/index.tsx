import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  TitleText,
  Button,
  ButtonText,
  WelcomeText,
} from "./styles";
import { Text } from "react-native";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export default function Welcome() {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <TitleText>
        Click<Text style={{ color: "rgba(51, 176, 246, 1)" }}>Posts</Text>
      </TitleText>
      <Button
        onPress={() => {
          navigate("Home");
        }}
      >
        <ButtonText>Iniciar</ButtonText>
      </Button>
    </Container>
  );
}
