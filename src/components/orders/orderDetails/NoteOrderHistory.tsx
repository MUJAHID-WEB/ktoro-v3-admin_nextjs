import React from "react";
import Image from "next/image";

import download_icon from "/public/images/orders/download-icon.png";
import kotro_icon from "/public/images/orders/kotro_icon.png";
import sms_icon from "/public/images/orders/sms_icon.png";
import unread_sms_icon from "/public/images/orders/unread_sms_icon.png";

interface Props {
    name: string;
    date: string;
    comment: string;
    data?: boolean;
    message?: boolean;
    unread_message?: boolean;
    kotro?: boolean;
    admin?: boolean;
}

const NoteOrderHistory = ({
    name,
    date,
    comment,
    data = false,
    kotro = false,
    message = false,
    unread_message = false,
    admin = false,
}: Props) => {
    return (
        <div>
            <div className="flex items-center gap-[6px]">
                <h5
                    className={`font-normal text-sm  ${
                        admin ? "text-red-200" : "text-black-500"
                    }`}
                >
                    {name}
                </h5>
                <p className="font-normal text-sm text-ash-500">{date}</p>
                <div className="flex items-center gap-[6px] ms-3">
                    {message && <Image src={sms_icon} alt="" />}
                    {unread_message && <Image src={unread_sms_icon} alt="" />}
                    {kotro && <Image src={kotro_icon} alt="" />}
                </div>
            </div>
            <div
                className={`mt-3 w-full h-[43px] bg-opacity-10  border-l-[3px] p-3 text-right ${
                    admin
                        ? "bg-red-200 border-red-200"
                        : "bg-blue-700 border-blue-700"
                }`}
            >
                <p className="font-normal text-[13px] text-black-500">
                    {comment}
                </p>
            </div>
            {data && (
                <div
                    className={`mt-3 w-[407px] min-h-[43px] bg-opacity-10 border-l-[3px] p-3 text-right flex justify-between items-center ${
                        admin
                            ? "bg-red-200 border-red-200"
                            : "bg-blue-700 border-blue-700"
                    }`}
                >
                    <Image src={download_icon} alt="" />
                    <div className="flex flex-row flex-wrap gap-[11px]">
                        <div className="bg-[#E3E3E3] px-2 py-[2px] rounded text-xs font-normal text-blue-700">
                            745 data .PDF
                        </div>
                        <div className="bg-[#E3E3E3] px-2 py-[2px] rounded text-xs font-normal text-blue-700">
                            745 data .PDF
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoteOrderHistory;
