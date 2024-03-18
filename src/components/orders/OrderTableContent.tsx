import React from "react";
import Badge from "../base/Badge";
import Avatar from "../base/Avatar";

import profile_pic from "../../../public/images/photo.avif";

interface Props {
    even?: boolean;
}

const OrderTableContent = ({ even }: Props) => {
    return (
        <div
            className={` ${
                even ? "bg-[#FAFBFB]" : "bg-white"
            } px-2 py-3 grid grid-cols-8 items-center border-b`}
        >
            <div className="col-span-1 flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <span className="text-black-500 text-xs font-normal capitalize">
                    #20502252
                </span>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-normal capitalize">
                    Aug 23, 2023 2:59:32 AM
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-normal capitalize">
                    pending
                </p>
            </div>
            <div className="col-span-1">
                <Badge
                    text="Processing"
                    status
                    badgeClass="bg-green-500"
                    statusClass="bg-green-500"
                />
            </div>
            <div className="col-span-1">
                <Badge text="Pre Order" status />
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-normal uppercase">
                    SAR 330.00
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-normal capitalize">
                    Mohammed Alrayes
                </p>
            </div>
            <div className="col-span-1 flex">
                <div className="group">
                    <Avatar
                        border
                        avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                        url={profile_pic}
                    />
                </div>
                <div className="-ml-5 group">
                    <Avatar
                        border
                        avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                        url={profile_pic}
                    />
                </div>
                <div className="-ml-5 group">
                    <Avatar
                        border
                        avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                        url={profile_pic}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderTableContent;
