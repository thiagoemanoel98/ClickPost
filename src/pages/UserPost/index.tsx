import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { PostsContext } from "../../context/PostContext";

interface RouteParams {
  id: number;
}

export default function UserPost() {
  const { posts, users } = React.useContext(PostsContext);
  const route = useRoute();
  const { id } = route.params as RouteParams; // Id Post

  return (
    <View>
      <Text>Id Post: {id}</Text>
      <Text>Autor: {users[posts[id].userId -1].name }</Text>
      <Text>Titulo: {posts[id].title}</Text>
      <Text>Conteudo: {posts[id].body}</Text>
    </View>
  );
}
