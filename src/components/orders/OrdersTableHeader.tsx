import React from "react";
import DownArrow from "../svg/DownArrow";

const OrdersTableHeader = () => {
    return (
        <div className="bg-gray-200 px-2 py-2 grid grid-cols-8 items-center">
            <div className="col-span-1 flex items-center gap-3">
                <div className="w-[42px] h-[18px] bg-[#F1F1F1] flex gap-1 items-center rounded-md">
                    <input type="checkbox" name="" id="" />
                    <DownArrow />
                </div>
                <p className="text-black-500 text-xs font-medium uppercase">
                    ID
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Purchase Date
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Original status
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    status
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Sub States
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Subtotal
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Customer Name
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-500 text-xs font-medium capitalize">
                    Change status
                </p>
            </div>
        </div>
    );
};

export default OrdersTableHeader;
