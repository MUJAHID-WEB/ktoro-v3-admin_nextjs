import React from "react";

import Table from "../Table/Table";

const data = [
    {
        categoryName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        categoryName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        categoryName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
    {
        categoryName: "Phone",
        numProducts: 250,
        sold: 70,
        sales: 964.0,
    },
];

// orders table columns
const columns: any = [
    {
        heading: "Category Name",
        headingFr: "Date de facturation",
        value: "categoryName",
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

const InvoiceTable = () => {
    return <Table column={columns} tableData={data} />;
};

export default InvoiceTable;
