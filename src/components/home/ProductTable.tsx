import React from "react";

import Table from "../Table/Table";

const data = [
    {
        productName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        productName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        productName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        productName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Product Name",
        headingFr: "Date de facturation",
        value: "productName",
    },
    {
        heading: "Num Products",
        headingFr: "Date de facturation",
        value: "numProducts",
    },
    {
        heading: "Sold",
        headingFr: "Montant de la facture",
        value: "sold",
    },
    {
        heading: "SALES",
        headingFr: "Montant de la facture",
        value: "sales",
        CustomComponent: ({ item }: any) => {
            const { sales } = item;
            return (
                <p className="text-lg font-normal text-[#4CBF73]">$ {sales}</p>
            );
        },
    },
];

const ProductTable = () => {
    return <Table column={columns} tableData={data} />;
};

export default ProductTable;
