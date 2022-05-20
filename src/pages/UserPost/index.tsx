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
} from "./styles";

interface RouteParams {
  id: number,
  idUser: number;
}

export default function UserPost() {
  const { posts, users } = React.useContext(PostsContext);
  const route = useRoute();
  const { id, idUser } = route.params as RouteParams; // Id Post

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

    </Container>

    /*<View>
      <Text>Id Post: {id}</Text>
      <Text>Autor: {users[posts[id-1].userId].name }</Text>
      <Text>Titulo: {posts[id-1].title}</Text>
      <Text>Conteudo: {posts[id-1].body}</Text>
    </View>*/
  );
}
