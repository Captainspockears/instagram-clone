import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import Header from "../components/search/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import Project from "../components/project/Project";
import { POSTS } from "../data/posts";
import { Divider } from "react-native-elements";
import Footer from "../components/home/Footer";
import About from "../components/topic/About";
import { CHATSMENULIST } from "../data/chatsmenulist";
import { PROJECTS } from "../data/projects";
import ChatsMenuList from "../components/chat/ChatsMenuList";

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

const ChatsRoute = () => (
  <View>
    <TextInput
      style={styles.searchChat}
      placeholder="Find chats and people in this topic"
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
    />
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: "white", marginLeft: 20, marginBottom: 10 }}>
        ✨ Trending
      </Text>
    </View>
    <Stories />
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: "white", marginLeft: 20, marginBottom: 10 }}>
        👥 Your Chats
      </Text>
    </View>
    <ScrollView>
      {CHATSMENULIST.map((chatMenu, index) => (
        <ChatsMenuList chatMenu={chatMenu} key={index} />
      ))}
    </ScrollView>
  </View>
);

const ProjectsRoute = () => (
  <ScrollView>
    {PROJECTS.map((post, index) => (
      <Project post={post} key={index} />
    ))}
  </ScrollView>
);

const renderScene = SceneMap({
  first: LocalRoute,
  second: GlobalRoute,
  third: ChatsRoute,
  fourth: ProjectsRoute,
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
      scrollEnabled={true}
      tabStyle={{ width: 200 }}
    />
  );
};

const Topic = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState("");
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Local (Bangalore) 📍" },
    { key: "second", title: "Global 🌏" },
    { key: "third", title: "Chats 💬" },
    { key: "fourth", title: "Projects 🧰" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        placeholder={route.params.topic.name}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <About
        title={route.params.topic.name}
        description={route.params.topic.description}
      />
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
  searchChat: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    backgroundColor: "#262626",
    borderRadius: 25,
    paddingLeft: 20,
    color: "white",
    marginLeft: "5%",
    marginBottom: 10,
  },
});

export default Topic;
