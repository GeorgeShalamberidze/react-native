import React from "react";
import { StyleSheet, Text, View } from "react-native";

type listItemType = {
  item: number;
};

const ListItem = ({ item }: listItemType) => {
  return (
    <View style={styles.checkbox}>
      <Text style={styles.text}>{item}</Text>
    </View>
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
});

export default ListItem;
