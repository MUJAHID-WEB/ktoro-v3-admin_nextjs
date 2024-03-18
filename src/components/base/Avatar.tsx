import React from "react";
import UserImage from "../svg/UserImage";
import Image, { StaticImageData } from "next/image";

interface Props {
    url?: string | StaticImageData;
    avatarClass?: string;
    status?: boolean;
    border?: boolean;
}

const Avatar = ({ url, avatarClass, status = false, border }: Props) => {
    return (
        <div
            className={`flex h-12 w-12 rounded-full relative ${
                border && "border-2 border-[#D8D8FE]"
            } ${avatarClass}`}
        >
            {url ? (
                <Image
                    src={url}
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                />
            ) : (
                <UserImage />
            )}
            {/* active status  */}
            {status && (
                <div className="h-3 w-3 bg-green-600 rounded-full absolute top-0 right-0"></div>
            )}
        </div>
    );
};

export default Avatar;
