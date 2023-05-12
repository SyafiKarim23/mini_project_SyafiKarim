import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://6430e8fbd4518cfb0e573b49.mockapi.io/",
});

export const uploader = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
});
