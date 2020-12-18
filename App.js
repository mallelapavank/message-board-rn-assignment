import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text } from "react-native";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
