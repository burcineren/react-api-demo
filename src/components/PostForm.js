import React, { useEffect, useState } from "react";
import { createPosts, updatePosts } from "../services/postService";
import { Button } from "@radix-ui/themes";
export default function PostForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingPost) {
      console.log("editingPost:::");
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingPost]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      editPost();
    } else {
      addPost();
      setTitle("");
      setBody("");
      setEditingPost(null);
    }
  };

  const addPost = () => {
    createPosts({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((error) => console.error(error));
  };
  const editPost = () => {
    updatePosts(editingPost.id, { title, body })
      .then((response) => {
        setPosts(
          posts.map((post) =>
            post.id === editingPost.id ? response.data : post
          ),
          response.data
        );
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <Button type="submit">{editingPost ? "Edit Post" : "Add Post"}</Button>
      </form>
    </>
  );
}
