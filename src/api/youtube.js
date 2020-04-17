import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: "AIzaSyBj3J88Ee2LnBYl2TMrz82SebxBgGp9-KU",
  },
});
