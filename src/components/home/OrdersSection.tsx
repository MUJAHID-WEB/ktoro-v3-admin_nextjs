import React from "react";
import Card from "../base/Card";
import StatusCard from "./StatusCard";

import pending_img from "../../../public/images/dashboard/pending.png";
import processing_img from "../../../public/images/dashboard/processing.png";
import shipped_out_img from "../../../public/images/dashboard/shipped_out.png";
import delivered_img from "../../../public/images/dashboard/delivered.png";
import return_img from "../../../public/images/dashboard/return.png";
import lost_img from "../../../public/images/dashboard/lost.png";
import cancle_img from "../../../public/images/dashboard/cancle.png";
import fail_order_img from "../../../public/images/dashboard/fail_order.png";
import refund_img from "../../../public/images/dashboard/refund.png";

const OrdersSection = () => {
    return (
        <Card title="Orders" cardClass="!px-5 !py-5">
            <div className="grid grid-cols-12 items-center gap-8">
                <StatusCard
                    text="Pending"
                    count={32}
                    image={pending_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Processing"
                    count="100"
                    image={processing_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="shipped out"
                    count={32}
                    image={shipped_out_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="delivered"
                    count={3}
                    image={delivered_img}
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="return"
                    count={13}
                    image={return_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Lost"
                    count={3}
                    image={lost_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Cancel"
                    count={34}
                    image={cancle_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Fail order"
                    count={4}
                    image={fail_order_img}
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Refend on way"
                    count={9}
                    image={refund_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Refend delivered"
                    count={9}
                    image={refund_img}
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
        </Card>
    );
};

export default OrdersSection;
