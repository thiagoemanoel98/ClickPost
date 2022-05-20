import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { IUser, PostsContext } from "../../context/PostContext";
import { UserList } from "../../components/UserList";

export default function SelectUser() {
  const { posts, users } = React.useContext(PostsContext);

  return (
    <View>
      <View style={{ marginBottom: 12 }}>
        <FlatList
          data={users as unknown as IUser[]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <UserList user={item} />}
        />
      </View>
    </View>
  );
}
