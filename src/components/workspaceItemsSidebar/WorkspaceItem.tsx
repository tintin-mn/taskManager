import dots from "/componentT/dots.svg"
import SubWorkspace from "./SubWorkspace.tsx";
import SquareColorfull from "../basicComponents/SquareColorfull.tsx";

interface IWorkspaceProps {
    message: string;
    className:string
}

const WorkspaceItem: React.FC<IWorkspaceProps> = ({message, className}) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                    <SquareColorfull className={`${className}`}/>
                    <span>{message}</span>
                </div>
                <img src={dots} alt="icon" className="cursor-pointer"/>
            </div>
            <div>
                <SubWorkspace message={"پروژه اول"}/>
            </div>
        </>
    );
};

export default WorkspaceItem;