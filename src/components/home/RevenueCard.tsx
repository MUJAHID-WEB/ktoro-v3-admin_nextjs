import React from "react";

interface Props {
    text: string;
    revenue: number | string;
}

const RevenueCard = ({ text, revenue }: Props) => {
    return (
        <div className="h-[128px] w-full p-5 flex flex-col justify-center  gap-2 font-arabic">
            <h3 className="text-3xl font-bold text-white mt-3">{revenue}</h3>
            <p className="text-lg font-normal text-gray-200 capitalize">
                {text}
            </p>
        </div>
    );
};

export default RevenueCard;
