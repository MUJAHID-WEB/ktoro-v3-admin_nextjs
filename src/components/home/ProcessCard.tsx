import React from "react";

interface Props {
    processCardClass?: string;
    text: string;
    hr: number;
    day: number;
}

const ProcessCard = ({ processCardClass, text, hr, day }: Props) => {
    return (
        <div
            className={`h-[190px] col-span-4 bg-blue-300 rounded-md p-3 ${processCardClass}`}
        >
            <p className="text-gray-500 text-xl font-medium text-balance capitalize">
                {text}
            </p>
            <h3 className="text-3xl font-bold text-black-500 mt-3">
                {hr} <span className="text-2xl">HH</span>
            </h3>
            <h3 className="text-3xl font-bold text-black-500 mt-3">
                {day} <span className="text-2xl">Day</span>
            </h3>
        </div>
    );
};

export default ProcessCard;
