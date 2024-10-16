import ColumnLabelTitle from "../columnLabelTitle/ColumnLabelTitle.tsx";
import TaskCard from "../taskCard/TaskCard.tsx";
import NewTaskButton from "../../pages/newBoard/NewTaskButton.tsx";
import NewTaskButtonInList from "../newTaskButtonInList/newTaskButtonInList.tsx";
import ProjectName from "../projectName/ProjectName.tsx";
import TaskStatusTag from "../taskStatusTag/TaskStatusTag.tsx";
import TaskQuantity from "../basicComponents/TaskQuantity.tsx";
import TableTasks from "../tableTask/TableTasks.tsx";
import NewBoardButton from "../newBoardButton/NewBoardButton.tsx";
import WorkspacesTitles from "../workspaces/WorkspacesTitles.tsx";
import ProjectsButtonsColorfull from "../workspaces/ProjectsButtonsColorfull.tsx";
import ProjectList from "../workspaces/ProjectList.tsx";
import ProjectSection from "../workspaces/ProjectSection.tsx";
import NewWorkspaceModal from "../newWorkspaceModal/NewWorkspaceModal.tsx";
import ChooseTheme from "../newWorkspaceModal/ChooseTheme.tsx";
import ReviewInfo from "../newWorkspaceModal/ReviewInfo.tsx";
import NewProject from "../newProject/NewProject.tsx";
import NewBoard from "../../pages/newBoard/newBoard.tsx";
import ArrowDown from "../arrowDown/ArrowDown.tsx";

const ComponentT = () => {
    return (
        <div className="flex items-center flex-col gap-y-8 h-full">
                <NewBoard/>
            {/* <div className="w-full h-1 bg-black"/>
            <SidebarMain/> */}
            {/* <div className="w-full h-1 bg-black"/> */}
            {/* <NavbarTop/> */}
            {/* <div className="w-full h-1 bg-black"/> */}
            {/* <Toolbar/> */}
            <div className="w-full h-1 bg-black"/>
            <ColumnLabelTitle message={"open"} className="border-orange-primary"/>
            <ColumnLabelTitle message={"In Progress"} className="border-indigo-primary"/>
            <ColumnLabelTitle message={"Pending"} className="border-yellow-primary"/>
            <ColumnLabelTitle message={"Done"} className="border-green-primary"/>
            <div className="w-full h-1 bg-black"/>
            <TaskCard/>
            <div className="w-full h-1 bg-black"/>
            <NewTaskButton/>
            <div className="w-full h-1 bg-black"/>
            <NewTaskButtonInList/>
            <div className="w-full h-1 bg-black"/>
            <div>Project Page</div>
            <div className="w-full h-1 bg-blue-600"/>
            <ProjectName message={"پروژه اول"}/>
            <div className="w-full h-1 bg-blue-600"/>
            <TaskStatusTag message={"pending"} className="bg-pink-primary"/>
            <TaskStatusTag message={"In Progress"} className="bg-orange-primary"/>
            <TaskStatusTag message={"Done"} className="bg-green-primary"/>
            <div className="w-full h-1 bg-blue-600"/>
            <TaskQuantity number={2}/>
            {/*number is not persian*/}
            <div className="w-full h-1 bg-blue-600"/>
            <TableTasks/>
            <div className="w-full h-1 bg-blue-600"/>
            <NewBoardButton/>
            <div className="w-full h-1 bg-blue-600"/>
            <WorkspacesTitles title={"درس مدیریت پروژه"}/>
            <div className="w-full h-1 bg-blue-600"/>
            <ProjectsButtonsColorfull message={"پروژه اول"} className={"from-green-primary to-green-primary/50"}/>
            <ProjectsButtonsColorfull message={"پروژه دوم"} className={"from-yellow-primary to-yellow-primary/50"}/>
            <ProjectsButtonsColorfull message={"پروژه سوم"} className={"from-blue-primary to-blue-primary/50"}/>
            <div className="w-full h-1 bg-blue-600"/>
            <ProjectList/>
            <div className="w-full h-1 bg-blue-600"/>
            <div className="w-full h-1 bg-blue-600"/>
            <ProjectSection>
                <WorkspacesTitles title={"پروژه اول"}/>
                <ProjectList/>
            </ProjectSection>
            <div className="w-full h-1 bg-blue-600"/>
            <NewWorkspaceModal/>
            <div className="w-full h-1 bg-blue-600"/>
            <ChooseTheme/>
            <div className="w-full h-1 bg-blue-600"/>
            <ReviewInfo/>
            <div className="w-full h-1 bg-blue-600"/>
            <NewProject/>
            <div className="w-full h-1 bg-blue-600"/>
            <ArrowDown/>
            <div className="w-full h-1 bg-blue-600"/>
        </div>
    );
};

export default ComponentT;