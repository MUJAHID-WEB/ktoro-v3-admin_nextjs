import React from "react";
import Tabs from "../base/Tabs";
import OrdersTable from "../orders/OrdersTable";
import Table from "../Table/Table";
import Edit from "../svg/Edit";
import Trash from "../svg/Trash";
import Image from "next/image";
import Badge from "../base/Badge";
import Link from "next/link";
import BreadCrumb from "../base/BreadCrumb";

// example data
const data = [
  {
    Category: "Light Stick",
    Description: "Light Stick",
    Status: "Active",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Figuers",
    Description: "Figuers",
    Status: "Active",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Jewelry",
    Description: "Jewelry",
    Status: "Deactive",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Phone Accessories",
    Description: "Phone Accessories",
    Status: "Active",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
];
// table columns
const columns: any = [
  {
    heading: "Category",
    value: "Category",
    sortable: true,
    CustomComponent: ({ item }: any) => {
      const { Category, ProductImg } = item;

      return (
        <div className="flex items-center gap-2">
          <Image src={ProductImg} width={50} height={50} alt="product image" />
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
    heading: "Status",
    headingFr: "Montant de la facture",
    value: "Status",
    CustomComponent: StatusCompo,
  },
  {
    heading: "Action",
    headingFr: "voySolde dûage",
    value: "Action",
    CustomComponent: ButtonCombo,
  },
];

// example data
const subCatData = [
  {
    Category: "Light Stick",
    Description: "Light Stick",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Figuers",
    Description: "Figuers",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Jewelry",
    Description: "Jewelry",
    Status: "Deactive",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
  {
    Category: "Phone Accessories",
    Description: "Phone Accessories",
    Action: "",
    ProductImg: "/images/product.png",
    AddCategoryLink: "/categories/edit",
  },
];
// table columns
const subCatColumns: any = [
  {
    heading: "Category",
    value: "Category",
    sortable: true,
    CustomComponent: ({ item }: any) => {
      const { Category, ProductImg } = item;

      return (
        <div className="flex items-center gap-2">
          <Image src={ProductImg} width={50} height={50} alt="product image" />
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

const tabs = [
  {
    label: "Main",
    content: <Table column={columns} tableData={data} />,
  },
  {
    label: "Sub",
    content: <Table column={subCatColumns} tableData={subCatData} />,
  },
  {
    label: "Child",
    content: <OrdersTable />,
  },
];

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

function ProductsSection({
  imgSrc = "/images/product.png",
  title = "Title",
}: {
  imgSrc: string;
  title: string;
}) {
  return (
    <div className="flex justify-start items-center gap-2">
      <Image src={imgSrc} alt={title} width={50} height={50} />
      <p>{title}</p>
    </div>
  );
}

const CategoriesSection = () => {
  const paths = [
    { title: "Dashboard", url: "/" },
    { title: "Categories", url: "/categories" },
    // { title: "Current Page", url: "/category/currentpage" },
  ];
  return (
    <div className="mt-8">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md">
        <Tabs tabs={tabs} btnText="Add Category" btnLink="/categories/add" />
      </div>
    </div>
  );
};

export default CategoriesSection;
