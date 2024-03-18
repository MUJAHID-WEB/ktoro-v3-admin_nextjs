import React from "react";
import Card from "../base/Card";
import StatusCard from "./StatusCard";
import product_img from "../../../public/images/dashboard/product.png";

const ProductsSection = () => {
    return (
        <Card title="Products" cardClass="!p-5">
            <div className="grid grid-cols-12 items-center">
                <StatusCard
                    text="Today's products"
                    count={3}
                    image={product_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Yesterday's products"
                    count={3}
                    image={product_img}
                    border
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="October"
                    count={3}
                    image={product_img}
                    border
                    dropDown
                    statusCardClass="!h-fit col-span-3"
                />
                <StatusCard
                    text="Total products"
                    count={3}
                    image={product_img}
                    statusCardClass="!h-fit col-span-3"
                />
            </div>
        </Card>
    );
};

export default ProductsSection;
