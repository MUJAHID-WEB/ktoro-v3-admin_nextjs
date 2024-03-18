import React from "react";

interface Props {
    headerNames: string[];
}

const TableHeader = ({ headerNames }: Props) => {
    return (
        <div className="bg-gray-200 px-3 py-2 grid grid-cols-12">
            {headerNames.map((headerName) => (
                <div key={headerName} className="col-span-3 group">
                    <h3 className="capitalize text-black-500 text-xs font-medium group-last:uppercase">
                        {headerName}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default TableHeader;
