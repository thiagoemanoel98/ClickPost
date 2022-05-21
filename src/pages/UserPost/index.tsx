import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { IPost, IUser, PostsContext } from "../../context/PostContext";
import {
  Container,
  InputTitle,
  InputBody,
  AreaTitle,
  AreaBody,
  LabelTitle,
  PageTitle,
  HeaderPage,
  PageTitle2,
  ActionsArea,
  TextConfirm,
  TouchArea,
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
    navigate("Home");
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
          value={post.title}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          value={post.body}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaBody>

      <ActionsArea>
        <TouchArea>
          <TouchableOpacity onPress={() => handleEdit()}>
            <AntDesign name="edit" size={45} color="#202225" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit()}>
            <TextConfirm>Editar</TextConfirm>
          </TouchableOpacity>
        </TouchArea>

        <TouchArea>
          <TouchableOpacity onPress={() => handleDelete()}>
            <AntDesign name="delete" size={45} color="#202225" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete()}>
            <TextConfirm>Apagar</TextConfirm>
          </TouchableOpacity>
        </TouchArea>
      </ActionsArea>
    </Container>
  );
}
