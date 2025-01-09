import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
//import {AiFiLLCloseCircle} from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { SideBar, UserProfile } from "../components";
import Pins from "./Pins";
import { userQuery } from "../utils/data";
import { client } from "../client";
import logo from "../assets/logo.png";
import client from "../client";
import user from "../../../sanity-backend/schemaTypes/user";

const Home = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [data, setData] = useState(null);
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setData(data[0]); 
    });
  }, [userInfo?.googleId]); 

  return (
    <>
      <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
        <div className="hidden md:flex h-screen flex-initial">
          <SideBar />
        </div>
        <div className="flex md:hidden flex-row">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSideBar()}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
