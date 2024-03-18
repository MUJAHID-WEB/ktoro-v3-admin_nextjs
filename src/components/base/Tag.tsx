import React from "react";
import Close from "../svg/Close";

interface Props {
    text: string;
    tagClass?: string;
    onClose: () => void;
}

const Tag = ({ text, tagClass, onClose }: Props) => {
    return (
        <div
            className={`w-fit px-3 py-1 bg-gray-200 rounded-md flex items-center gap-2 ${tagClass}`}
        >
            <div className="text-black-500 font-normal text-sm">{text}</div>

            {/* close button  */}
            <div className="cursor-pointer" onClick={onClose}>
                <Close />
            </div>
        </div>
    );
};

export default Tag;
