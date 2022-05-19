import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { IPost, PostsContext } from "../../context/PostContext";

interface RouteParams {
  userId: number;
}

export default function UserDetails() {
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  const { posts, users } = React.useContext(PostsContext);

  return (
    <View>
        
        <Text>{users[userId].name}</Text>
        <Text>{users[userId].username}</Text>
        <Text>{users[userId].phone}</Text>
        <Text>Cidade: {users[userId].address.city}</Text>
        <Text>Empresa: {users[userId].company.name}</Text>
        <Text>Site: {users[userId].website}</Text>
    </View>
);
}
