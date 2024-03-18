import React, { useState } from "react";
import DownArrow from "../svg/DownArrow";
import Dropdown from "../base/Dropdown";
import { useRouter } from "next/router";

const ActionDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const { locale } = router;
    return (
        <div className="p-2 border border-black-500 flex justify-between items-center w-[250px] relative">
            <p className="text-sm text-black-700 font-normal">
                {locale === "ar" ? "الاجراءات" : "Actions"}
            </p>
            <div
                onClick={() => setOpen(!open)}
                className="w-[26px] h-[26px] bg-gray-200 flex justify-center items-center rounded-md"
            >
                <DownArrow />
            </div>
            {open && (
                <Dropdown>
                    <div className="w-[120px]  py-2">
                        <div
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer"
                        >
                            <h3 className="font-normal text-sm">Edit</h3>
                        </div>
                        <div
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer"
                        >
                            <h3 className="font-normal text-sm">Delete</h3>
                        </div>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

export default ActionDropdown;
