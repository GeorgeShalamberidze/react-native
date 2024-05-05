import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const OnboardingScreen = () => {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Track every transaction</Text>
      <Text style={styles.description}>Description</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {},
  image: {},
  description: {},
});
