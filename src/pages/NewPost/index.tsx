import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { PostsContext, IPost } from "../../context/PostContext";
import {
  Container,
  InputTitle,
  InputBody,
  Button,
  ButtonText,
  AreaTitle,
  AreaBody,
  LabelTitle,
  PageTitle,
  HeaderPage,
  PageTitle2,
} from "./styles";

interface RouteParams {
  userId: number;
}

export default function NewPost() {
  const route = useRoute();
  const { userId } = route.params as RouteParams;
  const { users, posts, addNewPost } = React.useContext(PostsContext);
  const navigation = useNavigation();

  const [body, setBody] = React.useState("");
  const [title, setTitle] = React.useState("");

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, body]);

  // Pegar ID do usuario, criar new post e mandar pro addNewPost
  const handlePost = () => {

    if (body === '' || title === '') {
      alert('Preencha todos os campos');
      return;
    }

    let [lastPost] = posts.slice(-1);
    let user = users[userId - 1];
    //console.log(lastPost.id);

    let NewPost = {
      userId: userId,
      id: lastPost.id + 1,
      title: title,
      body: body,
    };

    addNewPost(NewPost, user);
    setBody('');
    setTitle('');
  };

  return (
    <Container>
      <HeaderPage>
        <PageTitle>Autor:</PageTitle>
        <PageTitle2> {users[userId - 1].name}</PageTitle2>
      </HeaderPage>

      <LabelTitle>Título:</LabelTitle>
      <AreaTitle>
        <InputTitle
          placeholder="Digite o título"
          value={title}
          onChangeText={(text) => setTitle(text)}
          autoCorrect={true}
          multiline={false}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
          maxLength={100}
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          placeholder="Digite a publicação"
          value={body}
          onChangeText={(text) => setBody(text)}
          autoCorrect={true}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
          maxLength={300}
        />
      </AreaBody>
    </Container>
  );
}
