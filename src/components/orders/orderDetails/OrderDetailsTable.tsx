import React from "react";
import product_img from "../../../../public/images/orders/product.png";
import Image from "next/image";
import Button from "@/components/base/Button";
import Visibility from "@/components/svg/Visibility";
import Badge from "@/components/base/Badge";

const tableData = [
    {
        width: "w-[190px]",
        text: "Product",
    },
    {
        width: "w-[70px]",
        text: "Qty",
    },
    {
        width: "w-[95px]",
        text: "SKU",
    },
    {
        width: "w-[89px]",
        text: "Item View",
    },
    {
        width: "w-[81px]",
        text: "price",
    },
    {
        width: "w-[76px]",
        text: "Subtotal",
    },
    {
        width: "w-[74px]",
        text: "Tax Amount",
    },
    {
        width: "w-[95px]",
        text: "Discount Amount",
    },
    {
        width: "w-[95px]",
        text: "statues of warehouse",
    },
    {
        width: "w-[95px]",
        text: "availablity in warehouse",
    },
    {
        width: "w-[120px]",
        text: "Barcode",
    },
];

const OrderDetailsTable = () => {
    return (
        <div>
            <div className="flex flex-row flex-wrap mt-2">
                {tableData.map((item, i) => (
                    <div
                        key={i}
                        className={`${item.width} border-b pb-2 flex items-end justify-center`}
                    >
                        <p className="font-normal text-xs text-center capitalize text-ash-500">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-row flex-wrap">
                {/* product  */}
                <div className="w-[190px] border-r-2 flex items-start gap-2 pt-3">
                    <Image src={product_img} alt="" />
                    <p className="text-sm font-normal">Allen Sonny</p>
                </div>
                {/* quantity  */}
                <div className="w-[70px] border-r-2 pt-3 flex justify-center">
                    <p className="text-xl font-bold text-black-500">1</p>
                </div>
                {/* sku  */}
                <div className="w-[95px] border-r-2 pt-3 flex flex-col items-center gap-2">
                    <p className="text-sm font-normal text-black-500">
                        RIIZE-32980
                    </p>
                    <Button
                        className="!bg-[#F1F1F1] !px-3 !py-1 !w-fit !rounded-[3px]"
                        variant="outline"
                    >
                        Copy
                    </Button>
                </div>
                {/* item view  */}
                <div className="w-[89px] border-r-2 pt-3 flex flex-col gap-2 items-center">
                    <div className="cursor-pointer">
                        <Visibility height={25} width={38} />
                    </div>
                    <div className="cursor-pointer">
                        <Visibility height={25} width={38} fill="#2B8DC5" />
                    </div>
                </div>
                {/* price  */}
                <div className="w-[81px] border-r-2 pt-3">
                    <p className="text-sm font-normal text-black-500 text-center">
                        SAR135,OO
                    </p>
                </div>
                {/* Subtotal  */}
                <div className="w-[76px] border-r-2 pt-3">
                    <p className="text-sm font-normal text-black-500 text-center">
                        SARO.O0
                    </p>
                </div>
                {/* Tax Amount */}
                <div className="w-[74px] border-r-2 pt-3">
                    <p className="text-sm font-normal text-black-500 text-center">
                        SARO.O0
                    </p>
                </div>
                {/* Discount Amount */}
                <div className="w-[95px] border-r-2 pt-3">
                    <p className="text-sm font-normal text-black-500 text-center">
                        SARO.O0
                    </p>
                </div>
                {/* statues of warehouse */}
                <div className="w-[95px] border-r-2 pt-3 ps-1">
                    <Badge text="Available" />
                </div>

                {/*  availablity in warehouse  */}
                <div className="w-[95px] border-r-2 pt-3 ps-1">
                    <p className="text-sm font-normal text-black-500 ">30</p>
                </div>
                {/* barcode  */}
                <div className="w-[120px] pt-3">
                    <p className="text-sm font-normal text-black-500 ps-1">
                        6539259280236
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsTable;
