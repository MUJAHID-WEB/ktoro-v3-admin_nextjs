import React from "react";

interface Props {
    text: string;
    status?: boolean;
    badgeClass?: string;
    statusClass?: string;
}

const Badge = ({ text, status = false, badgeClass, statusClass }: Props) => {
    return (
        <div
            className={`w-fit px-3 py-1 bg-green-500 rounded-3xl bg-opacity-10 flex items-center gap-1 ${badgeClass}`}
        >
            {status && (
                <div
                    className={`h-3 w-3 bg-green-500 rounded-full ${statusClass}`}
                ></div>
            )}

            <p className="text-black-500 font-normal text-sm">{text}</p>
        </div>
    );
};

export default Badge;
