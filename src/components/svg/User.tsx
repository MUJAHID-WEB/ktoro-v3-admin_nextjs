import React from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const User = ({ height = 17, width = 16, color = "#333333" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
        >
            <path
                d="M1 13.75C1 12.8217 1.36875 11.9315 2.02513 11.2751C2.6815 10.6187 3.57174 10.25 4.5 10.25H11.5C12.4283 10.25 13.3185 10.6187 13.9749 11.2751C14.6313 11.9315 15 12.8217 15 13.75C15 14.2141 14.8156 14.6592 14.4874 14.9874C14.1592 15.3156 13.7141 15.5 13.25 15.5H2.75C2.28587 15.5 1.84075 15.3156 1.51256 14.9874C1.18437 14.6592 1 14.2141 1 13.75Z"
                stroke={color}
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
            <path
                d="M8 6.75C9.44975 6.75 10.625 5.57475 10.625 4.125C10.625 2.67525 9.44975 1.5 8 1.5C6.55025 1.5 5.375 2.67525 5.375 4.125C5.375 5.57475 6.55025 6.75 8 6.75Z"
                stroke={color}
                strokeWidth="1.2"
            />
        </svg>
    );
};

export default User;
