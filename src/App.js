import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/header/header";
import SideBar from "./component/sideBar/sideBar";
import Home from "./component/Home/Home";
import Login from "./component/Pages/Login/Login";
import Signup from "./component/Pages/Signup/Signup";
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import Footer from "./component/Footer/Footer";
import MobileView from "./component/MobileView/MobileView";
import ArtistDashboard from "./component/Pages/Artist Dashboard/ArtistDashboard";
const App = () => {
  let dispatch = useDispatch();
  let cu = useSelector((store) => store.userSection);
  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.devhelper.co.uk/Api/Users/SelectForThisUser",
        headers: {
          Authorization: "Bearer " + userLogin.token,
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data.User, "====>");
          localStorage.setItem("uname", response.data.User.usr_firstname);
          localStorage.setItem("email", response.data.User.usr_email);
          localStorage.setItem("usrno", response.data.User.usr_primary_number);
          localStorage.setItem("lastname", response.data.User.usr_lastname);
          localStorage.setItem("role", response.data.User.usr_role);
          localStorage.setItem("gender", response.data.User.usr_gender);
          localStorage.setItem("usrid", response.data.User.usr_id);

          dispatch({
            type: "LoginUser",
            payload: response.data.User,
          });
        })
        .catch(function (error) {
          console.log(error);
          dispatch({
            type: "logOut",
          });
          localStorage.clear("userData");
          localStorage.clear("userLogin");
          window.location.href = "/";
        });
    }
  }, []);

  return (
    <div className="mainDiv">
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/labeldashboard/*" element={<ArtistDashboard />} />
        </Routes>
        <Footer />
        <MobileView />
      </BrowserRouter>
    </div>
  );
};

export default App;
