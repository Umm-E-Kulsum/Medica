import { useContext } from "react";

import "./App.css";

import { DiseaseLib } from "./components/Library/diseaseLib";
import VideoPlayer from "./components/VideoCall/";
import Appointment from "./components/Appointment/index.js";
import { Booking } from "./components/Booking/Booking";
import Organs from "./components/Organs";
import { Route, Routes } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import Login from "./components/Forum/pages/login/Login.jsx";
import TopBar from "./components/Forum/component/topbar/TopBar.jsx";
import Write from "./components/Forum/pages/write/Write.jsx";
import Settings from "./components/Forum/pages/settings/Settings.jsx";
import Register from "./components/Forum/pages/register/Register.jsx";
import Home from "./components/Forum/pages/home/Home.jsx";
import Single from "./components/Forum/pages/single/Single.jsx";
import { Context } from "./components/Forum/context/Context.js";
import { HomePage } from "./components/HomePage/HomePage";
import FAQ from "./components/FAQ";
import { Error404 } from "./components/Error/Error404";
import ChatFeed from "./components/Chat/ChatFeed.jsx";
import LoginForm from "./components/Chat/LoginForm";

function App() {
  // const { user } = localStorage.getItem("isLogged");
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          exact
          path="/chat"
          element={
            <>
              <TopBar />
              <Home />
            </>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/organs" element={<Organs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/diseaseLib" element={<DiseaseLib />} />
        <Route path="/interact" element={<VideoPlayer />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/connect"
          element={
            <>
              {!localStorage.getItem("username") ? (
                <LoginForm />
              ) : (
                <ChatEngine
                  height="100vh"
                  projectID="28c29729-0eb8-480c-99e5-af28279dd395"
                  userName="daku"
                  userSecret="12345"
                  renderChatFeed={(chatAppProps) => (
                    <ChatFeed {...chatAppProps} />
                  )}
                  onNewMessage={() =>
                    new Audio(
                      "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
                    ).play()
                  }
                />
              )}
            </>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
