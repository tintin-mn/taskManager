import React, { useState } from "react";
import CloseButton from "../basicComponents/Buttons/CloseButton";
import { colorPolet, tagEdit } from "../../assets/icon/Icons";
import LabelColor from "./LabelColor";

const Options: React.FC = () => {
  const removeTag = () => {
    console.log("حذف تگ");
  };

  const editTag = (action: string) => {
    console.log(`ویرایش ${action}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-[92.24px] h-[83px] border rounded-[8px] bg-white text-black transform translate-y-6 translate-x-2">
      <div
        className="flex flex-center cursor-pointer mt-2 mr-2"
        onClick={removeTag}
      >
        <CloseButton className="w-[10.5px] ml-1" />
        <p className="text-xs font-normal">حذف</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-2 mr-2"
        onClick={() => editTag("تگ")}
      >
        <img src={tagEdit} alt="edit tag" className="size-[9.9px] ml-1" />
        <p className="text-xs font-normal">ویرایش تگ</p>
      </div>
      <div
        className="flex items-center cursor-pointer mt-2 mr-2"
        onClick={openModal}
      >
        <img src={colorPolet} alt="edit color" className="size-[9.9px] ml-1" />
        <p className="text-xs font-normal">ویرایش رنگ</p>
      </div>
      {isModalOpen && <LabelColor isOpen={true} closeModal={closeModal} />}
    </div>
  );
};

export default Options;

// import React, { useState } from "react";
// import CloseButton from "../../components/basicComponent/Buttons/CloseButton";
// import { colorPolet, tagEdit } from "../../icon/Icons";
// import LabelColor from "../../components/tag/LabelColor";

// const Options: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const removeTag = () => {
//     console.log("حذف تگ");
//   };

//   const editTag = (action: string) => {
//     console.log(`ویرایش ${action}`);
//   };

//   const openModal: React.MouseEventHandler<HTMLDivElement> = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="relative w-[92.24px] h-[83px] border rounded-[8px] bg-white text-black transform translate-y-6 translate-x-2">
//       <div
//         className="flex flex-center cursor-pointer mt-2 mr-2"
//         onClick={removeTag}
//       >
//         <CloseButton className="w-[10.5px] ml-1" />
//         <p className="text-xs font-normal">حذف</p>
//       </div>
//       <div
//         className="flex items-center cursor-pointer mt-2 mr-2"
//         onClick={() => editTag("تگ")}
//       >
//         <img src={tagEdit} alt="edit tag" className="size-[9.9px] ml-1" />
//         <p className="text-xs font-normal">ویرایش تگ</p>
//       </div>
//       <div
//         className="flex items-center cursor-pointer mt-2 mr-2"
//         onClick={openModal}
//       >
//         <img src={colorPolet} alt="edit color" className="

// import React, { useState } from "react";
// import CloseButton from "../../components/basicComponent/Buttons/CloseButton";
// import { colorPolet, tagEdit } from "../../icon/Icons";
// import LabelColor from "../../components/tag/LabelColor";

// const Options: React.FC = () => {
//   const removeTag = () => {
//     console.log("حذف تگ");
//   };

//   const editTag = (action: string) => {
//     console.log(`ویرایش ${action}`);
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal: React.MouseEventHandler<HTMLDivElement> = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-[92.24px] h-[83px] border rounded-[8px] bg-white text-black transform translate-y-6 translate-x-2">
//       <div
//         className="flex flex-center cursor-pointer mt-2 mr-2"
//         onClick={removeTag}
//       >
//         <CloseButton className="w-[10.5px] ml-1" />
//         <p className="text-xs font-normal">حذف</p>
//       </div>
//       <div
//         className="flex items-center cursor-pointer mt-2 mr-2"
//         onClick={() => editTag("تگ")}
//       >
//         <img src={tagEdit} alt="edit tag" className="size-[9.9px] ml-1" />
//         <p className="text-xs font-normal">ویرایش تگ</p>
//       </div>
//       <div
//         className="flex items-center cursor-pointer mt-2 mr-2"
//         onClick={openModal}
//       >
//         <img src={colorPolet} alt="edit color" className="size-[9.9px] ml-1" />
//         <p className="text-xs font-normal">ویرایش رنگ</p>
//       </div>
//       {isModalOpen && <LabelColor isOpen={true} closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Options;
