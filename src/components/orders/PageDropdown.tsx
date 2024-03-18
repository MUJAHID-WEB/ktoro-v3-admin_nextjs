import React, { useState } from "react";
import DownArrow from "../svg/DownArrow";
import Dropdown from "../base/Dropdown";
import TextField from "../base/TextField";

interface Props {
    selectSize: number;
    setSelectSize: (value: number) => void;
}

const PageDropdown = ({ selectSize, setSelectSize }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="w-[100px] relative">
            {/* <p className="text-sm text-black-700 font-normal">{selectSize}</p> */}
            <TextField
                groupClass="!w-fit !py-3 mb-2"
                identifier="selectSize"
                inputType="number"
                value={selectSize}
                onChangeCb={(e) => setSelectSize(parseInt(e.target.value))}
                rightIcon={
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-[26px] h-[26px] bg-gray-200 flex justify-center items-center rounded-md"
                    >
                        <DownArrow />
                    </div>
                }
            />
            {/* dropdown  */}
            {open && (
                <Dropdown>
                    <div className="w-[60px]  py-2">
                        {[
                            10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
                        ].map((page) => (
                            <div
                                onClick={() => {
                                    setSelectSize(page);
                                    setOpen(false);
                                }}
                                key={page}
                                className="flex items-center gap-2 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer"
                            >
                                <h3 className="font-normal text-sm">{page}</h3>
                            </div>
                        ))}
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

export default PageDropdown;
