import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import Category from "./components/Category";
import Python from "./components/Python";
import "./App.css";

function App() {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async () => {
    const API = `${process.env.REACT_APP_API_KEY}`;
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: `${API}`,
      },
    });
    setVideo(resp.data.items);
    setSelectedVideo(resp.data.items[0]);

    console.log(resp.data.items);
  };

  return (
    <div>
      <div>
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <VideoDetail video={selectedVideo} />
      </div>
      <div>
        <VideoList video={video} />
      </div>
    </div>
  );
}

export default App;
