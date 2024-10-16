import openProject from "/componentT/open-project.svg";

interface IProjectName {
    message: string;
}
const ProjectName: React.FC<IProjectName> = ({message}) => {
    return (
        <div className="flex items-center gap-x-2 justify-start font-extrabold text-xl">
            <img src={openProject} alt="icons"/>
            <p>{message}</p>
        </div>
    );
};

export default ProjectName;