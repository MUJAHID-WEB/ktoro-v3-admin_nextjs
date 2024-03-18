import React, { useState } from "react";
import Link from "next/link";

type Tab = {
  label: string;
  content: React.ReactNode;
  btnLink?: string;
  btnText?: string;
  onClick?: () => void;
};

type TabsProps = {
  tabs: Tab[];
  btnLink?: string;
  btnText?: string;
  btnClass?: string;
  onClick?: () => void;
  tabsIndex?: (index: number) => void;
};


const Tabs: React.FC<TabsProps> = ({
    tabs,
    btnLink,
    btnText,
    btnClass,
    tabsIndex,
}) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className={`flex flex-row justify-start gap-6`}>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                            ) => {
                                handleTabClick(index);
                                if (tabsIndex) {
                                    tabsIndex(index);
                                }
                            }}
                            className={`py-3 px-6 md:pb-1 md:pt-0 md:px-1 font-semibold w-full flex justify-between md:w-auto ${
                                activeTab === index
                                    ? "border-b md:border-b-4 border-blue-500 md:border-black-primary text-blue-500"
                                    : "border-b md:border-b-2 border-ash-400 md:border-transparent text-black-primary md:text-gray-300"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {btnLink && (
                    <Link
                        href={btnLink}
                        className={`btn ${btnClass || "outline"}`}
                    >
                        {btnText}
                    </Link>
                )}




                {tabs[activeTab].btnLink && (
                    <Link
                        href={tabs[activeTab].btnLink ?? "#"}
                        className={`btn ${btnClass || "outline"}`}
                    >
                        {tabs[activeTab].btnText}
                    </Link>
                )}
            </div>
            <hr />
            <div className="md:border-t border-ash-400 md:py-6">
                {tabs[activeTab].content}
            </div>
        </>
    );
};

export default Tabs;
