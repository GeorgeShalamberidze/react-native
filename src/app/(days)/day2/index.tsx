import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />
      <Text>DayDetailsScreen</Text>

      <Link href={"/day2"} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
