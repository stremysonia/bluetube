import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import Category from "./components/Category";

import "./App.css";

function App() {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const API = `${process.env.REACT_APP_API_KEY}`;
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: `${API}`,
        q: searchTerm,
      },
    });
    setVideo(resp.data.items);
    setSelectedVideo(resp.data.items[0]);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div>
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div>
        <Category onSubmit={handleSubmit} />
      </div>
      <div>
        <VideoDetail onVideoSelect={selectedVideo} video={video} />
      </div>
      <div>
        {/* <VideoList onVideoSelect={setSelectedVideo} video={video} /> */}
      </div>
    </div>
  );
}

export default App;
