import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostListScreen from "../screens/PostListScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import { colors } from "../constants";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primaryColor },
        headerTitleStyle: {
          color: "#FFFFFF",
        },
      }}
    >
      <Stack.Screen name="Message Board" component={PostListScreen} />
      <Stack.Screen name="Post" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}
