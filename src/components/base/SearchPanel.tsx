import React, { useState } from "react";
import TextField from "./TextField";
import Search from "../svg/Search";
import FilterIcon from "../svg/FilterIcon";
import Gear from "../svg/Gear";
import ExportIcon from "../svg/ExportIcon";
import Filters from "./Filters";
import Columns from "./Columns";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslator from "@/utils/useTranslator";
import { searchPanelContent } from "@/static/contents/searchPanel";

type SearchPanelProps = {
    linkPath?: string;
    linkText?: string;
    linkPathSecondary?: string;
    linkTextSecondary?: string;
};

const SearchPanel = ({
    linkPath,
    linkText,
    linkPathSecondary,
    linkTextSecondary,
}: SearchPanelProps) => {
    const router = useRouter();
    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const [columnsOpen, setColumnsOpen] = useState<boolean>(false);

    let { locale } = router;
    const content: any = useTranslator(locale || "en", searchPanelContent);
    return (
        <>
            <div className="pb-3 flex justify-between items-center gap-4 relative">
                <div className="flex gap-4">
                    <TextField
                        inputType="text"
                        groupClass="!mt-0 !p-3 !w-[350px]"
                        onChangeCb={(e) => console.log(e)}
                        identifier="search"
                        leftIcon={
                            <Search fill="#2B8DC5" width="20" height="20" />
                        }
                        placeholder={content.spInputPlaceholder}
                    />

                    {/* link path primary */}
                    {linkPath && (
                        <Link href={linkPath} className="btn primary">
                            {linkText}
                        </Link>
                    )}

                    {/* link path secondary  */}
                    {linkPathSecondary && (
                        <Link href={linkPathSecondary} className="btn primary">
                            {linkTextSecondary}
                        </Link>
                    )}
                </div>
                <div className="flex gap-4">
                    <button
                        className={`px-6 py-4 flex items-center gap-2 border-x-2 border-t-4 bg-white relative ${
                            filterOpen
                                ? "border-x-ash-200 border-t-blue-700"
                                : "border-x-transparent border-t-transparent"
                        }`}
                        onClick={() => setFilterOpen(!filterOpen)}
                    >
                        <FilterIcon width="25" height="25" />
                        {content.filterText}
                        {filterOpen && (
                            <div className="w-full h-2 bg-white absolute right-0 top-14 z-[60]"></div>
                        )}
                    </button>
                    {filterOpen && <Filters />}
                    <button
                        className={`px-6 py-4 flex items-center gap-2 border-x-2 border-t-4 bg-white relative ${
                            columnsOpen
                                ? "border-x-ash-200 border-t-blue-700"
                                : "border-x-transparent border-t-transparent"
                        }`}
                        onClick={() => setColumnsOpen(!columnsOpen)}
                    >
                        <Gear /> {content.columnsText}
                        {columnsOpen && (
                            <div className="w-full h-2 bg-white absolute right-0 top-14 z-[60]"></div>
                        )}
                    </button>
                    {columnsOpen && <Columns />}
                    <button className="px-6 py-4 flex items-center gap-2 bg-white">
                        <ExportIcon /> {content.exportsText}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchPanel;
