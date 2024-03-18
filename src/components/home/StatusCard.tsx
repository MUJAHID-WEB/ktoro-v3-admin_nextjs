import React from "react";
import GroupUser from "../svg/GroupUser";
import DownArrow from "../svg/DownArrow";
import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    count: number | string;
    image: string | StaticImageData;
    border?: boolean;
    dropDown?: boolean;
    statusCardClass?: string;
}

const StatusCard = ({
    text,
    count,
    image,
    border,
    dropDown,
    statusCardClass,
}: Props) => {
    return (
        <div
            className={`h-[128px] w-full flex justify-between items-center font-arabic relative ${statusCardClass}`}
        >
            <div className="flex justify-start items-center gap-3">
                <Image src={image} alt={text} />
                <div>
                    <p className="text-lg font-normal text-gray-500 group-hover:text-gray-200 capitalize">
                        {text}
                    </p>
                    <h3 className="text-3xl font-bold text-black-700 group-hover:text-white mt-1">
                        {count}
                    </h3>
                </div>
            </div>
            {border && (
                <div className="h-[40px] w-[2px] bg-[#EAEAEA] mr-5"></div>
            )}
            {/* header optional dropdown menu  */}
            {dropDown && (
                <div className="absolute top-1 right-[70px]">
                    <DownArrow />
                </div>
            )}
        </div>
    );
};

export default StatusCard;
