import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IUser, PostsContext } from "../../context/PostContext";
import { UserList } from "../../components/UserList";


export default function SelectUser() {
  const { users } = React.useContext(PostsContext);

  return (
    <View>
      <View style={{ marginBottom: 12 }}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <UserList user={item} />}
        />
      </View>
    </View>
  );
}
