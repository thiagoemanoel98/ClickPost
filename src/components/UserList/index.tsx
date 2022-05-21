import React, { useEffect, useState } from "react";
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

import { IUser } from "../../context/PostContext";

import {
  HeaderPost,
  ContainerNames,
  TextUserName,
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
        <ContainerNames>
          <TextName>{props.user.name}</TextName>
          <TextUserName>@{props.user.username}</TextUserName>
        </ContainerNames>
      </HeaderPost>
     
      <ButtonPost
        onPress={() => {
          HandleNavigate(props.user);
        }}
      >
        <Entypo name="forward" size={30} color="rgba(51, 176, 246, 1)" />
      </ButtonPost>
    </ContainerPost>
  );
};
