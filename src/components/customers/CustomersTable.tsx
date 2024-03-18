import React, { useState } from "react";
import Badge from "@/components/base/Badge";
import TableActions from "@/components/base/TableActions";
import Table from "../Table/Table";
import Card from "../base/Card";
import SearchPanel from "../base/SearchPanel";
import Avatar from "../base/Avatar";
import Visibility from "../svg/Visibility";
import Close from "../svg/Close";
import Edit from "../svg/Edit";
import DeleteIcon from "../svg/DeleteIcon";

const data = [
    {
        id: 1,
        customerName: "Salman",
        customerPhoto: "/images/photo.avif",
        address: "Jeddah - Saudi Arabia",
        email: "malinjr07@gmail.com",
        phone: "966598493855",
        status: "Active",
        joined: "28 Aug 2023 13:13   ",
    },
    {
        id: 2,
        customerName: "Salman",
        customerPhoto: "/images/photo.avif",
        address: "Jeddah - Saudi Arabia",
        email: "malinjr07@gmail.com",
        phone: "966598493855",
        status: "Delete",
        joined: "28 Aug 2023 13:13   ",
    },
    {
        id: 3,
        customerName: "Salman",
        customerPhoto: "/images/photo.avif",
        address: "Jeddah - Saudi Arabia",
        email: "malinjr07@gmail.com",
        phone: "966598493855",
        status: "Active",
        joined: "28 Aug 2023 13:13   ",
    },
    {
        id: 4,
        customerName: "Salman",
        customerPhoto: "/images/photo.avif",
        address: "Jeddah - Saudi Arabia",
        email: "malinjr07@gmail.com",
        phone: "966598493855",
        status: "Active",
        joined: "28 Aug 2023 13:13   ",
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Customer",
        value: "customer",
        CustomComponent: CustomerProfile,
    },
    {
        heading: "Email",
        headingFr: "Date de facturation",
        value: "email",
    },
    {
        heading: "Phone",
        headingFr: "Montant de la facture",
        value: "phone",
    },
    {
        heading: "Status",
        headingFr: "Montant de la facture",
        value: "status",
        CustomComponent: StatusCompo,
    },
    {
        heading: "Joined",
        headingFr: "Montant de la facture",
        value: "joined",
    },
    {
        heading: "Actions",
        headingFr: "Montant de la facture",
        value: "actions",
        CustomComponent: ActionsCom,
    },
];

// status Component
function StatusCompo({ item }: any) {
    const color = item.status == "Active" ? "bg-green-500" : "bg-red-500";

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

// Actions Component
function ActionsCom({ item }: any) {
    const { id } = item;
    return (
        <div className="flex items-center gap-3">
            <div className="cursor-pointer">
                <Visibility fill="#5C5F62" />
            </div>
            <div className="cursor-pointer">
                <Edit fill="#5C5F62" />
            </div>
            <div className="cursor-pointer">
                <DeleteIcon fill="#5C5F62" />
            </div>
        </div>
    );
}

// Customer Profile Component
function CustomerProfile({ item }: any) {
    const { customerName, customerPhoto, address } = item;
    return (
        <div className="flex items-center gap-2">
            <Avatar url={customerPhoto} />
            <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-black-500">
                    {customerName}
                </p>
                <p className="text-sm font-normal text-black-500">{address}</p>
            </div>
        </div>
    );
}

const CustomersTable = () => {
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

export default CustomersTable;
