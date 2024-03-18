import React, { useState } from "react";
import Scan from "../svg/Scan";
import Dot3 from "../svg/Dot3";
import UserMenu from "./UserMenu";
import Dropdown from "../base/Dropdown";
import CountryDropdown from "./CountryDropdown";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import { layoutHeaderContent } from "@/static/contents/layout";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    const router = useRouter();
    let { locale } = router;

    const content: any = useTranslator(locale || "en", layoutHeaderContent);
    return (
        <div className="flex justify-between items-start pt-12">
            {/* left section  */}
            <div>
                <h1 className="font-normal text-3xl">
                    {content.layoutHeaderTitleHi} Salman,{" "}
                    <b className="text-blue-500">
                        {content.layoutHeaderTitleDayStatus}
                    </b>
                </h1>
                <p className="text-gray-500 text-base font-normal">
                    {content.layoutHeaderSubTitle}
                </p>
            </div>
            {/* right section  */}
            <div className="flex items-center gap-3 relative">
                <div className="cursor-pointer">
                    <Scan />
                </div>
                <CountryDropdown />
                <div onClick={() => setOpen(!open)} className="cursor-pointer">
                    <Dot3 />
                </div>
                {open && (
                    <Dropdown dropdownClass="!right-20">
                        <div className="w-[120px]  py-2">
                            <div className="flex items-center gap-2 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                <h3 className="font-normal text-sm">
                                    Company 1
                                </h3>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                <h3 className="font-normal text-sm">
                                    Company 1
                                </h3>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer">
                                <h3 className="font-normal text-sm">All</h3>
                            </div>
                        </div>
                    </Dropdown>
                )}
                <UserMenu />
            </div>
        </div>
    );
};

export default Header;
