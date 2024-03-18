import React, { useState } from "react";
import Table from "../../Table/Table";

import Badge from "@/components/base/Badge";
import Image from "next/image";
import TableActions from "@/components/base/TableActions";

const data = [
    {
        product: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        type: "Simple Product",
        status: "Active",
        sellStatus: "In Stock",
        availabilityInWarehouse: 2,
        statusOfWarehouse: "Available",
        damageQuantity: 5,
    },
    {
        product: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        type: "Simple Product",
        status: "Deactive",
        sellStatus: "Out Of Stock",
        availabilityInWarehouse: 2,
        statusOfWarehouse: "Available",
        damageQuantity: 5,
    },
    {
        product: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        type: "Simple Product",
        status: "Active",
        sellStatus: "In Stock",
        availabilityInWarehouse: 2,
        statusOfWarehouse: "Available",
        damageQuantity: 5,
    },
    {
        product: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        type: "Simple Product",
        status: "Deactive",
        sellStatus: "In Stock",
        availabilityInWarehouse: 2,
        statusOfWarehouse: "Available",
        damageQuantity: 5,
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Product",
        value: "product",
        sortable: true,
        CustomComponent: ({ item }: any) => {
            const { product, productImg } = item;
            return (
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <Image
                        src={productImg}
                        width={50}
                        height={50}
                        alt="product image"
                    />
                    <p className="text-sm">{product}</p>
                </div>
            );
        },
    },
    {
        heading: "Type",
        headingFr: "Date de facturation",
        value: "type",
    },
    {
        heading: "Status",
        headingFr: "Montant de la facture",
        value: "status",
        CustomComponent: StatusCompo,
    },
    {
        heading: "Sell Status",
        headingFr: "Montant de la facture",
        value: "sellStatus",
        CustomComponent: SellStatusCompo,
    },
    {
        heading: "Availability in warehouse",
        headingFr: "Montant de la facture",
        value: "availabilityInWarehouse",
    },
    {
        heading: "Status Of warehouse",
        headingFr: "Montant de la facture",
        value: "statusOfWarehouse",
        CustomComponent: StatusOfWarehouseCompo,
    },
    {
        heading: "Damage Quantity",
        headingFr: "Montant de la facture",
        value: "damageQuantity",
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

// SellStatus Component
function SellStatusCompo({ item }: any) {
    const color = item.sellStatus == "In Stock" ? "bg-green-500" : "bg-red-500";

    return (
        <div>
            <Badge
                status={true}
                text={item.sellStatus}
                badgeClass={color}
                statusClass={color}
            />
        </div>
    );
}
// Status Of Warehouse Component
function StatusOfWarehouseCompo({ item }: any) {
    const color =
        item.statusOfWarehouse == "Available" ? "bg-green-500" : "bg-red-500";

    return (
        <div>
            <Badge
                status={true}
                text={item.statusOfWarehouse}
                badgeClass={color}
                statusClass={color}
            />
        </div>
    );
}

const ProductTable = () => {
    // pagination state
    const [page, setPage] = useState<number>(1);
    // select per page state
    const [selectSize, setSelectSize] = useState<number>(20);
    return (
        <div className="w-full">
            <TableActions
                page={page}
                selectSize={selectSize}
                setPage={setPage}
                setSelectSize={setSelectSize}
            />
            <div className="w-[calc(100vw-400px)] overflow-x-auto overflow-y-hidden">
                <div className="w-screen">
                    <Table column={columns} tableData={data} />
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
