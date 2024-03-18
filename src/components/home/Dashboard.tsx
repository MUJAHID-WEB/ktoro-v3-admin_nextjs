import React from "react";
import OnlineSection from "./OnlineSection";
import RevenueSection from "./RevenueSection";
import ProcessSection from "./ProcessSection";
import OrdersSection from "./OrdersSection";
import BestSellingSection from "./BestSellingSection";
import ClientsSection from "./ClientsSection";
import SubscribeSection from "./SubscribeSection";
import ProductsSection from "./ProductsSection";
import TktsSection from "./TktsSection";

const Dashboard = () => {
    return (
        <div className="py-[58px]">
            {/* online section  */}
            <OnlineSection />
            {/* Revenue section  */}
            <RevenueSection />
            {/* process section  */}
            <ProcessSection />
            <div className="mt-8 flex flex-col gap-5">
                {/* order section  */}
                <OrdersSection />
                <ClientsSection />
                <SubscribeSection />
                <ProductsSection />
                <TktsSection />
                <BestSellingSection />
            </div>
        </div>
    );
};

export default Dashboard;
