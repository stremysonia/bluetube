import React from "react";
import Iframe from "react-iframe";
import CircularProgress from "@material-ui/core/CircularProgress";

const VideoList = ({ video }) => {
  if (!video) {
    return <CircularProgress disableShrink />;
  }

  return (
    // <div>
    //   {video &&
    //     video.map((item) => {
    //       return (
    //         <div>
    //           <Iframe
    //             frameBorder="0"
    //             height="200px"
    //             width="200px"
    //             src={vidSrc}
    //           ></Iframe>
    //           <div>
    //             <h3>{item.snippet.title}</h3>
    //           </div>
    //         </div>
    //       );
    //     })}
    // </div>
    <div></div>
  );
};
export default VideoList;
