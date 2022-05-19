import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { IPost, PostsContext } from "../../context/PostContext";
import {
  Container,
  Avatar,
  HeaderDeatils,
  UserName,
  Content,
  Info,
  TextContent,
  TextLabel,
  SectionTitle,
  SectionArea,
} from "./styles";

interface RouteParams {
  userId: number;
}

export default function UserDetails() {
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  const { posts, users } = React.useContext(PostsContext);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderDeatils>
          <Avatar source={require("../../assets/avatar1.png")} />
          <UserName>{users[userId - 1].username}</UserName>
        </HeaderDeatils>

        <SectionArea>
          <SectionTitle>Informações Pessoais:</SectionTitle>
        </SectionArea>
        <Content>
          <Info>
            <TextLabel>Nome:</TextLabel>
            <TextContent>{users[userId - 1].name}</TextContent>
          </Info>
          <Info>
            <TextLabel>Username:</TextLabel>
            <TextContent>{users[userId - 1].username}</TextContent>
          </Info>
          <Info>
            <TextLabel>Telefone:</TextLabel>
            <TextContent>{users[userId - 1].phone}</TextContent>
          </Info>
          <Info>
            <TextLabel>Website:</TextLabel>
            <TextContent>{users[userId - 1].website}</TextContent>
          </Info>
          <Info>
            <TextLabel>Email:</TextLabel>
            <TextContent>{users[userId - 1].email}</TextContent>
          </Info>
        </Content>

        <SectionArea>
          <SectionTitle>Endereço:</SectionTitle>
        </SectionArea>

        <Content>
          <Info>
            <TextLabel>Rua:</TextLabel>
            <TextContent>{users[userId - 1].address.street}</TextContent>
          </Info>
          <Info>
            <TextLabel>Suíte:</TextLabel>
            <TextContent>{users[userId - 1].address.suite}</TextContent>
          </Info>
          <Info>
            <TextLabel>Cidade:</TextLabel>
            <TextContent>{users[userId - 1].address.city}</TextContent>
          </Info>
          <Info>
            <TextLabel>CEP:</TextLabel>
            <TextContent>{users[userId - 1].address.zipcode}</TextContent>
          </Info>
          <Info>
            <TextLabel>Latitude:</TextLabel>
            <TextContent>{users[userId - 1].address.geo.lat}</TextContent>
          </Info>
          <Info>
            <TextLabel>Longitude:</TextLabel>
            <TextContent>{users[userId - 1].address.geo.lng}</TextContent>
          </Info>
        </Content>

        <SectionArea>
          <SectionTitle>Empresa</SectionTitle>
        </SectionArea>
        <Content>
          <Info>
            <TextLabel>Nome:</TextLabel>
            <TextContent>{users[userId - 1].company.name}</TextContent>
          </Info>
          <Info>
            <TextLabel>Setor:</TextLabel>
            <TextContent>{users[userId - 1].company.bs}</TextContent>
          </Info>
          
        </Content>
      </ScrollView>
    </Container>

    /*<View>
        <Text>Cidade: {users[userId-1].address.city}</Text>
        <Text>Empresa: {users[userId-1].company.name}</Text>
        <Text>Site: {users[userId-1].website}</Text>
    </View>
    */
  );
}
