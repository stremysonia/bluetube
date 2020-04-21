import React from "react";
import Iframe from "react-iframe";

const VideoList = ({ video }) => {
  return (
    <div>
      {video &&
        video.map((item) => {
          return (
            <div>
              <div id="videoDiv">
                <Iframe
                  src={item.snippet.thumbnails.default.url}
                  width="200px"
                  height="200px"
                  border="1px solid lightgrey"
                />
                <h3>{item.snippet.title}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default VideoList;
