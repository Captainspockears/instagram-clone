import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Header = ({ navigation, placeholder, searchText, setSearchText }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/96/FFFFFF/back--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setSearchText(text)}
          onPressIn={() => navigation.push("Search")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  searchInput: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    backgroundColor: "#262626",
    borderRadius: 25,
    paddingLeft: 20,
    color: "white",
  },
});

export default Header;
