import React from "react";
import ItemGroup from "./ItemGroup";

const GROUPS = [
  {
    title: "communty",
    items: [
      {
        path: "#",
        name: "News",
        icon: "far fa-newspaper"
      },
      {
        path: "#",
        name: "Resource Center",
        icon: "far fa-newspaper"
      },
      {
        path: "#",
        name: "Cheat Sheets",
        icon: "far fa-newspaper"
      },
      {
        path: "#",
        name: "Open Courses",
        icon: "far fa-newspaper"
      },
      {
        path: "#",
        name: "Podcast",
        icon: "far fa-newspaper"
      },
      {
        path: "#",
        name: "Chat",
        icon: "far fa-newspaper"
      }
    ]
  },
  {
    title: "datacamp",
    items: [
      {
        path: "#",
        name: "Official Blog",
        icon: "far fa-newspaper"
      }
    ]
  }
];
const Sidebar = () => {
  return (
    <div>
      <div>DataCamp</div>
      {GROUPS.map(group => (
        <ItemGroup group={group} />
      ))}
    </div>
  );
};

export default Sidebar;
