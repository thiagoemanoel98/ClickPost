import React, { useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';

import { IPost, PostsContext } from "../../context/PostContext";

interface ScreenNavigationProp {
  goBack: () => void;
  navigate: (screen: string, params?: unknown) => void;
}

export default function PostsList() {
  const { posts, users } = React.useContext(PostsContext);
  const navigation = useNavigation();



  return (
    <View style={{ marginBottom: 12 }}>
      <FlatList
        data={posts as unknown as IPost[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('User')}>
              <Text>
                Autor:{
                  users[users.findIndex((x) => x.id.toString() === item.userId.toString())   ].name
                }
              </Text>
            </TouchableOpacity>

            <Text>Titulo: {item.title}</Text>
            <Text>Conteudo: {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}
