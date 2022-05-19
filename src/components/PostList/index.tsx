import React, { useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IPost, PostsContext } from "../../context/PostContext";
import {
  HeaderPost,
  TitlePost,
  TouchPost,
  ContainerPost,
  TextName,
  Avatar,
} from "./styles";

interface ScreenNavigationProp {
  goBack: () => void;
  navigate: (screen: string, params?: unknown) => void;
}

export default function PostsList() {
  const { posts, users } = React.useContext(PostsContext);
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleUserDetails = (userId: number) => {
    navigate("UserDetails", { userId });
  };

  return (
    <View style={{ marginBottom: 12 }}>
      <FlatList
        data={posts as unknown as IPost[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContainerPost style={{ marginBottom: 20 }}>
            <HeaderPost onPress={() => handleUserDetails(item.userId)}>
              <Avatar source={require('../../assets/avatar1.png')}/>
              <TextName>
                {
                  users[
                    users.findIndex(
                      (x) => x.id.toString() === item.userId.toString()
                    )
                  ].name
                }
              </TextName>
            </HeaderPost>
            
            <TouchPost onPress={() => {}}>
              <TitlePost>{item.title}</TitlePost>
            </TouchPost>
           
          </ContainerPost>
        )}
      />
    </View>
  );
}
