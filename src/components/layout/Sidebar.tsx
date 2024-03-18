import React, { useState } from "react";
import Logo from "../svg/Logo";
import Link from "next/link";
import { sidebars } from "@/static";
import { useRouter } from "next/router";
import ArrowUp from "../svg/ArrowUp";
import ArrowDown from "../svg/ArrowDown";

const Sidebar = () => {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
        {}
    );
    const router = useRouter();
    const { asPath, locale } = router;

    const toggleExpand = (itemId: number) => {
        setExpandedItems((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    };

    console.log(router);
    return (
        <aside className="w-full h-screen overflow-auto bg-white p-6">
            <div>
                <Logo />
            </div>
            <div className="mt-10">
                <p className="uppercase font-medium mb-2">Main</p>
                <ul className="space-y-2">
                    {sidebars.map(
                        ({
                            id,
                            link,
                            titleAr,
                            titleEn,
                            icon: Icon,
                            subItems,
                        }) => {
                            return (
                                <li key={id}>
                                    {subItems ? (
                                        <>
                                            <Link
                                                href="#"
                                                className={`flex justify-between items-center w-full font-medium p-3 hover:bg-gray-100 rounded-md ${
                                                    expandedItems[id]
                                                        ? "text-blue-700 bg-gray-100"
                                                        : "text-[#5C5E64]"
                                                }`}
                                                onClick={() => toggleExpand(id)}
                                            >
                                                <div className="flex gap-2">
                                                    <Icon
                                                        fill={
                                                            expandedItems[id]
                                                                ? "#2B8DC5"
                                                                : "#5C5E64"
                                                        }
                                                    />
                                                    {locale === "ar"
                                                        ? titleAr
                                                        : titleEn}
                                                </div>
                                                {expandedItems[id] ? (
                                                    <ArrowUp
                                                        fill={
                                                            expandedItems[id]
                                                                ? "#2B8DC5"
                                                                : "#5C5E64"
                                                        }
                                                    />
                                                ) : (
                                                    <ArrowDown
                                                        fill={
                                                            expandedItems[id]
                                                                ? "#2B8DC5"
                                                                : "#5C5E64"
                                                        }
                                                    />
                                                )}
                                            </Link>
                                            {expandedItems[id] && (
                                                <ul className="space-y-2 relative">
                                                    <span className="w-1 h-full block bg-[#d9d9d9] absolute top-0 left-5"></span>
                                                    {subItems.map(
                                                        ({
                                                            id,
                                                            titleAr,
                                                            titleEn,
                                                            link,
                                                        }) => {
                                                            return (
                                                                <li
                                                                    key={id}
                                                                    className="ml-8"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            link
                                                                        }
                                                                        className="p-2 inline-block w-full font-medium text-[#5C5E64]"
                                                                    >
                                                                        {locale ===
                                                                        "ar"
                                                                            ? titleAr
                                                                            : titleEn}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link}
                                            className={`flex gap-2 items-center font-medium p-3 hover:bg-gray-100 rounded-md ${
                                                asPath === link
                                                    ? "text-blue-700 bg-gray-100"
                                                    : "text-[#5C5E64]"
                                            }`}
                                        >
                                            <Icon
                                                fill={
                                                    asPath === link
                                                        ? "#2B8DC5"
                                                        : "#5C5E64"
                                                }
                                            />{" "}
                                            {locale === "ar"
                                                ? titleAr
                                                : titleEn}
                                        </Link>
                                    )}
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
