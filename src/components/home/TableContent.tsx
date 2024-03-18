import React from "react";

interface Props {
    even?: boolean;
}

const TableContent = ({ even = false }: Props) => {
    return (
        <div
            className={`${
                even ? "bg-[#FAFBFB]" : "bg-white"
            } px-3 py-3 grid grid-cols-12 border-b items-center`}
        >
            {["Phone", "250", "70", "$964.85"].map((headerName) => (
                <div key={headerName} className="col-span-3 group">
                    <h3 className="capitalize text-black-500 group-last:text-green-300 text-xs group-last:text-lg font-normal">
                        {headerName}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default TableContent;
