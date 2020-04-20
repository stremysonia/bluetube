import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import App from "../App";

const VideoList = ({ video }) => {
  return (
    <div>
      {video &&
        video.map((item) => {
          return (
            <div>
              <h1>{item.snippet.title}</h1>
            </div>
          );
        })}
    </div>
  );
};
export default VideoList;
