import React from "react";

interface Props {
    fill?: string;
    height?: number;
    width?: number;
}

const CancleIcon = ({ fill = "#404040", height = 31, width = 30 }: Props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.0322266"
                y="1.96875"
                width="2.27273"
                height="21.8182"
                rx="1.13636"
                transform="rotate(-45 0.0322266 1.96875)"
                fill={fill}
            />
            <rect
                width="2.27273"
                height="21.8182"
                rx="1.13636"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.3037 1.96875)"
                fill={fill}
            />
        </svg>
    );
};

export default CancleIcon;
