import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { PostsContext } from "../../context/PostContext";
import {UserList} from '../../components/UserList';

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

export default function SelectUser() {
  const { posts, users } = React.useContext(PostsContext);

  return (
    <View>
      <View style={{ marginBottom: 12 }}>
      <FlatList
        data={users as unknown as IUser[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<UserList user={item}/>)}
        />

      </View>
    </View>
)
  }

