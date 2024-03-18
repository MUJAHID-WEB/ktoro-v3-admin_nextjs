import React from "react";

interface Props {
    color?: string;
}

const DownArrow = ({ color = "#333333" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M4 6L8 10L12 6"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default DownArrow;
