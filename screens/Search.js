import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../components/search/Header";
import { TOPICS } from "../data/topics";
import Recommendations from "../components/search/Recommendations";

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [recommendations, setRecommendations] = useState(TOPICS);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        placeholder="Search"
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Recommendations navigation={navigation} items={recommendations} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default Search;
