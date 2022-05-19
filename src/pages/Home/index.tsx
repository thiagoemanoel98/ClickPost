import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import PostsList from "../../components/PostList";

import { Container } from "./styles";
import Header from "../../components/Header";

export default function App() {

  return (
    
    <Container>
      <Header/>
      <PostsList />
    </Container>
  );
}

const styles = StyleSheet.create({});
