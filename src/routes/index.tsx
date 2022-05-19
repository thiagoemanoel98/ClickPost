import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";

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
            title: 'Detalhes do Usuário',
            headerTintColor: '#9E9E9E',
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />
       
      </Stack.Navigator>

  );
}
