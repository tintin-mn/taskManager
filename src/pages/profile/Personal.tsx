import { useState } from "react";
import FileManagement from "../../utils/FileManagement";
import Form from "../../components/form/Form";
import schema from "../../components/profile/PersonalValidationSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userService from "../../configs/services/features/user/userService.tsx";
import {toast} from "react-toastify";

interface IFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;

}

const Personal = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [data, setData] = useState<IFormInput>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<IFormInput> = async (data) => {
    try {
      await userService.updateAccount("178", data);
      toast.success("اطلاعات با موفقیت بروز شد")
    } catch (error) {
      toast.error("خطا در ارسال اطلاعات");
    }
    // انجام عملیات مرتبط با ارسال داده‌ها به سرور و به‌روزرسانی وضعیت
  };

  const handleImageUpload = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const fields = [
    {
      id: "firstName",
      label: "نام",
      type: "text" as const,
      register: register("firstName"),
    },
    {
      id: "lastName",
      label: "نام خانوادگی",
      type: "text" as const,
      register: register("lastName"),
    },
    {
      id: "mobile",
      label: "شماره موبایل",
      type: "text" as const,
      register: register("phoneNumber"),
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="text-right text-2xl font-bold mb-4">اطلاعات فردی</h1>
        <div className="mb-4 flex items-center">
          <div className="w-[100.71px] h-[93.71px] p-[25.71px 22.86px 20px 22.86px] rounded-full bg-yellow-100 text-yellow-400 text-3xl font-bold flex items-center justify-center">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="تصویر انتخاب شده"
                className="rounded-full"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <>
                {data.firstName && data.firstName.slice(0, 1)}
                {data.lastName && data.lastName.slice(0, 1)}
              </>
            )}
          </div>
          <div className="m-4 items-center justify-center">
            <FileManagement
              inputId="avatar"
              htmlForLabel="avatar"
              acceptFormat="image/*"
              onFileChange={handleImageUpload}
              buttonLabel="ویرایش تصویر پروفایل"
              buttonClassName="border border-brand-primary bg-white text-brand-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[212px] mb-4"
              inputClassName="hidden"
              showSelectedFilePreview={false}
            />
            <p className="text-gray-primary text-xs mt-4 text-center">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>

        <Form submitText="ثبت تغییرات" fields={fields} errors={errors} />
      </form>
    </>
  );
};

export default Personal;
