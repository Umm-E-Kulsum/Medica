import React, { useContext } from "react";

import { videoSocket } from "../../socket/videoSocket.js";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(videoSocket);

  return (
    <>
      {stream && (
        <>
          <p>{name || "Name"}</p>
          <video muted ref={myVideo} autoPlay />
        </>
      )}
      {callAccepted && !callEnded && (
        <>
          <p>{call.name || "Name"}</p>
          <video ref={userVideo} autoPlay />
        </>
      )}
    </>
  );
};

export default VideoPlayer;
