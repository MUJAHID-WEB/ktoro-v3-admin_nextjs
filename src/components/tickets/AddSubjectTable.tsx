import React, { useState } from "react";
import TextField from "../base/TextField";
import SelectedField from "../base/SelectedField";
import Image from "next/image";
import delete_icon from "../../../public/images/tickets/delete_btn.png";
import Button from "../base/Button";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { addNewSubjectTableContent } from "@/static/contents/tickets";

const AddSubjectTable = () => {
    const [tableRow, setTableRow] = useState<string[]>([
        "1",
        "2",
        "3",
        "4",
        "5",
    ]);

    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(
        locale || "en",
        addNewSubjectTableContent
    );

    // handle delete table row
    const handleDelete = (row: string) => {
        setTableRow(tableRow.filter((item) => item !== row));
    };
    return (
        <div className="w-[710px] flex justify-start items-start ml-14">
            {/* table header */}
            <div className="w-full h-9 bg-gray-200 flex items-center">
                <p className="w-[150px] ps-6 text-xs font-medium text-black-500">
                    {content.addNewSubjectEnglishCol}
                </p>
                <p className="w-[150px] ps-6 text-xs font-medium text-black-500">
                    {content.addNewSubjectArabicCol}
                </p>
                <p className="w-[150px] ps-6 text-xs font-medium text-black-500">
                    {content.addNewSubjectSelectCol}
                </p>
                <p className="w-[160px] ps-6 text-xs font-medium text-black-500">
                    {content.addNewSubjectAppearsInfrontendCol}
                </p>
                <p className="w-[100px] ps-6 text-xs font-medium text-black-500">
                    {content.addNewSubjectActionsCol}
                </p>
            </div>

            {tableRow.map((row) => (
                <div
                    key={row}
                    className="w-full h-14 bg-ash-400 flex items-center border-b border-[#E1E3E5]"
                >
                    <div className="w-[150px] ps-3 text-xs font-medium text-black-500">
                        <TextField
                            identifier=""
                            onChangeCb={() => {}}
                            placeholder="Missing item"
                            groupClass="!h-[32px] !w-[98px] !border-[#E1E3E5] !rounded-[3px]"
                            inputClass="!text-xs  placeholder:text-black-500 text-center"
                        />
                    </div>
                    <div className="w-[150px] ps-3 text-xs font-medium text-black-500">
                        <TextField
                            identifier=""
                            onChangeCb={() => {}}
                            placeholder="عنصر ناقص"
                            groupClass="!h-[32px] !w-[98px] !border-[#E1E3E5] !rounded-[3px]"
                            inputClass="!text-xs  placeholder:text-black-500 text-center"
                        />
                    </div>
                    <div className="w-[150px] ps-3 text-xs font-medium text-black-500">
                        <SelectedField
                            options={["Yes", "No"]}
                            identifier=""
                            groupClass="!h-[32px] !w-[98px] !border-[#E1E3E5] !rounded-[3px]"
                            inputClass="!text-xs  placeholder:text-black-500 "
                            placeholder="yes"
                            dropdownBtnClass="!h-[30px] !w-8 !top-0 !right-0 !rounded-[0px]"
                        />
                    </div>
                    <div className="w-[160px] ps-3 text-xs font-medium text-black-500">
                        <SelectedField
                            options={["Yes", "No"]}
                            identifier=""
                            groupClass="!h-[32px] !w-[98px] !border-[#E1E3E5] !rounded-[3px]"
                            inputClass="!text-xs  placeholder:text-black-500 "
                            placeholder="yes"
                            dropdownBtnClass="!h-[30px] !w-8 !top-0 !right-0 !rounded-[0px] "
                        />
                    </div>
                    <div className="w-[100px] ps-6 text-xs font-medium text-black-500">
                        <Image
                            onClick={() => handleDelete(row)}
                            src={delete_icon}
                            alt="delete"
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            ))}

            {/* table content  */}

            <div className="w-full h-14 bg-ash-400 flex items-center border-b border-[#E1E3E5] ps-4">
                <Button
                    onClick={() =>
                        setTableRow([
                            ...tableRow,
                            (tableRow.length + 1).toString(),
                        ])
                    }
                    className="!h-8 !w-[109px] flex items-center justify-center !py-0 !bg-gray-200 !text-black-500"
                >
                    Add Row
                </Button>
            </div>
        </div>
    );
};

export default AddSubjectTable;
