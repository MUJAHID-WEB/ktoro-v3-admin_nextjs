import React from "react";

interface Props {
    horizontalLineClass?: string;
}

const HorizontalLine = ({ horizontalLineClass }: Props) => {
    return (
        <div className={`w-[1px] h-10 bg-ash-100 ${horizontalLineClass}`}></div>
    );
};

export default HorizontalLine;
