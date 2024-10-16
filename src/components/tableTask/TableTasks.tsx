import profile from "/componentT/image-card.svg";
import captionIcon from "/componentT/justify-right.svg";
import React, { ReactElement } from "react";
import SquareColorfull from "../basicComponents/SquareColorfull.tsx";
import { avatar } from "../component-A/DataFakeTest.tsx";
import FlagSVG from "../flagSimpleSVG/FlagSimpleSVG.tsx";

interface ITableTasks {
  id: number;
  taskTitle: string;
  image: string;
  date: string;
  priority: ReactElement;
  caption: string;
}

const TableTasks: React.FC = () => {
  const taskDatas: ITableTasks[] = [
    {
      id: 1,
      taskTitle: "این یک تیتر برای این تسک است.",
      image: profile,
      date: "6ابان",
      priority: <FlagSVG fillColor="red-primary" />,
      caption: captionIcon,
    },
    // {
    //     id: 2,
    //     taskTitle: "این یک تیتر برای این تسک است.",
    //     image: profile,
    //     date: "6ابان",
    //     priority: <FlagSVG fillColor="red-primary"/>,
    //     caption: captionIcon,
    // }
  ];

  // const headers = [
  //     {
  //         title: "اعضا"
  //     },
  //     {
  //         title: "ددلاین"
  //     },
  //     {
  //         title: "الویت"
  //     },
  //     {
  //         title: "توضیحات"
  //     },
  // ]

  return (
    <main>
      {taskDatas.map((taskData) => (
        <div className="w-full flex items- justify-between">
          <span className="flex gap-x-2 items-center pt-14">
            <SquareColorfull className="bg-orange-primary" />
            {taskData.taskTitle}
          </span>
          <table key={taskData.id} className="w-[490px] flex flex-col gap-y-2">
            <thead>
              <tr className="w-full flex items-center justify-between">
                <th className="px-4 py-2">اعضا</th>
                <th className="px-4 py-2">ددلاین</th>
                <th className="px-4 py-2">الویت</th>
                <th className="px-4 py-2">توضیحات</th>
              </tr>
            </thead>
            <tbody className="pl-8">
              <tr className="flex items-center justify-between">
                <td className="px-4 py-2">
                  <img
                    src={avatar}
                    alt="add user"
                    className="size-[34px] rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{taskData.date}</td>
                <td className="px-4 py-2 ml-6">{taskData.priority}</td>
                <td className="px-4 py-2">
                  <img src={taskData.caption} alt="icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </main>
  );
};

export default TableTasks;

////////////////// grid
// <div className="w-[986px] grid grid-cols-2 grid-rows-2">
//     <div className="flex items-center gap-x-2">
//         <ArrowDown/>
//         <TagFormat tagName="Pending" className="bg-pink-primary"/>
//         <TaskQuantity number={2}/>
//     </div>
//     <div className="flex items-center justify-between">
//         {headers.map((header) => (
//             <span>{header.title} </span>
//         ))}
//     </div>
//     <div className="bg-green-primary col-span-2 w-[986px]">
//         {taskDatas.map((taskData) => (
//             <div className="flex items-center justify-between">
//                 <div>
//                     <p className="flex gap-x-2 items-center text-nowrap">
//                         <SquareColorfull
//                             className="bg-orange-primary"/>
//                         {taskData.taskTitle}
//                     </p>
//                 </div>
//                 <div
//                     key={taskData.id}
//                 >
//                     <div className="flex items-center justify-between w-[490px]">
//                                 <span className="px-4 py-2">
//                                     <img
//                                         src={avatar}
//                                         alt="add user"
//                                         className="size-[34px] rounded-full"
//                                     />
//                                 </span>
//                         <span className="px-4 py-2">{taskData.date}</span>
//                         <span className="px-4 py-2 ml-6">{taskData.priority}</span>
//                         <span className="px-4 py-2"><img src={taskData.caption} alt="icon"/></span>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
// </div>
