import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import PostsList from "../../components/PostList";
import { IPost, PostsContext } from "../../context/PostContext";
import { Container, ButtonPost } from "./styles";
import Header from "../../components/Header";


interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export default function App() {
  const {loading } = React.useContext(PostsContext);
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSelectUser = () => {
    navigate("SelectUser");
  }

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
        <PostsList />
      )}

      <ButtonPost onPress={() => {handleSelectUser()}}>
        <Feather name="edit-2" color="#FFF" size={25} />
      </ButtonPost>
    </Container>
  );
}


