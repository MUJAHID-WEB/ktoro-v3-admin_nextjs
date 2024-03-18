import React from "react";
import StatusCard from "./StatusCard";
import Card from "../base/Card";
import subscribe_img from "../../../public/images/dashboard/subscribe.png";

const SubscribeSection = () => {
    return (
        <Card title="Subscribe" cardClass="!px-5 !py-3">
            <div className="grid grid-cols-12 items-center">
                <StatusCard
                    text="subscribers today"
                    count={32}
                    image={subscribe_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="subscribers "
                    count={13}
                    image={subscribe_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="October"
                    count={18}
                    image={subscribe_img}
                    border
                    dropDown
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Total subscribers"
                    count={3}
                    image={subscribe_img}
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
        </Card>
    );
};

export default SubscribeSection;
