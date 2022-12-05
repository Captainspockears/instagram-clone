import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const About = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.about_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button style={styles.button} title="+ Follow" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  about_container: { marginHorizontal: 20 },
  title: { color: "white", fontSize: 50, fontFamily: "sans-serif-condensed" },
  description: { color: "white" },
});

export default About;
