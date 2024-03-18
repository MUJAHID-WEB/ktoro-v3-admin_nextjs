import React, { useState } from "react";
import Badge from "@/components/base/Badge";
import TableActions from "@/components/base/TableActions";
import Table from "../Table/Table";
import Card from "../base/Card";
import SearchPanel from "../base/SearchPanel";

const data = [
    {
        Id: 20502258,
        orderNumber: 85388,
        subject: "Sold out",
        requester: "salman mir",
        lastReplier: "anas eyad ",
        assignee: "anas eyad ",
        subAssignee: "wfa jon",
        status: "open",
        priority: "high",
    },
    {
        Id: 20502258,
        orderNumber: 85388,
        subject: "Sold out",
        requester: "salman mir",
        lastReplier: "anas eyad ",
        assignee: "anas eyad ",
        subAssignee: "wfa jon",
        status: "close",
        priority: "high",
    },
    {
        Id: 20502258,
        orderNumber: 85388,
        subject: "Sold out",
        requester: "salman mir",
        lastReplier: "anas eyad ",
        assignee: "anas eyad ",
        subAssignee: "wfa jon",
        status: "open",
        priority: "middle",
    },
    {
        Id: 20502258,
        orderNumber: 85388,
        subject: "Sold out",
        requester: "salman mir",
        lastReplier: "anas eyad ",
        assignee: "anas eyad ",
        subAssignee: "wfa jon",
        status: "close",
        priority: "low",
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
        heading: "Order Number",
        headingFr: "Date de facturation",
        value: "orderNumber",
    },
    {
        heading: "Subject",
        headingFr: "Montant de la facture",
        value: "subject",
    },
    {
        heading: "Requester",
        headingFr: "Montant de la facture",
        value: "requester",
    },
    {
        heading: "Last Replier",
        headingFr: "Montant de la facture",
        value: "lastReplier",
    },
    {
        heading: "Assignee",
        headingFr: "Montant de la facture",
        value: "assignee",
    },
    {
        heading: "Sub Assignee",
        headingFr: "Montant de la facture",
        value: "subAssignee",
    },
    {
        heading: "Status",
        headingFr: "Montant de la facture",
        value: "status",
        CustomComponent: StatusCompo,
    },
    {
        heading: "Priority",
        headingFr: "Montant de la facture",
        value: "priority",
        CustomComponent: Priority,
    },
];

// status Component
function StatusCompo({ item }: any) {
    const color = item.status == "open" ? "bg-green-500" : "bg-red-500";

    return (
        <div>
            <Badge
                status={true}
                text={item.status}
                badgeClass={color}
                statusClass={color}
            />
        </div>
    );
}

// SubStatus Component
function Priority({ item }: any) {
    const color =
        item.priority == "high"
            ? "bg-red-500"
            : item.priority == "middle"
            ? "bg-[#D7620D]"
            : "bg-[#0381A9]";

    return (
        <div>
            <Badge
                status={true}
                text={item.priority}
                badgeClass={color}
                statusClass={color}
            />
        </div>
    );
}

const TicketTable = () => {
    // pagination state
    const [page, setPage] = useState<number>(1);
    // select per page state
    const [selectSize, setSelectSize] = useState<number>(20);
    return (
        <div>
            <Card cardClass="!px-4 !py-9">
                {/* orders table filter  */}
                <SearchPanel />
                {/* table action, pagination, per page */}
                <TableActions
                    page={page}
                    selectSize={selectSize}
                    setPage={setPage}
                    setSelectSize={setSelectSize}
                />

                {/* table  */}
                <Table column={columns} tableData={data} />
            </Card>
        </div>
    );
};

export default TicketTable;
