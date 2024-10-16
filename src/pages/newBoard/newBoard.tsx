import React, { useState } from "react";
import SidebarMain from "./SidebarMain.tsx";
import NavbarTop from "./NavbarTop.tsx";
import Toolbar from "./Toolbar.tsx";
import ListShow from "./ListShow.tsx";
import ColumnShow from "./ColumnShow.tsx";
import EventCalendar from "./EventCalendar.tsx";
import NewTaskButton from "./NewTaskButton.tsx";

const NewBoard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("ColumnShow");
  const handleComponentChange = (type: string) => {
    setActiveComponent(type);
  };

  return (
    <div className="flex flex-row">
      <div className=" w-[340px]">
        <SidebarMain />
        {/* <SidebarMain onComponentChange={handleComponentChange} /> */}
      </div>
      <div className="m-[41px]">
        <div>
          <NavbarTop
            activeComponent={activeComponent}
            onComponentChange={handleComponentChange}
          />
        </div>
        <div>
          <Toolbar></Toolbar>
        </div>
        <div className="mt-4">
          {activeComponent === "ListShow" && <ListShow />}
          {activeComponent === "ColumnShow" && <ColumnShow />}
          {activeComponent === "EventCalendar" && <EventCalendar />}
        </div>
      </div>
      <div className="relative bottom-10">
        <NewTaskButton />
      </div>
    </div>
  );
};

export default NewBoard;
