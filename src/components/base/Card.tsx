import React from "react";

interface Props {
    children: React.ReactNode;
    cardClass?: string;
    title?: string;
    titleClass?: string;
}

const Card = ({ title, children, cardClass, titleClass }: Props) => {
    return (
        <div>
            <p
                className={`font-normal text-2xl text-black-500 capitalize ${titleClass}`}
            >
                {title}
            </p>
            <div className={`bg-white rounded-md p-2 mt-3 ${cardClass}`}>
                {children}
            </div>
        </div>
    );
};

export default Card;
