import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";
import UserPost from "../pages/UserPost";
import SelectUser from "../pages/SelectUser";
import NewPost from "../pages/NewPost";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          title: "Detalhes do Usuário",
          headerTintColor: "#9E9E9E",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />

      <Stack.Screen
        name="UserPost"
        component={UserPost}
        options={{
          title: "Postagem do Usuário",
          headerTintColor: "#9E9E9E",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />

      <Stack.Screen
        name="SelectUser"
        component={SelectUser}
        options={{
          title: "Selecione um usuário",
          headerTintColor: "#9E9E9E",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />

      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          title: "Nova Postagem",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      />
    </Stack.Navigator>
  );
}
