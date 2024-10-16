import React from "react";
import { permissions } from "./permissionsData";

interface PermissionUsersProps {
  isOpen: boolean;
  onClose: () => void;
}

const PermissionUsers: React.FC<PermissionUsersProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  const handlePermissionClick = (title: string) => {
    console.log("Selected permission:", title);
    onClose(); // بستن منو
  };

  return (
    <>
      <div className="border rounded-lg w-[252px] h-[398px] bg-white">
        {permissions.map((permission, index) => (
          <div key={permission.title} className="bg-white m-4">
            <button
              className="block w-full text-right focus:outline-none cursor-pointer"
              onClick={() => handlePermissionClick(permission.title)}
            >
              <h2 className="text-xs font-extrabold mb-2 text-black">
                {permission.title}
              </h2>
              <p className="text-xs font-normal text-gray-darker">
                {permission.description}
              </p>
            </button>
            {index !== permissions.length - 1 && (
              <hr className="border border-gray-secondary mt-4" />
            )}
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default PermissionUsers;
