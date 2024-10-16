import ColorCheckboxesList from "../checkbox/ChekboxColorList";

interface LabelColorProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LabelColor: React.FC<LabelColorProps> = ({ isOpen, closeModal }) => {
  const handleColorChange = (color: string | null) => {
    console.log("Selected color:", color);
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <div className="w-[175px] flex justify-center align-center">
          <ColorCheckboxesList
            className="border rounded-[8px] m-auto"
            onColorChange={handleColorChange}
          />
        </div>
      )}
    </>
  );
};

export default LabelColor;
