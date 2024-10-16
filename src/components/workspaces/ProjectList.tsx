import ProjectsButtonsColorfull from "./ProjectsButtonsColorfull.tsx";

const ProjectList = () => {
    return (
        <div className="w-full flex items-center justify-start gap-x-8">
            <ProjectsButtonsColorfull message={"پروژه اول"} className={"from-green-primary to-green-primary/50"}/>
            <ProjectsButtonsColorfull message={"پروژه اول"} className={"from-green-primary to-green-primary/50"}/>
            <ProjectsButtonsColorfull message={"پروژه اول"} className={"from-green-primary to-green-primary/50"}/>
        </div>
    );
};

export default ProjectList;