import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CountryDropdownItem from "./CountryDropdownItem";
import Dropdown from "../base/Dropdown";

export type Country = {
    code: string;
    name: string;
};

const countrys = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "ar",
        name: "Arabic",
    },
];

const CountryDropdown = () => {
    const router = useRouter();
    const { locale } = router;
    const [open, setOpen] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        code: "en",
        name: "English",
    });

    const handleCountry = (country: Country) => {
        setSelectedCountry(country);
        handleChangeLanguage(country.code);
        setOpen(false);
    };

    const handleChangeLanguage = (code: string) => {
        router.push(router.pathname, "", {
            locale: code == "en" ? "en" : "ar",
        });
    };

    useEffect(() => {
        if (locale === "ar") {
            setSelectedCountry(countrys[1]);
        } else {
            setSelectedCountry(countrys[0]);
        }
    }, [locale]);
    return (
        <div className="relative">
            <h3
                onClick={() => setOpen(!open)}
                className="font-bold text-sm text-[#5C5E64] uppercase cursor-pointer"
            >
                {selectedCountry.code}
            </h3>
            {open && (
                <Dropdown>
                    <div className="w-[180px] pb-2">
                        <h3 className="font-bold text-lg text-center py-2">
                            Select Language
                        </h3>
                        <hr className="py-1" />
                        <div className="flex flex-col gap-1">
                            {countrys.map((country) => (
                                <CountryDropdownItem
                                    key={country.code}
                                    country={country}
                                    onClick={handleCountry}
                                    selectedCode={selectedCountry?.code}
                                />
                            ))}
                        </div>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

export default CountryDropdown;
