import React from "react";

type ButtonProps = {
    className?: string;
    variant?:
        | "primary"
        | "secondary"
        | "outline"
        | "danger"
        | "success"
        | "warning";
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
};

const Button = ({
    children,
    className,
    variant = "primary",
    type = "button",
    size,
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md ${className} ${variant} ${size}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
