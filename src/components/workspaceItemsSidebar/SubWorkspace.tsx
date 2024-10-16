interface ISubWorkspaceProps {
    message: string
}

const SubWorkspace: React.FC<ISubWorkspaceProps> = ({message}) => {
    return (
        <div className="mr-8 hover:bg-[#E9F9FF] pr-1.5 py-1 rounded-[4px] cursor-pointer">
            {message}
        </div>
        // check
    );
};

export default SubWorkspace;