import WorkspaceItem from "../../components/workspaceItemsSidebar/WorkspaceItem.tsx";
import logo from "/componentT/logo.svg";
import search from "/componentT/search.svg";
import downArrow from "/componentT/down-arrow.svg";
import add from "/componentT/add.svg";
import logout from "/componentT/logout.svg";
import SubWorkspace from "../../components/workspaceItemsSidebar/SubWorkspace.tsx";
import React from "react";
import DarkAndLightModeSwitch from "../../components/DarkAndLightModeSwitch/DarkAndLightModeSwitch.tsx";
import { Link, useNavigate } from "react-router-dom";

const SidebarMain: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/workspaces-projects");
  };

  return (
    <nav className="border-l border-l-[#AAAAAA]">
      <div className="w-[340px] h-screen flex flex-col justify-between py-10 px-4">
        <div className="pr-12 flex flex-col gap-y-9">
          <img src={logo} alt="logo" className="w-56" />
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
              <p>ورک اسپیس ها</p>
              <img src={downArrow} alt="icon" className="cursor-pointer" />
            </div>
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="جستجو کنید"
                className="w-full text-xs pr-12 py-3 bg-[#F6F7F9] focus:outline-brand-primary rounded-[4px]"
              />
              <img
                src={search}
                alt="icon"
                className="absolute pr-4 cursor-pointer"
              />
            </div>
            <div className="w-full py-2 flex items-center justify-center gap-x-2 text-xs bg-[#D3D3D3] rounded-md hover:cursor-pointer">
              <img src={add} alt="addicon" />
              <p>ساختن ورک‌اسپیس جدید</p>
            </div>
            {/*how handle subWorkspace*/}
            {/*1*/}
            <div className="gap-y-4 flex flex-col">
              <WorkspaceItem
                message="درس مدیریت پروژه"
                className="bg-grape-primary"
              />
              <WorkspaceItem
                message="کارهای شخصی"
                className="bg-lime-primary"
              />
              {/*2*/}
              <div className="flex flex-col gap-y-4">
                <WorkspaceItem
                  message="درس طراحی الگوریتم"
                  className="bg-brand-primary"
                />
                <SubWorkspace message={"پروژه من"} />
                {/*check*/}
              </div>
            </div>
            <button
              className="text-brand-primary text-sm py-2 rounded-lg border-2 border-brand-primary flex items-center justify-center cursor-pointer hover:bg-brand-primary/10"
              onClick={handleButtonClick}
            >
              ساختن پروژه جدید
            </button>
          </div>
        </div>
        <div className="px-8 flex flex-col gap-y-4">
          <div className="w-full flex items-center gap-x-2">
            <div className="text-indigo-primary bg-indigo-secondary inline rounded-full p-2 text-xs cursor-pointer">
              TT
            </div>
            <Link to={"/profile"}>
              <p className="text-base">تین تین</p>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-1 items-center cursor-pointer">
              <img src={logout} alt="logout-logo" />
              <span className="text-base text-[#818181]">خروج</span>
            </div>
            <DarkAndLightModeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarMain;
