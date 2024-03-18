import React from "react";
import BreadCrumb from "../../base/BreadCrumb";
import Tabs from "../../base/Tabs";
import Table from "../../Table/Table";
import Badge from "../../base/Badge";
import Visibility from "../../svg/Visibility";
import Link from "next/link";
import Edit from "../../svg/Edit";
import Image from "next/image";

// Breadcrumb data
const paths = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Users",
    url: "/settings/users",
  },
];

// Table data
const columns: any = [
  {
    heading: "Name",
    value: "name",
    sortable: true,
    CustomComponent: ({ item }: any) => {
      const { name, location, profile_url } = item;
      console.log(item);
      return (
        <div className="flex gap-4">
          <Image
            src={profile_url}
            width={50}
            height={50}
            alt={`${name}-profile`}
          />
          <div>
            <h4>{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      );
    },
  },
  {
    heading: "Email",
    value: "email",
  },
  {
    heading: "Phone",
    value: "phone",
  },
  {
    heading: "Role",
    value: "role",
    CustomComponent: ({ item }: any) => {
      const { role } = item;
      return <Badge text={role} badgeClass="!bg-gray-200" />;
    },
  },
  {
    heading: "Profile",
    value: "profile",
    CustomComponent: ({ item }: any) => {
      const { profile } = item;
      return <Link href="/settings/users/profile">{profile}</Link>;
    },
  },
  {
    heading: "Actions",
    value: "Actions",
    CustomComponent: ({ item }: any) => {
      const { actions } = item;
      return <Link href="/settings/users/profile">{actions}</Link>;
    },
  },
];

const userTableData = [
  {
    name: "Salman",
    email: "a@a.com",
    phone: "1234567890",
    role: "Owner",
    profile: <Visibility fill="#787878" />,
    actions: <Edit fill="#787878" />,
    location: "Jeddha - Saudi Arabia",
    profile_url: "/images/profile-circle.png",
  },
  {
    name: "Amir Ahmed",
    email: "amir@hotmail.com",
    phone: "987456321",
    role: "Accountant",
    profile: <Visibility fill="#787878" />,
    actions: <Edit fill="#787878" />,
    location: "Riyadh - Saudi Arabia",
    profile_url: "/images/profile-circle.png",
  },
];

// Role table data
const roleTableColumns = [
  {
    heading: "Role Name",
    value: "role",
  },
  {
    heading: "Actions",
    value: "action",
  },
];

const roleTableData = [
  {
    role: "Owner",
    action: <Visibility fill="#787878" />,
  },
  {
    role: "Accountant",
    action: <Visibility fill="#787878" />,
  },
];

// Tabs
const tabs = [
  {
    label: "Users",
    content: <Table column={columns} tableData={userTableData} />,
    btnLink: "/settings/users/profile",
    btnText: "Add New User",
  },
  {
    label: "Role",
    content: <Table column={roleTableColumns} tableData={roleTableData} />,
    btnLink: "/settings/users/role",
    btnText: "Add New Role",
  },
];

const UsersSection = () => {
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md">
        <Tabs tabs={tabs} btnClass="primary" />
      </div>
    </div>
  );
};

export default UsersSection;
