import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { MdExplore } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import Sidebar from "./Sidebar";

const SidebarButtons = [
  {
    name: "home",
    icon: <AiOutlineHome />,
    link: "homepage",
  },
  {
    name: "profile",
    icon: <CgProfile />,
    link: "profile",
  },
  {
    name: "watchlist",
    icon: <VscChecklist />,
    link: "watchlist",
  },
  {
    name: "explore",
    icon: <MdExplore />,
    link: "explore",
  },
  {
    name: "upcoming",
    icon: <AiOutlineClockCircle />,
    link: "upcoming",
  },
];

export default SidebarButtons;
