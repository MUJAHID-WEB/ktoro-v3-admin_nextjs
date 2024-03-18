import React from "react";
import SearchPanel from "../base/SearchPanel";
import OrdersTable from "../orders/OrdersTable";

const DamageListSection = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Damage</h2>
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md divide-y divide-solid h-screen">
        <SearchPanel linkPath="/damage-list" linkText="Damage" />
        <div className="py-3">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default DamageListSection;
