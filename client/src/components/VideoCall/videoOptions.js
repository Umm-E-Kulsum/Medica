import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { videoSocket } from "../../socket/videoSocket.js";

export default (props) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(videoSocket);
  const [idToCall, setIdToCall] = useState("");

  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        Account Info
        <input
          type="text"
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            e.preventDefault();
          }}
        />
        <CopyToClipboard text={me}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }} 
          >
            Copy Your ID
          </button>
        </CopyToClipboard>
        Make a call
        <input
          type="text"
          label="ID to call"
          value={idToCall}
          onChange={(e) => {
            setIdToCall(e.target.value);
            e.preventDefault();
          }}
        />
        {callAccepted && !callEnded ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              leaveCall();
            }}
          >
            Hang Up
          </button>
        ) : (
          <button
            onClick={(e) => {
              callUser(idToCall);
              e.preventDefault();
            }}
          >
            Call
          </button>
        )}
      </form>
      {props.children}
    </React.Fragment>
  );
};
