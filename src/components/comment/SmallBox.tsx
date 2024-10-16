import { comment } from "../../assets/icon/Icons";

interface SmallBoxProps {
  onOpen: () => void;
}

const SmallBox: React.FC<SmallBoxProps> = ({ onOpen }) => {
  if (!onOpen) {
    return null;
  }
  return (
    <div className="w[659] h-[67px] flex justify-between items-start border-t">
      <p className="text-gray-primary text-base font-medium	flex-grow text-right mr-4 mt-[13px] mb-[31px]">
        کامنت
      </p>
      <img
        src={comment}
        className="size-6 ml-[36px] mt-[13px] mb-[30px] mr-150"
        onClick={onOpen}
      />
    </div>
  );
};
export default SmallBox;
