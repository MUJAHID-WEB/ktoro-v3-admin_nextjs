import { searchPanelContent } from "@/static/contents/searchPanel";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";
import ActionDropdown from "../orders/ActionDropdown";
import PageDropdown from "../orders/PageDropdown";
import OrderPagination from "../orders/OrderPagination";

interface Props {
    selectSize: number;
    setSelectSize: (value: number) => void;
    page: number;
    setPage: (value: number) => void;
}

const TableActions = ({ selectSize, setSelectSize, page, setPage }: Props) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", searchPanelContent);
    return (
        <div>
            <div className="py-3 border-y">
                {locale === "ar" ? (
                    <p className="font-semibold">
                        : {content.spActiveFilterText}
                    </p>
                ) : (
                    <p className="font-semibold">
                        {content.spActiveFilterText} :
                    </p>
                )}
            </div>
            {/* table action, pagination, per page */}
            <div className="my-5 flex justify-between items-center gap-2">
                {/* action  dropdown*/}
                <div className="flex items-center gap-2">
                    <ActionDropdown />
                    <p className="text-black-500 font-normal text-sm capitalize">
                        13 Orders {locale === "ar" ? "إجمالى" : "found"}
                    </p>{" "}
                </div>
                <div className="flex items-center gap-2">
                    {/* page  dropdown*/}
                    <PageDropdown
                        selectSize={selectSize}
                        setSelectSize={setSelectSize}
                    />
                    {/* pagination  */}
                    <OrderPagination page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    );
};

export default TableActions;
