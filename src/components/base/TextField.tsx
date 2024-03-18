import React, { ChangeEvent, FocusEvent, useState } from "react";
import Image from "next/image";

interface Props {
  inputType?: "text" | "email" | "password" | "date" | "number";
  onChangeCb: (e: ChangeEvent<HTMLInputElement>) => void;
  identifier: string;
  label?: string;
  required?: boolean;
  value?: string | number | readonly string[] | undefined;
  onBlurCb?: (e: FocusEvent<HTMLInputElement>) => void;
  errorMsg?: string | false | undefined;
  placeholder?: string;
  labelClass?: string;
  groupClass?: string;
  inputClass?: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  message?: string | false | undefined;
  messageClass?: string;
}

const TextField = ({
  inputType,
  onChangeCb,
  onBlurCb,
  identifier,
  label,
  required,
  value,
  errorMsg,
  placeholder,
  labelClass,
  groupClass,
  inputClass,
  leftIcon,
  rightIcon,
  message,
  messageClass,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // message
  let showMessage = message || errorMsg;

  // handle show password
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <div className="">
      {/* label  */}
      {label && (
        <label
          htmlFor={identifier}
          className={`text-gray-600 ${
            errorMsg && "text-red-500"
          } text-[14px] leading-[15px] flex items-start  gap-1 ${labelClass}`}
        >
          {label} {required && <span className="-mt-1">*</span>}
        </label>
      )}
      <div
        className={`w-full border rounded-md px-2 py-2 mt-2 flex flex-row gap-2 relative bg-white ${
          errorMsg ? "border-red-500" : "border-gray-300"
        } ${groupClass}`}
      >
        {/* left icon  */}
        {leftIcon && <div className="absolute">{leftIcon}</div>}

        <input
          type={
            inputType === "password"
              ? showPassword
                ? "text"
                : "password"
              : inputType
          }
          className={`w-full placeholder:text-gray-400 font-normal text-sm ${
            leftIcon && "ms-8"
          } ${rightIcon && "me-8"} ${inputClass}`}
          placeholder={placeholder}
          onChange={onChangeCb}
          onBlur={onBlurCb}
          value={value}
        />
        {/* show password toggle  */}
        {inputType === "password" && (
          <div className="absolute top-3 right-2" onClick={handleClick}>
            {showPassword ? (
              <Image
                src={"/images/text_field/eye-visible.png"}
                alt=""
                width={18}
                height={18}
              />
            ) : (
              <Image
                src={"/images/text_field/eye-invisible.png"}
                alt=""
                width={18}
                height={18}
              />
            )}
          </div>
        )}
        {/* right icon  */}
        {rightIcon && <div className="absolute right-2">{rightIcon}</div>}
      </div>

      {/* message  */}
      {showMessage && (
        <p
          className={`${
            errorMsg ? "text-red-500" : "text-gray-400"
          } text-[12px] leading-[15px] mt-1 ${messageClass}`}
        >
          {errorMsg ? errorMsg : message}
        </p>
      )}
    </div>
  );
};

export default TextField;
