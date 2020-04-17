import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import "./App.css";

function App() {
  const [video, setVideo] = useState([]);
  const [selectedvideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyBj3J88Ee2LnBYl2TMrz82SebxBgGp9-KU",
      },
    });
    setVideo(resp.data.items);
    setSelectedVideo(resp.data.items[0]);

    console.log(resp);
  };

  const handleVideoSelect = (video) => {};
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={8}>
        <Grid container spacing={10}>
          <Grid item xs={8}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={6}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
