import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

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

export default function EditPost() {
  const { posts, users } = React.useContext(PostsContext);
  const route = useRoute();
  const { id, idUser } = route.params as RouteParams; // Id Post

  const handleEditPost = () => {
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
          value={posts[id-1].title}
          editable={true}
          multiline={true}
          autoCorrect={true}
          maxLength={100}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaTitle>

      <LabelTitle>Conteúdo:</LabelTitle>
      <AreaBody>
        <InputBody
          value={posts[id-1].body}
          editable={true}
          autoCorrect={true}
          multiline={true}
          maxLength={300}
          placeholderTextColor="rgba(0, 0, 0, 0.25)"
        />
      </AreaBody>

      <ActionsArea>
        <ButtonEdit onPress={() => handleEditPost()}>
          <Text style = {{fontSize: 30}}>Confirmar Edição</Text>
        </ButtonEdit>
     
      </ActionsArea>
    </Container>
  );
}
