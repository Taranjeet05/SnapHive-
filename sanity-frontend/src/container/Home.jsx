import { useState, useRef, useEffect } from "react";
import {HiMenu} from "react-icons/hi";
import {AiFiLLCloseCircle} from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { SideBar, UserProfile } from "../components";
import Pins from "./Pins";
import {client} from "../client";
import logo from "../assets/logo.png";

const Home = () => {
  return <div className="font-extrabold">Welcome to Home page</div>;
};

export default Home;
