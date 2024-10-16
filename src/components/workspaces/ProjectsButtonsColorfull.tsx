interface IWorkSapceButtons {
    className: string;
    message: string
}

const ProjectsButtonsColorfull: React.FC<IWorkSapceButtons> = ({className, message}) => {
    return (
        <button
            className={`font-extrabold text-white items-center justify-center py-7 px-16 rounded-2xl bg-gradient-to-bl cursor-pointer ${className}`}
            style={{boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)"}}>
            {message}
        </button>
    );
};

export default ProjectsButtonsColorfull;