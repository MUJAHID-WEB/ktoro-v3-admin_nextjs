import React from "react";

interface Props {
    leftText?: string;
    rightText?: string;
    leftTextClass?: string;
    rightTextClass?: string;
    infoClass?: string;
}

const OrderDetailsInfo = ({
    leftText,
    rightText,
    leftTextClass,
    rightTextClass,
    infoClass,
}: Props) => {
    return (
        <div className={`flex items-center justify-between ${infoClass}`}>
            <p
                className={`font-normal text-base text-ash-500 capitalize ${leftTextClass}`}
            >
                {leftText}
            </p>
            <p
                className={`font-normal text-base text-ash-500 capitalize ${rightTextClass}`}
            >
                {rightText}
            </p>
        </div>
    );
};

export default OrderDetailsInfo;
