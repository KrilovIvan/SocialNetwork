import React from "react";
import "./App.css";
import HeaderContaner from "./components/Header/HeaderContaner";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContaner from "./components/Dialogs/DialogsContaner";
import NavbarContaner from "./components/Navbar/NavbarContaner";
import FindUsersContaner from "./components/FindUsers/FindUsersContaner";
import ProfileContanerCont from "./components/Profile/ProfileContanerCont";
import Login from "./components/Login/Login";
import FriendsContaner from "./components/Friends/FriendsContaner";
const App = (props) => {
  return (
    <BrowserRouter>
      <HeaderContaner />
      <div className="appWrapper">
        <NavbarContaner />
        <div className="appWrapperContent">
          <Routes>
            <Route element={<Login />} path={"/login"} />
            <Route element={<ProfileContanerCont />} path={"/profile"} />
            <Route
              element={<ProfileContanerCont />}
              path={"/profile/:userId"}
            />
            <Route element={<DialogsContaner />} path="/dialogs" />
            <Route element={<News />} path="/news" />
            <Route element={<Music />} path="/music" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<FindUsersContaner />} path="/findusers" />
            <Route element={<FriendsContaner />} path="/friends" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
