import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { PostsContext } from "../../context/PostContext";
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
  ButtonEdit,
  ButtonDelete,
  ActionsArea,
} from "./styles";

interface RouteParams {
  id: number;
  idUser: number;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export default function EditPost() {
  const { posts, users, editPost } = React.useContext(PostsContext);
  const route = useRoute();
  const { id, idUser } = route.params as RouteParams; // Id Post
  const navigation = useNavigation();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleEditPost = () => {
    const DATA = {
      userId: idUser,
      id: id,
      title: title,
      body: body,
    };

    editPost(DATA);
    navigate("Home");
  };

  return (
    <Container>
      <HeaderPage>
        <PageTitle>Autor: </PageTitle>
        <PageTitle2>{users[idUser - 1].name} </PageTitle2>
      </HeaderPage>

      <LabelTitle>Título:</LabelTitle>
      <AreaTitle>
        <InputTitle
          value={title}
          placeholder={posts[id-1].title}
          editable={true}
          multiline={true}
          onChangeText={(text) => setTitle(text)}
          autoCorrect={true}
          maxLength={100}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          placeholder={posts[id-1].body}
          editable={true}
          autoCorrect={true}
          multiline={true}
          onChangeText={(text) => setBody(text)}
          maxLength={300}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaBody>

      <ActionsArea>
        <ButtonEdit onPress={() => handleEditPost()}>
          <Text style={{ fontSize: 30 }}>Confirmar Edição</Text>
        </ButtonEdit>
      </ActionsArea>
    </Container>
  );
}
