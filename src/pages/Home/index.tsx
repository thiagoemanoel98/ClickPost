import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import PostsList from "../../components/PostList";

export default function App() {

  return (
    <View>
      <Text>Opa</Text>
      <PostsList />
    </View>
  );
}

const styles = StyleSheet.create({});
