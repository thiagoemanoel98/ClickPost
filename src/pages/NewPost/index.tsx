import React, {useLayoutEffect} from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { PostsContext } from "../../context/PostContext";
import {Container, Input, Button, ButtonText } from "./styles";

interface RouteParams {
  userId: number;
}

export default function NewPost() {
  const route = useRoute();
  const { userId } = route.params as RouteParams;
  const { users, posts } = React.useContext(PostsContext);
  const navigation = useNavigation();

  const [post, setPost] = React.useState('');

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post])

  const handlePost = () => {
    alert('Novo Post');
  };

  return (
    <Container>
      <Input
        placeholder= "Digite uma publicação"
        value={post}
        onChangeText={text => setPost(text)}
        autoCorrect={false}
        multiline={true}
        placeholderTextColor="#DDD"
        maxLength={300}
      />
    </Container>
  );
}
