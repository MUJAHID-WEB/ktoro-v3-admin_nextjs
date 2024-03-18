import React from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const Logout = ({ height = 17, width = 18, color = "#333333" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 18 17"
            fill="none"
        >
            <path
                d="M10.625 5V3.25C10.625 2.78587 10.4406 2.34075 10.1124 2.01256C9.78425 1.68437 9.33913 1.5 8.875 1.5H2.75C2.28587 1.5 1.84075 1.68437 1.51256 2.01256C1.18437 2.34075 1 2.78587 1 3.25V13.75C1 14.2141 1.18437 14.6592 1.51256 14.9874C1.84075 15.3156 2.28587 15.5 2.75 15.5H8.875C9.33913 15.5 9.78425 15.3156 10.1124 14.9874C10.4406 14.6592 10.625 14.2141 10.625 13.75V12"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.25 8.5H16.75M16.75 8.5L14.125 5.875M16.75 8.5L14.125 11.125"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Logout;
