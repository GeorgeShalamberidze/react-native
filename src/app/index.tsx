import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import ListItem from "../components/listItem";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const days = [...Array(24)].map((_, idx) => idx + 1);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.content}
        renderItem={({ item }) => <ListItem day={item} />}
      />
      <Text>qweqwe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    gap: 15,
  },
});
