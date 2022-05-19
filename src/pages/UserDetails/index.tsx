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

  React.useEffect(() => {
    
  }, []);

  return (
    <View>
        
        <Text>Nome: {users[userId-1].name}</Text>
        <Text>UserName: {users[userId-1].username}</Text>
        <Text>{users[userId-1].phone}</Text>
        <Text>Cidade: {users[userId-1].address.city}</Text>
        <Text>Empresa: {users[userId-1].company.name}</Text>
        <Text>Site: {users[userId-1].website}</Text>
    </View>
);
}
