import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.story}>
            <View
              style={{
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#c5c9d1",
                opacity: 0.9,
              }}
            >
              <Image
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1021064984934207488/drvApyjt_400x400.jpg",
                }}
                style={{
                  width: 81,
                  height: 81,
                  borderRadius: 50,
                  borderWidth: 5,
                  borderColor: "black",
                }}
              ></Image>
            </View>
            <Text style={{ color: "white" }}>Your story</Text>
          </View>
        </TouchableOpacity>
        {USERS.map((user, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.story}>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "#ff8501",
                  opacity: 0.9,
                }}
              >
                <Image
                  source={{ uri: user.image }}
                  style={styles.image}
                ></Image>
              </View>

              <Text style={{ color: "white" }}>
                {user.name.length > 13
                  ? user.name.slice(0, 10) + "..."
                  : user.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
  },
  story: {
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default Stories;
