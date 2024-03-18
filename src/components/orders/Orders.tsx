import React, { useState } from "react";
import Card from "../base/Card";
import SearchPanel from "../base/SearchPanel";
import Badge from "../base/Badge";
import OrderTable from "./table/OrderTable";
import ReturnIcon from "../svg/ReturnIcon";
import PendingIcon from "../svg/PendingIcon";
import LostIcon from "../svg/LostIcon";
import CancleIcon from "../svg/CancleIcon";
import ShipmentIcon from "../svg/ShipmentIcon";
import ProcessingIcon from "../svg/ProcessingIcon";

const Orders = () => {
    const [selected, setSelected] = useState<string>("");
    return (
        <div className="mt-16">
            <h1 className="text-xl font-medium text-black-500">Orders</h1>
            <hr className="mt-4" />
            <Card cardClass="!px-4 !py-9">
                <div className="w-[calc(100vw-400px)] overflow-x-scroll overflow-y-hidden hide-scroll-bar">
                    <div className="w-screen flex items-center gap-3">
                        {[
                            {
                                id: 1,
                                img:
                                    selected === "Return" ? (
                                        <ReturnIcon fill="#47A6DC" />
                                    ) : (
                                        <ReturnIcon />
                                    ),
                                name: "Return",
                                color: "",
                                count: 77,
                            },
                            {
                                id: 2,
                                img:
                                    selected === "Pending" ? (
                                        <PendingIcon fill="#47A6DC" />
                                    ) : (
                                        <PendingIcon />
                                    ),
                                name: "Pending",
                                color: "!bg-[#5B93FF]",
                                count: 3,
                            },
                            {
                                id: 3,
                                img:
                                    selected === "Lost" ? (
                                        <LostIcon fill="#47A6DC" />
                                    ) : (
                                        <LostIcon />
                                    ),
                                name: "Lost",
                                color: "!bg-[#F44336]",
                                count: 8,
                            },
                            {
                                id: 4,
                                img:
                                    selected === "Processing" ? (
                                        <ProcessingIcon fill="#47A6DC" />
                                    ) : (
                                        <ProcessingIcon />
                                    ),
                                name: "Processing",
                                color: "!bg-[#FF8C22]",
                                count: 10,
                            },
                            {
                                id: 5,
                                img:
                                    selected === "Cancle" ? (
                                        <CancleIcon fill="#47A6DC" />
                                    ) : (
                                        <CancleIcon />
                                    ),
                                name: "Cancle",
                                color: "!bg-[#F44336]",
                                count: 10,
                            },
                            {
                                id: 6,
                                img:
                                    selected === "Shipment" ? (
                                        <ShipmentIcon fill="#47A6DC" />
                                    ) : (
                                        <ShipmentIcon />
                                    ),
                                name: "Shipment",
                                color: "!bg-[#F96363]",
                                count: 10,
                            },
                        ].map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelected(item.name)}
                                className={`w-[190px] h-[103px] rounded-lg ${
                                    selected === item.name
                                        ? "bg-[#DBEFFB]"
                                        : "bg-ash-100"
                                }  flex flex-col justify-between px-4 py-3 cursor-pointer`}
                            >
                                <div>{item.img}</div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <Badge
                                            text={item.name}
                                            status
                                            statusClass={item.color}
                                            badgeClass="!bg-transparent !px-0"
                                        />
                                        <h5 className="text-2xl font-bold text-black-500">
                                            {item.count}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-ash-100 w-full h-[42px] mt-6 mb-10 rounded-lg flex flex-row gap-4 items-center px-4">
                    {["Test 1", "Test 2", "Test 3", "Test 4"].map((test) => (
                        <Badge
                            key={test}
                            text={test}
                            badgeClass="!bg-[#AEE9D1] !h-[24px] !px-4 !flex !items-center !justify-center !py-0"
                        />
                    ))}
                </div>
                {/* orders table filter  */}
                <SearchPanel
                    linkPath="/orders"
                    linkText="Scan System"
                    linkPathSecondary="/orders"
                    linkTextSecondary="Create New Order"
                />
                {/* table  */}
                <OrderTable />
            </Card>
        </div>
    );
};

export default Orders;
