import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
const getTodos = () => {
  return api.get("/todos");
};
export { getTodos };
