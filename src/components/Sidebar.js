import React from "react";
import "../index.css";
import SidebarButtons from "./SidebarButtons";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        {SidebarButtons.map((val, key) => (
          <li
            key={key}
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            {""}
            <div>{val.icon}</div>
            <div>{val.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
