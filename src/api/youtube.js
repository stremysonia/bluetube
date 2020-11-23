import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: "AIzaSyAX9hv65orxnujSHy75etm9Nz0TfLPiCSs",
  },
});
