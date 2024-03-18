import React from "react";

const LeftArrowButton = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <rect
                x="41.5"
                y="0.5"
                width="41"
                height="41"
                rx="5.5"
                transform="rotate(90 41.5 0.5)"
                fill="#E7E7E7"
                stroke="#E7E7E7"
            />
            <path
                d="M23 16.5469L19 20.7869L23 25.0269"
                stroke="#787878"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LeftArrowButton;
