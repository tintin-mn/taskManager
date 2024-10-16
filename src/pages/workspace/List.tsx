import React from "react";
import { workspacesList } from "../../components/component-A/DataFakeTest.tsx";
import WorkspacesTitles from "../../components/workspaces/WorkspacesTitles.tsx";
import ProjectsButtonsColorfull from "../../components/workspaces/ProjectsButtonsColorfull.tsx";
import AddNewProjectButton from "../../components/basicComponents/Buttons/AddNewProjectButton.tsx";

const List: React.FC = () => {
  return (
    <div className="w-[1100px] h-[1024px] ">
      <div className="h-[764px] w-[1360px] mr-6 overflow-scroll mt-[64px]">
        {workspacesList.map((workspace, index) => (
          <div key={index} className="border-b mb-4">
            <WorkspacesTitles title={workspace.title} />
            {workspace.projects.length > 0 ? (
              <ul className="flex whitespace-nowrap">
                {workspace.projects.map((project, idx) => (
                  <ProjectsButtonsColorfull
                    key={idx}
                    message={project}
                    className={`from-${workspace.color}-primary to-${workspace.color}-primary/50 m-8`}
                  />
                ))}
              </ul>
            ) : (
              <ul className="flex whitespace-nowrap">
                <div className="w-[200px] h-[76px] m-8">
                  <AddNewProjectButton color={workspace.color} />
                </div>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
