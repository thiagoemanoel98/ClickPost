import React from "react";
import { FlatList, View } from "react-native";


import { PostsContext } from "../../context/PostContext";
import { UserList } from "../../components/UserList";
import { Container } from "./styles";


export default function SelectUser() {
  const { users } = React.useContext(PostsContext);

  return (
    <Container>
      <View style={{ marginBottom: 12 }}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <UserList user={item} />}
        />
      </View>
    </Container>
  );
}
