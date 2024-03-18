import React from "react";
import Table from "../../Table/Table";

import Image from "next/image";

const data = [
    {
        items: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        description: "hair care",
        quantity: 1,
        price: 1,
        amount: 2,
        barcode: "/images/orders/bar_code.png",
    },
    {
        items: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        description: "hair care",
        quantity: 1,
        price: 1,
        amount: 2,
        barcode: "/images/orders/bar_code.png",
    },
    {
        items: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        description: "hair care",
        quantity: 1,
        price: 1,
        amount: 2,
        barcode: "/images/orders/bar_code.png",
    },
    {
        items: "Johnson's Baby Shampoo 500ml",
        productImg: "/images/product.png",
        description: "hair care",
        quantity: 1,
        price: 1,
        amount: 2,
        barcode: "/images/orders/bar_code.png",
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Items",
        value: "items",
        sortable: true,
        CustomComponent: ({ item }: any) => {
            const { items, productImg } = item;
            return (
                <div className="flex items-center gap-2">
                    <Image
                        src={productImg}
                        width={50}
                        height={50}
                        alt="product image"
                    />
                    <p className="text-sm">{items}</p>
                </div>
            );
        },
    },
    {
        heading: "Description",
        headingFr: "Date de facturation",
        value: "description",
    },
    {
        heading: "Quantity",
        headingFr: "Montant de la facture",
        value: "quantity",
    },
    {
        heading: "Price",
        headingFr: "Montant de la facture",
        value: "price",
        CustomComponent: ({ item }: any) => {
            const { price } = item;
            return (
                <p className="text-xs font-medium text-black-500">
                    {price} SAR
                </p>
            );
        },
    },
    {
        heading: "Amount",
        headingFr: "Montant de la facture",
        value: "amount",
        CustomComponent: ({ item }: any) => {
            const { amount } = item;
            return (
                <p className="text-xs font-medium text-black-500">
                    {amount} SAR
                </p>
            );
        },
    },
    {
        heading: "Barcode",
        headingFr: "Montant de la facture",
        value: "barcode",
        CustomComponent: ({ item }: any) => {
            const { barcode } = item;
            return (
                <div className="flex items-center gap-2">
                    <Image
                        src={barcode}
                        width={147}
                        height={44}
                        alt="barcode"
                    />
                </div>
            );
        },
    },
];

const InvoiceTable = () => {
    return <Table column={columns} tableData={data} />;
};

export default InvoiceTable;
