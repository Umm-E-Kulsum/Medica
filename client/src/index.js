import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./components/Forum/context/Context.js";

import App from "./App";
import { VideoContexProvider } from "./socket/videoSocket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoContexProvider>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </VideoContexProvider>
  </React.StrictMode>
);
