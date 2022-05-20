import React, { useEffect, useState } from "react";
import { Text } from "react-native";
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
  ActionsArea
} from "./styles";

interface RouteParams {
  id: number,
  idUser: number;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export default function UserPost() {
  const { posts, users } = React.useContext(PostsContext);
  const route = useRoute();
  const { id, idUser } = route.params as RouteParams; // Id Post

  const navigation = useNavigation();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  // Navegar para uma pagina de Edição
  const handleEdit = () => {
    navigate('EditPost', {id, idUser});
  }

  // Perguntar se quer exluir e, então, escluir
  const handleDelete = () => {
    console.log('Delete');
  }

  return (
    <Container>
      <HeaderPage>
        <PageTitle>Autor: </PageTitle>
        <PageTitle2>{users[idUser-1].name} </PageTitle2>
      </HeaderPage>

      <LabelTitle>Título:</LabelTitle>
      <AreaTitle>
        <InputTitle
          placeholder="Digite o título"
          value={posts[id-1].title}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          placeholder="Digite a publicação"
          value={posts[id-1].body}
          editable={false}
          multiline={true}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaBody>

      <ActionsArea>
        <ButtonEdit onPress={() => handleEdit()}>
          <Text style = {{fontSize: 30}}>Editar</Text>
        </ButtonEdit>

        <ButtonDelete onPress={() => handleDelete()}>
        <Text style = {{fontSize: 30}}>Excluir</Text>
        </ButtonDelete>
      </ActionsArea>
    </Container>
  );
}
