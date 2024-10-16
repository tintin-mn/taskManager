import React, { useState } from "react";
import EmojiPicker, {
  EmojiClickData,
  Theme,
  EmojiStyle,
} from "emoji-picker-react";
import { emoji } from "../assets/icon/Icons";

interface EmojiPickerProps {
  onSelectEmoji: (emoji: any) => void;
  className?: string;
}

const EmojiPickers: React.FC<EmojiPickerProps> = ({
  onSelectEmoji,
  className,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onSelectEmoji(emojiData.emoji);
    setShowPicker(false);
  };

  const previewConfig = {
    showPreview: false,
  };

  return (
    <div className={`inline-block ${className}`}>
      <button onClick={togglePicker}>
        <img src={emoji} className="size-6 ml-4" alt="Emoji Picker Toggle" />
      </button>
      {showPicker && (
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          emojiStyle={"native" as EmojiStyle}
          theme={"auto" as Theme}
          searchPlaceholder="جستجوی شکلک"
          skinTonesDisabled={true}
          previewConfig={previewConfig}
        />
      )}
    </div>
  );
};

export default EmojiPickers;
