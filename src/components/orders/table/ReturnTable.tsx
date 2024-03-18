import React, { useState } from "react";
import Table from "../../Table/Table";
import Badge from "@/components/base/Badge";
import TableActions from "@/components/base/TableActions";

const data = [
    {
        Id: 20502252,
        ShippmentID: 20502252,
        ReturnID: 20502252,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Status: "Return",
        SubStatus: "Test 1",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
    },
    {
        Id: 20502254,
        ShippmentID: 20502252,
        ReturnID: 20502252,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Status: "Return",
        SubStatus: "Test 2",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
    },
    {
        Id: 20502256,
        ShippmentID: 20502252,
        ReturnID: 20502252,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Status: "Return",
        SubStatus: "Test 3",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
    },
    {
        Id: 20502258,
        ShippmentID: 20502252,
        ReturnID: 20502252,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Status: "Return",
        SubStatus: "Test 4",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Id",
        value: "Id",
        sortable: true,
        CustomComponent: ({ item }: any) => {
            const { Id } = item;
            return (
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <p className="text-sm">#{Id}</p>
                </div>
            );
        },
    },
    {
        heading: "Shippment ID",
        headingFr: "Date de facturation",
        value: "ShippmentID",
        CustomComponent: ({ item }: any) => {
            const { ShippmentID } = item;
            return <p className="text-sm">#{ShippmentID}</p>;
        },
    },
    {
        heading: "Return ID",
        headingFr: "Date de facturation",
        value: "ReturnID",
        CustomComponent: ({ item }: any) => {
            const { ReturnID } = item;
            return <p className="text-sm">#{ReturnID}</p>;
        },
    },
    {
        heading: "Purchase Date",
        headingFr: "Date de facturation",
        value: "PurchaseDate",
    },
    {
        heading: "Status",
        headingFr: "Montant de la facture",
        value: "Status",
        CustomComponent: StatusCompo,
    },
    {
        heading: "Sub Status",
        headingFr: "Montant de la facture",
        value: "SubStatus",
        CustomComponent: SubStatusCompo,
    },
    {
        heading: "Subtotal",
        headingFr: "Montant de la facture",
        value: "Subtotal",
    },
    {
        heading: "Customer Name",
        headingFr: "Montant de la facture",
        value: "CustomerName",
    },
];

// status Component
function StatusCompo({ item }: any) {
    const color = item.Status == "Return" ? "bg-green-500" : "bg-red-500";

    return (
        <div>
            <Badge
                status={true}
                text={item.Status}
                badgeClass={color}
                statusClass={color}
            />
        </div>
    );
}

// SubStatus Component
function SubStatusCompo({ item }: any) {
    return (
        <div>
            <Badge
                status={true}
                text={item.Status}
                badgeClass="!bg-[#E4E5E7]"
                statusClass="!bg-[#6D7175]"
            />
        </div>
    );
}

const ReturnTable = () => {
    // pagination state
    const [page, setPage] = useState<number>(1);
    // select per page state
    const [selectSize, setSelectSize] = useState<number>(20);

    return (
        <div>
            {/* table action, pagination, per page */}
            <TableActions
                page={page}
                selectSize={selectSize}
                setPage={setPage}
                setSelectSize={setSelectSize}
            />

            {/* table  */}
            <Table column={columns} tableData={data} />
        </div>
    );
};

export default ReturnTable;
