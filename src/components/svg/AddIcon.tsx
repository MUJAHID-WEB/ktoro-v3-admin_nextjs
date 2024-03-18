import React, { SVGAttributes } from "react";

export default function AddIcon({
  fill = "#000",
  width = "24",
  height = "24",
}: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path
        d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
        fill={fill}
      />
    </svg>
  );
}
