import React from "react";

interface IWorkspaceTitles {
    title: string;
}
const WorkspacesTitles: React.FC<IWorkspaceTitles> = ({title}) => {
    return (
        <div className="text-2xl font-extrabold">
            {title}
        </div>
    );
};

export default WorkspacesTitles;