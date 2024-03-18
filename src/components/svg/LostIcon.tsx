import React from "react";

interface Props {
    fill?: string;
    height?: number;
    width?: number;
}

const LostIcon = ({ fill = "#404040", height = 31, width = 30 }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 -960 960 960"
            width={width}
        >
            <path
                fill={fill}
                d="M240-800v200-200 640-9.5 9.5-640Zm0 720q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v174q-19-7-39-10.5t-41-3.5v-120H520v-200H240v640h254q8 23 20 43t28 37H240Zm396-20-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z"
            />
        </svg>
    );
};

export default LostIcon;
