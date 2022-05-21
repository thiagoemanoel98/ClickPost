import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IUser, PostsContext } from "../../context/PostContext";

import {
  HeaderPost,
  TitlePost,
  TouchPost,
  ContainerPost,
  TextName,
  Avatar,
  ButtonPost,
} from "./styles";

interface Props {
  user: IUser;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const UserList: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  
  const HandleNavigate = (user: IUser) => {
    navigate("NewPost", {user});
  };

  return (
    <ContainerPost style={{ marginBottom: 20 }}>

      <HeaderPost onPress={() => {HandleNavigate(props.user)}}>
        <Avatar source={require("../../assets/avatar1.png")} />
        <TextName>{props.user.name}</TextName>
      </HeaderPost>

    </ContainerPost>
  );
};
