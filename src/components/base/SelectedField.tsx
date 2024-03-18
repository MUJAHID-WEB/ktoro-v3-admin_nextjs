import React, { ChangeEvent, FocusEvent, useState } from "react";

import ArrowDown from "../svg/ArrowDown";
import ArrowUp from "../svg/ArrowUp";

interface Props {
    inputType?: "text" | "email" | "password" | "date" | "number";
    identifier: string;
    label?: string;
    required?: boolean;
    options: string[];
    value?: string | number | readonly string[] | undefined;
    onBlurCb?: (e: FocusEvent<HTMLInputElement>) => void;
    errorMsg?: string | false | undefined;
    placeholder?: string;
    labelClass?: string;
    dropdownBtnClass?: string;
    groupClass?: string;
    inputClass?: string;
    leftIcon?: string | React.ReactNode;
    rightIcon?: string | React.ReactNode;
    message?: string | false | undefined;
    messageClass?: string;
}

const SelectedField = ({
    inputType,
    options,
    onBlurCb,
    identifier,
    label,
    required,
    value,
    errorMsg,
    placeholder,
    labelClass,
    dropdownBtnClass,
    groupClass,
    inputClass,
    leftIcon,
    rightIcon,
    message,
    messageClass,
}: Props) => {
    // state for select dropdown
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("");
    // message
    let showMessage = message || errorMsg;

    // handle selected option
    const handleSelectedOption = (option: string) => {
        setSelectedOption(option);

        // close dropdown
        setOpenDropdown(false);
    };
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
                className={`w-full h-[46px] border rounded px-2 py-2 mt-2 flex flex-row gap-2 relative bg-white ${
                    errorMsg ? "border-red-500" : "border-ash-700"
                } ${groupClass}`}
            >
                {/* left icon  */}
                {leftIcon && <div className="absolute">{leftIcon}</div>}

                <input
                    type={inputType}
                    className={`w-full placeholder:text-gray-400 font-normal text-sm ${
                        leftIcon && "ms-8"
                    } ${rightIcon && "me-8"} ${inputClass}`}
                    placeholder={placeholder}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    onBlur={onBlurCb}
                    value={selectedOption}
                />

                <div
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`absolute right-2 h-8 w-8 flex justify-center items-center bg-gray-200 rounded transition-all delay-700 ${dropdownBtnClass}`}
                >
                    {openDropdown ? <ArrowUp /> : <ArrowDown />}
                </div>

                {/* right icon  */}
                {rightIcon}

                {/* select dropdown options  */}
                {openDropdown && (
                    <div className="w-full flex flex-col bg-white rounded-b-lg shadow-md  py-2 absolute right-0 top-12 z-10">
                        {options.map((option, i) => (
                            // options
                            <div
                                key={i}
                                onClick={() => handleSelectedOption(option)}
                                className="h-10 flex items-center group cursor-pointer"
                            >
                                <div
                                    className={`w-[3px] h-10 ${
                                        selectedOption === option
                                            ? "bg-blue-600"
                                            : "bg-white"
                                    } group-hover:bg-blue-600  rounded-r pe-[3px]`}
                                ></div>
                                <div
                                    className={`h-10 w-[calc(100%-16px)] pe-2 ms-[5px] ${
                                        selectedOption === option
                                            ? "bg-[#F2F7FE]"
                                            : "bg-white"
                                    } group-hover:bg-[#F2F7FE] rounded flex items-center`}
                                >
                                    <p className="ms-2">{option}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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

export default SelectedField;
