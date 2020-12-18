import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "../screens/PostsScreen";
import { colors } from "../constants";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primaryColor },
        headerTitleStyle: {
          // alignSelf: "center",
          color: "#FFFFFF",
        },
      }}
    >
      <Stack.Screen name="Message Board" component={PostsScreen} />
    </Stack.Navigator>
  );
}
