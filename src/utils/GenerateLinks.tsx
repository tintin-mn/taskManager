import React from "react";
import { link } from "../assets/icon/Icons";

interface LinkTagCreatorProps {
  onAddLinkTemplate: (linkTemplate: string) => void;
  className?: string;
}

const LinkTag: React.FC<LinkTagCreatorProps> = ({
  onAddLinkTemplate,
  className,
}) => {
  const linkTemplate = "[](url)";

  return (
    <button
      onClick={() => onAddLinkTemplate(linkTemplate)}
      className={`bg-transparent border-none cursor-pointer ${className}`}
    >
      <img src={link} alt="Add Link" className="size-6 ml-4" />
    </button>
  );
};

export default LinkTag;
