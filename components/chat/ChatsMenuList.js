import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const ChatsMenuList = ({ chatMenu }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.chat_container}>
          <Image source={{ uri: chatMenu.image }} style={styles.chat_image} />
          <Text style={styles.chat_name}>{chatMenu.name}</Text>
        </View>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/96/FFFFFF/forward.png",
          }}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    borderRadius: 25,
    height: 50,
    width: "90%",
    marginLeft: "5%",
    marginVertical: 10,
  },
  chat_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chat_image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 20,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  chat_name: {
    color: "white",
    marginLeft: 20,
  },
  arrow: {
    width: 40,
    height: 40,
  },
});

export default ChatsMenuList;
