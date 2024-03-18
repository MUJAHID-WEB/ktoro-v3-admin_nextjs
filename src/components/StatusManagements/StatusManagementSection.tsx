import React, { useState, FormEvent } from "react";

import Modal from "@/components/modals/Modal";
import Badge from "@/components/base/Badge";
import Edit from "@/components/svg/Edit";
import Table from "@/components/Table/Table";
import BreadCrumb from "@/components/base/BreadCrumb";
import Tabs from "@/components/base/Tabs";
import SelectedField from "../base/SelectedField";
import TextField from "../base/TextField";
// Breadcrumb data
const paths = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Manage Status",
    url: "/settings/status-managements",
  },
];
// Table data
const columns: any = [
  {
    heading: "Mange Status",
    value: "mangeStatus",
    sortable: true,
  },
  {
    heading: "Status",
    value: "status",
    CustomComponent: ({ item }: any) => {
      const { status } = item;
      return <Badge text={status} badgeClass="!bg-gray-200 !rounded" />;
    },
  },
  {
    heading: "Actions",
    value: "actions",
    CustomComponent: ({ item }: any) => {
      const { id } = item;
      return (
        <div className="cursor-pointer">
          <Edit />
        </div>
      );
    },
  },
];
const userTableData = [
  {
    id: 1,
    mangeStatus: "Pending",
    status: "Pre Order",
  },
  {
    id: 2,
    mangeStatus: "Processing",
    status: "Pre Order",
  },
  {
    id: 3,
    mangeStatus: "Shipped out",
    status: "Pre Order",
  },
  {
    id: 4,
    mangeStatus: "Delivered",
    status: "Pre Order",
  },
  {
    id: 5,
    mangeStatus: "Returned",
    status: "Pre Order",
  },
  {
    id: 6,
    mangeStatus: "Lost",
    status: "Pre Order",
  },
  {
    id: 7,
    mangeStatus: "Cancle",
    status: "Pre Order",
  },
  {
    id: 8,
    mangeStatus: "Fail order",
    status: "Pre Order",
  },
  {
    id: 9,
    mangeStatus: "Refend on way",
    status: "Pre Order",
  },
  {
    id: 10,
    mangeStatus: "Refend delivered",
    status: "Pre Order",
  },
];
const StatusManagementsSections = () => {
  const [open, setOpen] = useState(false);
  // Tabs
  const tabs = [
    {
      label: "Order status",
      content: <Table column={columns} tableData={userTableData} />,
      btnText: "Add Sub Status",
      onClick: () => {
        setOpen(!open);
      },
    },
    {
      label: "Import Shipment Status",
      content: <Table column={columns} tableData={userTableData} />,
      btnText: "Add New Status",
      onClick: () => {
        setOpen(!open);
      },
    },
  ];

  const status = ["Confirm", "Pending", "Reject"];

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md">
        <Tabs tabs={tabs} btnClass="outline" />
      </div>
      <Modal open={open} setOpen={setOpen} modalClass="!bg-white p-6 h-auto">
        <h3 className="text-xl font-semibold mb-4">Status</h3>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="border rounded-md p-4">
            <SelectedField
              identifier="status"
              label="Main status"
              labelClass="!font-semibold"
              options={status}
              placeholder="Select The Main State"
            />
          </div>
          <div className="border rounded-md p-4">
            <TextField
              identifier="subStatus"
              label="Sub Status"
              labelClass="!font-semibold"
              onChangeCb={() => {}}
              placeholder="Add New Sub Status"
            />
            <div className="mt-4 bg-ash-200 rounded-md p-2 border space-y-2">
              <button className="bg-white p-2 flex items-center gap-2 rounded-md w-full">
                <input type="checkbox" name="preOrder" id="preOrder" />
                <label htmlFor="preOrder">Pre Order</label>
              </button>
              <button className="bg-white p-2 flex items-center gap-2 rounded-md w-full">
                <input type="checkbox" name="preOrder" id="preOrder2" />
                <label htmlFor="preOrder2">Pre Order</label>
              </button>
              <button className="bg-white p-2 flex items-center gap-2 rounded-md w-full">
                <input type="checkbox" name="preOrder" id="preOrder3" />
                <label htmlFor="preOrder3">Pre Order</label>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="text-blue-500 btn font-semibold"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </button>
            <button className="text-blue-500 btn font-semibold">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default StatusManagementsSections;
