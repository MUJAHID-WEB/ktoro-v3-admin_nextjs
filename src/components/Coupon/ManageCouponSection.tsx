import React, { useState } from "react";
import BreadCrumb from "../base/BreadCrumb";
import Button from "../base/Button";
import Table from "../Table/Table";
import EditCoupon from "./EditCoupon";
import AddCoupon from "./AddCoupon";

const paths = [
  {
    title: "Settings",
    url: "/settings",
  },
  {
    title: "Coupon",
    url: "/settings/coupon",
  },
];

const column: any = [
  {
    heading: "Manage Coupon",
    value: "name",
    softable: true,
  },
  {
    heading: "Coupon Type",
    value: "type",
  },
  {
    heading: "Discount Value",
    value: "discount",
  },
  {
    heading: "Limited / Unlimited",
    value: "duration",
  },
  {
    heading: "How Many Times Coupon Used?",
    value: "times",
  },
  {
    heading: "Actions",
    value: "action",
    CustomComponent: EditCoupon,
  },
];

const tableData: any = [
  {
    name: "Ktoro56",
    type: "Number",
    discount: "$27",
    duration: "Limited",
    times: "1450",
  },
  {
    name: "Ktoro33",
    type: "Radio",
    discount: "10%",
    duration: "Unlimited",
    times: "504",
  },
  {
    name: "Ktoro42",
    type: "Radio",
    discount: "25%",
    duration: "Limited",
    times: "747",
  },
];

const ManageCouponSection = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-6 rounded-md">
        <div className="text-right mb-6">
          <Button className="outline" onClick={() => setModalOpen(true)}>
            Add A Cupon
          </Button>
        </div>
        <Table column={column} tableData={tableData} />
      </div>
      <AddCoupon modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default ManageCouponSection;
