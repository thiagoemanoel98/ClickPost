import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { IPost, IUser } from "../../context/PostContext";
import {
  HeaderPost,
  TitlePost,
  TouchPost,
  ContainerPost,
  TextName,
  Avatar,
  ButtonPost,
} from "./styles";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

interface Props {
  post: IPost;
  user: IUser;
}

export const PostList: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleUserDetails = (user: IUser) => {
    navigate("UserDetails", { user });
  };

  const handleUserPost = (post: IPost, user: IUser) => {
    navigate("UserPost", { post, user });
  };

  return (
    <ContainerPost style={{ marginBottom: 20 }}>
      <HeaderPost
        onPress={() => {
          handleUserDetails(props.user);
        }}
      >
        <Avatar source={require("../../assets/avatar1.png")} />
        <TextName>{props.user.name}</TextName>
      </HeaderPost>

      <TouchPost onPress={() => handleUserPost(props.post, props.user)}>
        <TitlePost>{props.post.title}</TitlePost>
      </TouchPost>

      <ButtonPost onPress={() => handleUserPost(props.post, props.user)}>
        <MaterialIcons name="read-more" size={35} color="black" />
      </ButtonPost>
    </ContainerPost>
  );
};
