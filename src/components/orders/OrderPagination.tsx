import React, { useState } from "react";
import LeftArrowButton from "../svg/LeftArrowButton";
import RightArrowButton from "../svg/RightArrowButton";
import TextField from "../base/TextField";
import { useRouter } from "next/router";

interface Props {
    page: number;
    setPage(value: number): void;
}

const OrderPagination = ({ page, setPage }: Props) => {
    const router = useRouter();
    const { locale } = router;
    // increment
    const increment = () => {
        if (page < 50) {
            setPage(page + 1);
        } else {
            setPage(page);
        }
    };

    // decrement
    const decrement = () => {
        if (page > 1) {
            setPage(page - 1);
        } else {
            setPage(page);
        }
    };
    return (
        <div className="flex items-center gap-3">
            <p className="text-black-700 font-normal text-sm capitalize">
                {locale === "ar" ? "لكل صفحة" : " Per page"}
            </p>

            {/* increment  */}
            <div className="cursor-pointer" onClick={decrement}>
                <LeftArrowButton />
            </div>
            <div className="w-[80px]">
                <TextField
                    identifier="page"
                    inputType="number"
                    value={page}
                    onChangeCb={(e) => setPage(parseInt(e.target.value))}
                    groupClass="!w-fit !py-3 mb-2"
                />
            </div>

            <p className="text-black-700 font-normal text-sm uppercase">
                {locale === "ar" ? "من" : "of"} 50
            </p>
            {/* decrement  */}
            <div className="cursor-pointer" onClick={increment}>
                <RightArrowButton />
            </div>
        </div>
    );
};

export default OrderPagination;
