import { View, StyleSheet, FlatList, Text } from "react-native";
import React from "react";

const Recommendations = ({ navigation, items }) => {
  const ItemView = ({ item }) => {
    return (
      <Text
        onPress={() => navigation.navigate("Topic", { topic: item })}
        style={styles.recommendations_text}
      >
        {item.name}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return <View style={styles.recommendations_itemSeparatorView} />;
  };

  return (
    <View style={styles.recommendations_container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendations_container: {
    margin: 20,
  },
  recommendations_text: {
    color: "white",
    fontSize: 15,
  },
  recommendations_itemSeparatorView: {
    marginVertical: 10,
  },
});

export default Recommendations;
