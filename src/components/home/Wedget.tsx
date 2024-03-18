import React from "react";
import DownArrow from "../svg/DownArrow";

interface Props {
    dropDown?: boolean;
    dropDownText?: string;
    dropDownClass?: string;
    widgetClass?: string;
    dropDownColor?: string;
    children: React.ReactNode;
}

const Wedget = ({
    dropDown = false,
    dropDownText,
    dropDownClass,
    dropDownColor = "#fff",
    widgetClass,
    children,
}: Props) => {
    return (
        <div
            className={`col-span-4 w-full bg-white hover:bg-[#2A3042] rounded-md relative  transition-all ${widgetClass}`}
        >
            {/* header optional dropdown menu  */}
            {dropDown && (
                <div className="flex items-center gap-1 absolute top-3 right-3">
                    <p
                        className={`font-normal text-xs text-white group-hover:text-white ${dropDownClass}`}
                    >
                        {dropDownText}
                    </p>
                    <DownArrow color={dropDownColor} />
                </div>
            )}

            {/* body  */}
            <>{children}</>
        </div>
    );
};

export default Wedget;
