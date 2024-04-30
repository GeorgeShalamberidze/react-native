import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type listItemType = {
  day: number;
};

const ListItem = ({ day }: listItemType) => {
  return (
    <Link style={styles.user} href={`/day${day}`}>
      <View style={styles.checkbox}>
        <Text style={styles.text}>{day}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 150,
    height: 150,
    backgroundColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    borderColor: "yellow",

    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  user: {
    color: "white",
  },
});

export default ListItem;
