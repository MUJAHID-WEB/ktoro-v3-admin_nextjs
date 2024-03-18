import React from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const ArrowLeftAlt = ({ height = 24, width = 24, color = "#000" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 -960 960 960"
            width={width}
            fill={color}
            color={color}
        >
            <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
        </svg>
    );
};

export default ArrowLeftAlt;
