import React from "react";
import Wedget from "./Wedget";
import StatusCard from "./StatusCard";

import online_status_image from "../../../public/images/dashboard/online_status_image.png";

const OnlineSection = () => {
    return (
        <section className="grid grid-cols-12 gap-4">
            <Wedget widgetClass="group">
                <StatusCard
                    text="Online now"
                    count={32}
                    image={online_status_image}
                    statusCardClass="p-5"
                />
            </Wedget>
            <Wedget widgetClass="group">
                <StatusCard
                    text="online Yesterday's"
                    count={432}
                    image={online_status_image}
                    statusCardClass="p-5"
                />
            </Wedget>
            <Wedget
                dropDown
                dropDownText="Octobor"
                dropDownColor="#787878"
                dropDownClass="!text-[#787878]"
                widgetClass="group"
            >
                <StatusCard
                    text="October"
                    count={"3.4 k"}
                    image={online_status_image}
                    statusCardClass="p-5"
                />
            </Wedget>
        </section>
    );
};

export default OnlineSection;
