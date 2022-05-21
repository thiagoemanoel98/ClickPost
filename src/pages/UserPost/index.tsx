import React from "react";
import { Text, Alert } from "react-native";
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

export default function UserPost() {
  const route = useRoute();
  const { post, user } = route.params as RouteParams;
  const { deletePost } = React.useContext(PostsContext);
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleEdit = () => {
    navigate("EditPost", { post, user });
  };

  // Perguntar se quer exluir e, então, escluir
  const handleDelete = () => {
    Alert.alert("Atenção!", "Deseja realmente excluir esse Post?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => handleDeleteSuccess(),
      },
    ]);
  };

  const handleDeleteSuccess = () => {
    deletePost(post);
    navigate('Home');
  }

  return (
    <Container>
      <HeaderPage>
        <PageTitle>Autor: </PageTitle>
        <PageTitle2>{user.name} </PageTitle2>
      </HeaderPage>

      <LabelTitle>Título:</LabelTitle>
      <AreaTitle>
        <InputTitle
          placeholder="Digite o título"
          value={post.title}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          placeholder="Digite a publicação"
          value={post.body}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaBody>

      <ActionsArea>
        <ButtonEdit onPress={() => handleEdit()}>
          <Text style={{ fontSize: 30 }}>Editar</Text>
        </ButtonEdit>

        <ButtonDelete onPress={() => handleDelete()}>
          <Text style={{ fontSize: 30 }}>Excluir</Text>
        </ButtonDelete>
      </ActionsArea>
    </Container>
  );
}
