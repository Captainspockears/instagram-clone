import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Post = ({ post }) => {
  return (
    <View style={post_container_styles.container}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={post_header_styles.container}>
    <View style={post_header_styles.profile_container}>
      <TouchableOpacity>
        <Image
          source={{ uri: post.profile_picture }}
          style={post_header_styles.header_image}
        />
      </TouchableOpacity>
      <Text style={post_header_styles.header_text}>{post.user}</Text>
    </View>
    <Image
      source={{
        uri: "https://img.icons8.com/material-outlined/96/FFFFFF/more.png",
      }}
      style={post_header_styles.more}
    />
  </View>
);

const PostImage = ({ post }) => (
  <View style={post_image_styles.container}>
    <Image source={{ uri: post.imageUrl }} style={post_image_styles.image} />
  </View>
);

const PostFooter = ({ post }) => (
  <View style={post_footer_styles.container}>
    {/* VOTES */}
    <View style={post_footer_styles.votes_container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/96/FFFFFF/circled-up.png",
          }}
          style={post_footer_styles.icon}
        />
      </TouchableOpacity>
      <Text style={{ color: "white" }}>100 K</Text>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/96/FFFFFF/circled-down.png",
          }}
          style={post_footer_styles.icon}
        />
      </TouchableOpacity>
    </View>

    {/* COMMENTS */}
    <TouchableOpacity>
      <View style={post_footer_styles.comments_container}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/96/FFFFFF/topic--v1.png",
          }}
          style={post_footer_styles.icon}
        />
        <Text style={{ color: "white" }}>100</Text>
      </View>
    </TouchableOpacity>

    {/* SHARE */}
    <TouchableOpacity>
      <View style={post_footer_styles.comments_container}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/96/FFFFFF/share.png",
          }}
          style={post_footer_styles.icon}
        />

        <Text style={{ color: "white" }}>Share</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const post_container_styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

const post_header_styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    paddingTop: 10,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  profile_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 20,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  header_text: {
    color: "white",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "800",
  },
  more: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 20,
  },
});

const post_image_styles = StyleSheet.create({
  container: { width: "100%", height: 450, backgroundColor: "#262626" },
  image: {
    height: "100%",
    resizeMode: "cover",
    margin: 10,
  },
});

const post_footer_styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "#262626",
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  votes_container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  comments_container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 2,
  },
});

export default Post;
