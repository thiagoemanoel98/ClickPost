import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/pages/Home";
import Routes from "./src/routes";
import { PostsProvider } from "./src/context/PostContext";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <PostsProvider>
          <Routes />
        </PostsProvider>
        <StatusBar style="light" translucent={false} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
