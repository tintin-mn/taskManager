import React from "react";
import { word, pdf, excel, zip, rar, img, txt } from "../assets/icon/Icons";

interface FileManagementProps {
  onFileChange: (file: File | null) => void;
  buttonLabel: string | JSX.Element;
  buttonClassName?: string;
  inputClassName: string;
  showSelectedFilePreview: boolean;
  htmlForLabel: string;
  inputId: string;
  acceptFormat: string | { mimeType: string };
  attachIconPostion?: string;
  attachErrorPostion?: string;
}

const formatIcons: Record<string, string> = {
  ".doc": word,
  ".docx": word,
  ".pdf": pdf,
  ".jpg": img,
  ".jpeg": img,
  ".png": img,
  ".gif": img,
  ".zip": zip,
  ".rar": rar,
  ".txt": txt,
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": excel,
  "application/vnd.ms-excel": excel,
  ".xlm": excel,
  ".xlsx": excel,
};

const FileManagement: React.FC<FileManagementProps> = ({
  onFileChange,
  buttonLabel,
  buttonClassName,
  inputClassName,
  showSelectedFilePreview,
  htmlForLabel,
  inputId,
  acceptFormat = "*/*", // Default value for accept attribute,
  attachIconPostion,
  attachErrorPostion,
}) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [selectedFileIcon, setSelectedFileIcon] = React.useState<string | null>(
    null
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // اعتبارسنجی نوع فایل با استفاده از acceptFormat
      if (
        typeof acceptFormat === "string" ||
        !acceptFormat.mimeType ||
        file.type === acceptFormat.mimeType
      ) {
        setSelectedFile(file);
        onFileChange(file);

        // پیدا کردن آیکون مرتبط با فرمت فایل
        const fileExtension = `.${file.name.split(".").pop()}`;
        setSelectedFileIcon(formatIcons[fileExtension] || null);
      }
    }
  };

  return (
    <div className="flex flex-row-reverse">
      {showSelectedFilePreview && selectedFile && (
        <p className={`text-red-500 text-xs pr-2 ${attachErrorPostion}`}>
          {selectedFileIcon ? (
            <img
              src={selectedFileIcon}
              className={`size-6 ${attachIconPostion}`}
            />
          ) : (
            `فرمت فایل مجاز نمی‌باشد.`
          )}
        </p>
      )}
      <label htmlFor={htmlForLabel} className={buttonClassName}>
        {buttonLabel}
        <input
          type="file"
          id={inputId}
          accept={
            typeof acceptFormat === "string"
              ? acceptFormat
              : acceptFormat.mimeType
          }
          className={inputClassName}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileManagement;
