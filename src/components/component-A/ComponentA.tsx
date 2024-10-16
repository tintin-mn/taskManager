import React, { StrictMode } from "react";
// import PersonalProfile from "./profile/PersonalProfile";
// import AccountProfile from "./profile/AccountProfile";
// import SidbarProfile from "./profile/SidbarProfile";
// import SettingProfile from "./profile/SettingProfile";
// import DarkLightSwitch from "./commons/DarkAndLightModeSwitch";
// import ShareTasks from "./task/ShareTask";
// import ColorCheckboxesList from "./commons/baseChekboxColorList";
// import FlagSVG from "./commons/baseFlagSimple";
// import TaskFormData from "./task/TaskForm";
// import InputButton from "../basicComponents/Buttons/InputWithButton";
// import SimpleButton from "../basicComponents/Buttons/SimpleButton";
// import PermissionUsers from "./task/PermissionUsers";
// import Tag from "./commons/baseTag";
// import NewTask from "./task/NewTask";
// import PriorityOptions from "./task/PriorityOptions";
// import TagsOptions from "./tags/TagsOptions";
// import TagsColor from "./tags/TagsColor";
// import TagsView from "./tags/TagsView";
import WorkspaceOptions from "../workspaceOptions/WorkspaceOptions";
import ProjectOptions from "../projectOption/ProjectOption";
// import WorkspacesView from "../../pages/workspace/View";
import AddButtonSVGIcon from "../basicComponents/Buttons/addInCalenderIcon";
import Profile from "../../pages/profile/profile";
// import LabelColor from "../tag/LabelColor";
import Information from "../../pages/taskInformation/Information";
// import NewTask from "./task/NewTask";
import View from "../../pages/workspace/View";
import NewTask from "../../pages/task/New";
// import TagsColor from "./tags/TagsColor";
import ColumnOption from "../columnOption/ColumnOption";
import ShareWorkspace from "../shareWorkspace/ShareWorkspace";
import ShareProject from "../shareProject/ShareProject";

const ArezooPage: React.FC = () => (
  <StrictMode>
    <div>
      <Profile />
      <hr className="border-t-2 border-black " />
      <Information />
      <hr className="border-t-2 border-black " />
      <NewTask />
      <hr className="border-t-2 border-black " />
      <View />
      <hr className="border-t-2 border-[15px]  border-green-500" />

      {/* <div className="flex h-screen items-center justify-center">
        <PersonalProfile></PersonalProfile>
      </div> */}

      {/* <hr className="border-t-2 border-black font-bold " /> */}

      {/* <div className="flex h-screen items-center justify-center">
        <AccountProfile></AccountProfile>
      </div> */}

      {/* <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen ">
        <SidbarProfile></SidbarProfile>
      </div> */}

      {/* <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen ">
        <SettingProfile></SettingProfile>
      </div> */}

      {/* <hr className="border-t-2 border-black font-bold" /> */}

      <div className="flex items-center justify-center ">
        <AddButtonSVGIcon />
        {/* <DarkLightSwitch></DarkLightSwitch> */}
        {/* <ColorCheckboxesList></ColorCheckboxesList> */}
        {/* <InputButton
          onSubmit={(email: string) => {
            console.log("Email ", email);
          }}
        /> */}
        {/* <SimpleButton
          children={"کپی لینک"}
          onClick={() => {
            console.log("سلام فعلا من کپی لینکم");
          }}
        />
        <SimpleButton
          children={"دسترسی کامل"}
          onClick={() => {
            console.log("سلام فعلا من کپی لینکم");
          }}
          isOpen={true}
        /> */}
        {/* <FlagSVG fillColor="blue-primary" className="size-[34px]" />

        <FlagSVG
          fillColor="red-primary"
          className="size-[34px] border-2 rounded-full border-dotted border-red-primary"
        />

        <Tag
          text={"میانترم"}
          className={"bg-orange-secondary text-orange-primary"}
        /> */}
      </div>

      {/* <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen items-center justify-center ">
        <TaskFormData />
      </div> */}

      {/* <hr className="border-t-2 border-black font-bold" />

      <div>
        <WorkspacesView />
      </div>
 */}
      <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen items-center justify-center">
        {/* <TagsColor /> */}
        {/* <TagsOptions /> */}
        {/* <TagsView /> */}
        {/* <PriorityOptions /> */}
        {/* <PermissionUsers
          isOpen={true}
          onClose={() => {
            console.log("لیست دسترسی ها");
          }}
        /> */}
        {/* <LabelColor /> */}
      </div>

      <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen items-center justify-center">
        <ShareProject />
        <ShareWorkspace />
        {/* <ShareTasks /> */}
      </div>

      <hr className="border-t-2 border-black font-bold" />

      <div className="flex h-screen items-center justify-center">
        <WorkspaceOptions />
        <ProjectOptions />
        <ColumnOption />
      </div>
    </div>
  </StrictMode>
);

export default ArezooPage;
