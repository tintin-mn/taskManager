const NewTaskButtonInList = () => {
    return (
        <div
            className="text-brand-primary text-xs rounded-lg border-2 border-brand-primary flex items-center justify-center gap-x-1 cursor-pointer hover:bg-brand-primary/10 py-2 font-extrabold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
                      stroke="#208D8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V16" stroke="#208D8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 12H8" stroke="#208D8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/*<img src={add} alt="icon"/>*/}
            <span>ساختن تسک جدید</span>
        </div>
    );
};

export default NewTaskButtonInList;
