import React, { useState } from "react";
import { mention } from "../assets/icon/Icons";

interface User {
  id: number;
  username: string;
}

interface MentionUserProps {
  users: User[];
  onAddMention: (mention: string) => void;
}

const MentionUser: React.FC<MentionUserProps> = ({ users, onAddMention }) => {
  const [showList, setShowList] = useState(false);

  const handleMentionClick = () => {
    setShowList(!showList);
  };

  const handleUserClick = (username: string) => {
    onAddMention(`@${username} `);
    setShowList(false);
  };

  return (
    <>
      <button onClick={handleMentionClick}>
        <img src={mention} className="size-6 ml-4" />
      </button>
      {showList && (
        <div className="bg-white border rounded-[12px] shadow-md w-48">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserClick(user.username)}
              className="p-2 hover:bg-gray-secondry cursor-pointer text-xs"
            >
              {user.username}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MentionUser;
