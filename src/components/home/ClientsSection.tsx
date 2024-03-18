import React from "react";
import StatusCard from "./StatusCard";
import Card from "../base/Card";
import client_img from "../../../public/images/dashboard/client.png";

const ClientsSection = () => {
    return (
        <Card title="Clients" cardClass="!px-5 !py-3">
            <div className="grid grid-cols-12 items-center">
                <StatusCard
                    text="Clients today"
                    count={32}
                    image={client_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Clients Yesterday's"
                    count={13}
                    image={client_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="October"
                    count={3}
                    image={client_img}
                    dropDown
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Clients"
                    count={563}
                    image={client_img}
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
        </Card>
    );
};

export default ClientsSection;
