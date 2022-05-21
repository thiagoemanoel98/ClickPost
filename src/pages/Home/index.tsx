import React from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {PostList} from "../../components/PostList";
import { getUserByPost, PostsContext } from "../../context/PostContext";
import { Container, ButtonPost } from "./styles";
import Header from "../../components/Header";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export default function Home() {
  const { loading, posts, users } = React.useContext(PostsContext);
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSelectUser = () => {
    navigate("SelectUser");
  };

  return (
    <Container>
      <Header />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={50} color="rgba(51, 176, 246, 1)" />
        </View>
      ) : (
        <View>
          <FlatList
            data={posts.slice().reverse()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PostList post={item} user={users[users.findIndex((x) => x.id.toString() === item.userId.toString())]} />}
          />  
      
        </View>
      )}

      <ButtonPost
        onPress={() => {
          handleSelectUser();
        }}
      >
        <Feather name="edit-2" color="#FFF" size={25} />
      </ButtonPost>
    </Container>
  );
}
