import { Stack } from "expo-router";
import { Text } from "react-native";

const RootLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
