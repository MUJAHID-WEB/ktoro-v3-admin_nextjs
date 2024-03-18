import React from "react";
import Link from "next/link";
import AddIcon from "../svg/AddIcon";
import Table from "../Table/Table";
import Image from "next/image";
import Edit from "../svg/Edit";
import Trash from "../svg/Trash";
import BreadCrumb from "../base/BreadCrumb";
import { useRouter } from "next/router";

const subCatData = [
  {
    Category: "Light Stick",
    Description: "Light Stick",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/brands/edit",
  },
  {
    Category: "Figuers",
    Description: "Figuers",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/brands/edit",
  },
  {
    Category: "Jewelry",
    Description: "Jewelry",
    Status: "Deactive",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/brands/edit",
  },
  {
    Category: "Phone Accessories",
    Description: "Phone Accessories",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/brands/edit",
  },
];

const subCatColumns: any = [
  {
    heading: "Category",
    value: "Category",
    sortable: true,
    CustomComponent: ({ item }: any) => {
      const { Category, ProductImg } = item;

      return (
        <div className="flex items-center gap-2">
          <Image
            src={ProductImg}
            width={50}
            height={50}
            alt="product image"
            className="border rounded-md"
          />
          <p className="text-sm">{Category}</p>
        </div>
      );
    },
  },
  {
    heading: "Description",
    headingFr: "Date de facturation",
    value: "Description",
    // CustomComponent: ProductsSection,
  },
  {
    heading: "Action",
    headingFr: "voySolde dûage",
    value: "Action",
    CustomComponent: ButtonCombo,
  },
];

function ButtonCombo({ item }: any) {
  const { AddCategoryLink } = item;

  return (
    <div className="flex justify-start gap-4">
      <Link href={AddCategoryLink}>
        <Edit />
      </Link>
      <button>
        <Trash />
      </button>
    </div>
  );
}

const BrandSection = () => {
  const paths = [
    { title: "Dashboard", url: "/" },
    { title: "Brands", url: "/brands" },
    // { title: "Current Page", url: "/category/currentpage" },
  ];

  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-end items-center mb-4">
          <Link href="/brands/add" className="btn outline">
            <AddIcon /> Add Brand
          </Link>
        </div>
        <Table column={subCatColumns} tableData={subCatData} />
      </div>
    </div>
  );
};

export default BrandSection;
