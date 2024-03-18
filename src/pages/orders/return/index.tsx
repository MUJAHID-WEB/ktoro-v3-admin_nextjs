import Card from "@/components/base/Card";
import SearchPanel from "@/components/base/SearchPanel";
import Layout from "@/components/layout/Layout";
import ReturnTable from "@/components/orders/table/ReturnTable";
import React from "react";
import money_img from "../../../../public/images/orders/money1.png";
import money_img_lo from "../../../../public/images/orders/money2.png";
import OrderCard from "@/components/orders/OrderCard";

const ReturnPage = () => {
    return (
        <Layout>
            <div className="mt-16">
                <h1 className="text-xl font-medium text-black-500">Return</h1>
                <hr className="mt-4" />
                <Card cardClass="!px-4 !py-5 mt-6">
                    {/* orders table filter  */}
                    <SearchPanel />
                    <div className="mb-12 flex gap-[22px]">
                        <OrderCard
                            img={money_img}
                            totalOrders={34}
                            status="receive"
                            totalPrice={56}
                        />
                        <OrderCard
                            img={money_img_lo}
                            totalOrders={34}
                            status="receive"
                            totalPrice={56}
                        />
                    </div>
                    {/* table  */}
                    <ReturnTable />
                </Card>
            </div>
        </Layout>
    );
};

export default ReturnPage;
