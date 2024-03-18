import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
    text: string;
    image: string | StaticImageData;
}

const OrderDetailsButton = ({ text, image }: Props) => {
    return (
        <div className="flex items-center gap-[10px] cursor-pointer">
            <div className="w-[50px] h-[50px]">
                <Image src={image} alt={text} />
            </div>
            <h5 className="text-gray-500 text-base font-normal">{text}</h5>
        </div>
    );
};

export default OrderDetailsButton;
