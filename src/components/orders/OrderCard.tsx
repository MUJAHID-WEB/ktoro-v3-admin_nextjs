import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import DownArrow from "../svg/DownArrow";
import Dropdown from "../base/Dropdown";

interface Props {
    img: string | StaticImageData;
    totalOrders: number;
    status: string;
    totalPrice: number;
}

const OrderCard = ({ img, totalOrders, status, totalPrice }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="w-[360px] h-[180px] rounded-md bg-[#F3F3F3] px-6 py-4">
            <div className="flex items-start justify-between">
                <Image src={img} alt="" />
                <div className="flex items-center gap-1 relative">
                    <p className="text-[#47A6DC] font-medium text-xs">Today</p>
                    <div onClick={() => setOpen(!open)}>
                        <DownArrow color="#47A6DC" />
                    </div>

                    {open && (
                        <Dropdown dropdownClass="!top-5">
                            <div className="w-[120px]  py-2">
                                <div className="flex items-center gap-2 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                    <h3 className="font-normal text-sm">
                                        Company 1
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                    <h3 className="font-normal text-sm">
                                        Company 1
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                    <h3 className="font-normal text-sm">All</h3>
                                </div>
                            </div>
                        </Dropdown>
                    )}
                </div>
            </div>
            <h5 className="text-xl font-bold text-black-500 mt-2">
                Total Orders:{" "}
                <span className="text-xl font-normal text-black-500 ms-2">
                    {totalOrders}
                </span>
            </h5>
            <h5 className="text-xl font-bold text-black-500 mt-2">
                Status:{" "}
                <span className="text-xl font-normal text-black-500 ms-2">
                    {status}
                </span>
            </h5>
            <h5 className="text-xl font-bold text-black-500 mt-2">
                Total price:{" "}
                <span className="text-xl font-normal text-black-500 ms-2">
                    {totalPrice} SAR
                </span>
            </h5>
        </div>
    );
};

export default OrderCard;
