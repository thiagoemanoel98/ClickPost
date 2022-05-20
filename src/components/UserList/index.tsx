import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { PostsContext } from "../../context/PostContext";

import {
  HeaderPost,
  TitlePost,
  TouchPost,
  ContainerPost,
  TextName,
  Avatar,
  ButtonPost,
} from "./styles";

interface IGeo {
  lat: string;
  lng: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

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
