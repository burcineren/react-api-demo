import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
const getPosts = () => {
  return api.get("/posts");
};
const deletePosts = (id) => {
  return api.delete(`/posts/${id}`);
};
const createPosts = (post) => {
  return api.post(`/posts`, post);
};
const updatePosts = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
export { getPosts, deletePosts, createPosts, updatePosts };
