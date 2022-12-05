import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

const Footer = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={[
          "#00FFFF",
          "#17C8FF",
          "#329BFF",
          "#4C64FF",
          "#6536FF",
          "#8000FF",
        ]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 10,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></LinearGradient>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/96/FFFFFF/home--v2.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Search")}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/96/FFFFFF/compass.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/96/FFFFFF/appointment-reminders--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 30,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Footer;
