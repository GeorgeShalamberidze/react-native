import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "@/components/listItem";

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
