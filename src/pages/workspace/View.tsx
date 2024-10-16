// import React from "react";
// import SidebarMain from "../../../../component-T/SidebarMain";
// import List from "./List";

// const View: React.FC = () => {
//   return (
//     <div className="flex flex-row">
//       <div className=" w-[340px]">
//         <SidebarMain />
//       </div>
//       <div className="mt-4">
//         <List />
//       </div>
//     </div>
//   );
// };

// export default View;

import React from "react";
import SidebarMain from "../newBoard/SidebarMain.tsx";
import List from "./List";

const View: React.FC = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 w-[340px]">
        <SidebarMain />
      </div>
      <div className="col-span-3">
        <List />
      </div>
    </div>
  );
};

export default View;
