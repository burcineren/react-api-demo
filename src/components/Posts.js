import React, { useEffect, useState } from "react";
import { deletePosts, getPosts, updatePosts } from "../services/postService";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete = (id) => {
    deletePosts(id);
    setPosts(posts.filter((post) => post.id !== id));
  };
  const editPost = (post) => {
    console.log("setEditingPost::", post);
    setEditingPost(post);
  };
  return (
    <div>
      <h2>Posts</h2>
      <PostForm
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() => {
                editPost(post);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(setPosts.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
