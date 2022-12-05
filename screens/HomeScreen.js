import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import { Divider } from "react-native-elements";
import Footer from "../components/home/Footer";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const LocalRoute = () => (
  <ScrollView>
    {POSTS.map((post, index) => (
      <Post post={post} key={index} />
    ))}
  </ScrollView>
);

const GlobalRoute = () => (
  <ScrollView>
    {POSTS.map((post, index) => (
      <Post post={post} key={index} />
    ))}
  </ScrollView>
);

const renderScene = SceneMap({
  first: LocalRoute,
  second: GlobalRoute,
});

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      renderLabel={({ focused, route }) => {
        return <Text>{route.title}</Text>;
      }}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
    />
  );
};

const HomeScreen = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Local (Bangalore) 📍" },
    { key: "second", title: "Global 🌏" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  indicatorStyle: {
    backgroundColor: "#8000FF",
    padding: 2,
  },
});

export default HomeScreen;
