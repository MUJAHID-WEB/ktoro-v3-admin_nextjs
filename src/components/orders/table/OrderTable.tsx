import React, { useState } from "react";
import Table from "../../Table/Table";
import profile_pic from "../../../../public/images/photo.avif";
import Badge from "@/components/base/Badge";
import Avatar from "@/components/base/Avatar";
import TableActions from "@/components/base/TableActions";

const data = [
    {
        Id: 20502252,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Originalstatus: "Pending",
        Status: "Active",
        SubStatus: "Deactive",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
        Changestatus: "/categories/edit",
    },
    {
        Id: 20502254,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Originalstatus: "Processing",
        Status: "Active",
        SubStatus: "Active",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
        Changestatus: "/categories/edit",
    },
    {
        Id: 20502256,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Originalstatus: "Cancle",
        Status: "Deactive",
        SubStatus: "Deactive",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
        Changestatus: "/categories/edit",
    },
    {
        Id: 20502258,
        PurchaseDate: "Aug 23, 2023 2:59:32 AM",
        Originalstatus: "Refund",
        Status: "Active",
        SubStatus: "Active",
        Subtotal: "SAR 330.00",
        CustomerName: "Mohammed Alrayes",
        Changestatus: "/categories/edit",
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
        heading: "Purchase Date",
        headingFr: "Date de facturation",
        value: "PurchaseDate",
    },
    {
        heading: "Original status",
        headingFr: "Montant de la facture",
        value: "Originalstatus",
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
    {
        heading: "Change status",
        headingFr: "voySolde dûage",
        value: "Changestatus",
        CustomComponent: AvatarGroup,
    },
];

// status Component
function StatusCompo({ item }: any) {
    const color = item.Status == "Active" ? "bg-green-500" : "bg-red-500";

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
    const color = item.SubStatus == "Active" ? "bg-green-500" : "bg-red-500";

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

// Avatar Group Component
function AvatarGroup({ item }: any) {
    return (
        <div className="col-span-1 flex">
            <div className="group">
                <Avatar
                    border
                    avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                    url={profile_pic}
                />
            </div>
            <div className="-ml-5 group">
                <Avatar
                    border
                    avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                    url={profile_pic}
                />
            </div>
            <div className="-ml-5 group">
                <Avatar
                    border
                    avatarClass="!h-[40px] !w-[40px] group-hover:border-blue-700"
                    url={profile_pic}
                />
            </div>
        </div>
    );
}

const OrderTable = () => {
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

export default OrderTable;
