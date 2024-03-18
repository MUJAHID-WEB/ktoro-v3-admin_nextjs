import React from "react";
import Card from "../base/Card";
import StatusCard from "./StatusCard";
import tkts_img from "../../../public/images/dashboard/tkts.png";

const TktsSection = () => {
    return (
        <Card title="tkt's" cardClass="!p-5">
            <h3 className="capitalize text-xl font-medium text-black-500">
                employees
            </h3>
            <div className="grid grid-cols-12 items-center mt-2">
                <StatusCard
                    text="Pending Tkt's"
                    count={32}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="processing tkt's"
                    count={3}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="close tkt's"
                    count={3}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="October"
                    count={3}
                    image={tkts_img}
                    dropDown
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
            <h3 className="capitalize text-xl font-medium text-black-500 mt-4">
                Customer
            </h3>
            <div className="grid grid-cols-12 items-center mt-2">
                <StatusCard
                    text="Pending Tkt's"
                    count={3}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="processing tkt's"
                    count={3}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="close tkt's"
                    count={3}
                    image={tkts_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="October"
                    count={3}
                    image={tkts_img}
                    dropDown
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
        </Card>
    );
};

export default TktsSection;
