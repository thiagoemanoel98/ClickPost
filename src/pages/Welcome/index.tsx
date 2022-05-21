import React from "react";
import { Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PostsContext } from "../../context/PostContext";

import { Container, TitleText, Button, ButtonText } from "./styles";

import * as Animatable from 'react-native-animatable';


interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}
const TitleAnimated = Animatable.createAnimatableComponent(TitleText);

export default function Welcome() {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { loading } = React.useContext(PostsContext);

  return (
    <Container>
      <TitleAnimated  animation="flipInY"> 
        Click<Text style={{ color: "rgba(51, 176, 246, 1)" }}>Posts</Text>
      </TitleAnimated>

      {loading ? (
        <Button onPress={() => {}}>
          <ButtonText><ActivityIndicator size={20} color="#000" /></ButtonText>
        </Button>
      ) : (
        <Button
          onPress={() => {
            navigate("Home");
          }}>
          <ButtonText>Iniciar</ButtonText>
        </Button>
      )}
    </Container>
  );
}
