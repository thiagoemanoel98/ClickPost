import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import { IUser } from "../../context/PostContext";
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
  user: IUser;
}

export default function UserDetails() {
  const route = useRoute();
  const { user } = route.params as RouteParams;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderDeatils>
          <Avatar source={require("../../assets/avatar1.png")} />
          <UserName>{user.username}</UserName>
        </HeaderDeatils>

        <SectionArea>
          <SectionTitle>Informações Pessoais:</SectionTitle>
          <FontAwesome name="user" size={24} color="rgba(51, 176, 246, 1)" />
        </SectionArea>
        <Content>
          <Info>
            <TextLabel>Nome:</TextLabel>
            <TextContent>{user.name}</TextContent>
          </Info>
          <Info>
            <TextLabel>Username:</TextLabel>
            <TextContent>{user.username}</TextContent>
          </Info>
          <Info>
            <TextLabel>Telefone:</TextLabel>
            <TextContent>{user.phone}</TextContent>
          </Info>
          <Info>
            <TextLabel>Website:</TextLabel>
            <TextContent>{user.website}</TextContent>
          </Info>
          <Info>
            <TextLabel>Email:</TextLabel>
            <TextContent>{user.email}</TextContent>
          </Info>
        </Content>

        <SectionArea>
          <SectionTitle>Endereço:</SectionTitle>
          <MaterialIcons name="house" size={30} color="rgba(51, 176, 246, 1)" />
        </SectionArea>

        <Content>
          <Info>
            <TextLabel>Rua:</TextLabel>
            <TextContent>{user.address.street}</TextContent>
          </Info>
          <Info>
            <TextLabel>Suíte:</TextLabel>
            <TextContent>{user.address.suite}</TextContent>
          </Info>
          <Info>
            <TextLabel>Cidade:</TextLabel>
            <TextContent>{user.address.city}</TextContent>
          </Info>
          <Info>
            <TextLabel>CEP:</TextLabel>
            <TextContent>{user.address.zipcode}</TextContent>
          </Info>
          <Info>
            <TextLabel>Latitude:</TextLabel>
            <TextContent>{user.address.geo.lat}</TextContent>
          </Info>
          <Info>
            <TextLabel>Longitude:</TextLabel>
            <TextContent>{user.address.geo.lng}</TextContent>
          </Info>
        </Content>

        <SectionArea>
          <SectionTitle>Empresa</SectionTitle>
          <MaterialIcons name="business-center" size={30} color="rgba(51, 176, 246, 1)" />
        </SectionArea>
        <Content>
          <Info>
            <TextLabel>Nome:</TextLabel>
            <TextContent>{user.company.name}</TextContent>
          </Info>
          <Info>
            <TextLabel>Setor:</TextLabel>
            <TextContent>{user.company.bs}</TextContent>
          </Info>
          
        </Content>
      </ScrollView>
    </Container>
  );
}
