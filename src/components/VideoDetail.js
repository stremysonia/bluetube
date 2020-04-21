import React from "react";
import Iframe from "react-iframe";
import CircularProgress from "@material-ui/core/CircularProgress";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <CircularProgress disableShrink />;
  }

  console.log(video);
  return (
    <div id="mainVidDiv">
      {video &&
        video.map((item) => {
          return (
            <div>
              <Iframe
                frameBorder="0"
                height="200px"
                width="200px"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
              ></Iframe>
              <div>
                <h3>{item.snippet.title}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default VideoDetail;
