import React, { useContext } from "react";

import { videoSocket } from "../../socket/videoSocket.js";

export default () => {
  const { answerCall, call, callAccepted } = useContext(videoSocket);
  console.log(call);
  return (
    <React.Fragment>
      <>
        {call.isReceivingCall && !callAccepted && (
          <div>
            <h1>{call.name} is calling:</h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                answerCall();
              }}
            >
              Answer
            </button>
          </div>
        )}
      </>
    </React.Fragment>
  );
};
