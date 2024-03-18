import React from "react";

const OrderStatusCard = () => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <h5 className="font-medium text-[13px] text-black-500">
                    Anas ahmad
                </h5>
                <p className="font-normal text-[13px] text-black-500">
                    Aug 24,2023 4:40:51 PM
                </p>
                <span className="font-medium text-xs text-red-600 cursor-pointer">
                    (Cheng States)
                </span>
            </div>
            <div className="flex items-center gap-2 mt-[3px]">
                <p className="font-normal text-xs text-black-500">From</p>
                <p className="font-normal text-xs text-blue-700 capitalize">
                    ( pending - customer should verified )
                </p>
                <p className="font-normal text-xs text-black-500">To</p>
                <p className="font-normal text-xs text-blue-700 capitalize">
                    ( prosseing - prepaird )
                </p>
            </div>
        </div>
    );
};

export default OrderStatusCard;
