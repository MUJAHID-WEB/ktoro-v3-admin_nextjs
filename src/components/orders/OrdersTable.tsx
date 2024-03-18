import React, { useState } from "react";
import OrdersTableHeader from "./OrdersTableHeader";
import OrderTableContent from "./OrderTableContent";
import ActionDropdown from "./ActionDropdown";
import PageDropdown from "./PageDropdown";
import OrderPagination from "./OrderPagination";
import { useRouter } from "next/router";

const OrdersTable = () => {
    // pagination state
    const [page, setPage] = useState<number>(1);
    // select per page state
    const [selectSize, setSelectSize] = useState<number>(20);
    const router = useRouter();
    const { locale } = router;
    return (
        <div>
            {/* table action, pagination, per page */}
            <div className="my-5 flex justify-end items-center gap-2">
                <p className="text-black-500 font-normal text-sm capitalize">
                    13 Orders {locale === "ar" ? "إجمالى" : "found"}
                </p>
                {/* action  dropdown*/}
                <ActionDropdown />

                {/* page  dropdown*/}
                <PageDropdown
                    selectSize={selectSize}
                    setSelectSize={setSelectSize}
                />

                {/* pagination  */}
                <OrderPagination page={page} setPage={setPage} />
            </div>
            {/* table header  */}
            <OrdersTableHeader />
            {/* table content  */}
            <OrderTableContent even />
            <OrderTableContent />
            <OrderTableContent even />
            <OrderTableContent />
            <OrderTableContent even />
        </div>
    );
};

export default OrdersTable;
