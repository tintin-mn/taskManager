import React from "react";
import NewContent from "./NewContent";
import NewFooter from "./NewFooter";
import NewHeader from "./NewHeader";

const NewTask: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form className=" w-[1153px] rounded-[20px] bg-white  shadow-lg">
        <div className="m-8 flex flex-col">
          <NewHeader />
          <NewContent />
          <NewFooter />
        </div>
      </form>
    </div>
  );
};

export default NewTask;
