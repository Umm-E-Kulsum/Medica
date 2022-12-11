import React from "react";

import VideoNotification from "./videoNotification";
import VideoOptions from "./videoOptions";
import VideoPlayer from "./videoPlayer";

export default () => {
  return (
    <>
      <VideoPlayer />
      <VideoOptions>
        <VideoNotification />
      </VideoOptions>
    </>
  );
};
