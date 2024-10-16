import React, {ReactNode} from "react";

interface IProjectSection {
    children: ReactNode;
}

const ProjectSection: React.FC<IProjectSection> = ({children}) => {
    return (
        <div className="flex flex-col gap-y-8">
            {children}
        </div>
    );
};

export default ProjectSection;