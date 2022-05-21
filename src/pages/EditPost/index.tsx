import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { IPost, IUser, PostsContext } from "../../context/PostContext";
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
  post: IPost;
  user: IUser;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export default function EditPost() {
  const { editPost } = React.useContext(PostsContext);
  const route = useRoute();
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { post, user } = route.params as RouteParams; // Id Post

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleEditPost = () => {
    if (title !== "" || body !== "") {
      const DATA = {
        userId: user.id,
        id: post.id,
        title: title,
        body: body,
      };

      if (title === "") {
        DATA.title = post.title;
      } else if (body === "") {
        DATA.body = post.body;
      }

      editPost(DATA);
      navigate("Home");
    } else {
      alert("Há campos vazios!");
    }
  };

  return (
    <Container>
      <HeaderPage>
        <PageTitle>Autor: </PageTitle>
        <PageTitle2>{user.name} </PageTitle2>
      </HeaderPage>

      <LabelTitle>Título:</LabelTitle>
      <AreaTitle>
        <InputTitle
          value={title}
          placeholder={post.title}
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
          placeholder={post.body}
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
