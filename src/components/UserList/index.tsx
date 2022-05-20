import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

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

export const UserList: React.FC<Props> = (props) => {
  
  return (
    <ContainerPost style={{ marginBottom: 20 }}>

      <HeaderPost onPress={() => {}}>
        <Avatar source={require("../../assets/avatar1.png")} />
        <TextName>{props.user.name}</TextName>
      </HeaderPost>

    </ContainerPost>
  );
};
