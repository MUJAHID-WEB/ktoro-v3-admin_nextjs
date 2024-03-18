import React, { useState } from "react";
import Card from "../base/Card";
import Date from "../svg/Date";
import CategoryTable from "./CategoryTable";
import ProductTable from "./ProductTable";

enum Type {
    CATEGORY = "category",
    PRODUCT = "product",
}

const BestSellingSection = () => {
    const [type, setType] = useState<string>(Type.CATEGORY);
    return (
        <Card cardClass="!px-5 !pt-5 !pb-8">
            {/* header  */}
            <div className="flex justify-between items-center">
                {/* left section  */}
                <h3 className="font-normal text-2xl text-black-500">
                    Best Selling
                </h3>

                {/* right section  */}
                <div className="flex items-center gap-3">
                    <Date />
                    <div className="border-2 rounded-md p-1 flex items-center gap-1">
                        <div
                            onClick={() => setType(Type.PRODUCT)}
                            className={`px-4 py-1 rounded-md  text-lg font-normal cursor-pointer ${
                                type === Type.PRODUCT
                                    ? "bg-blue-700 text-white"
                                    : "text-black-500"
                            }`}
                        >
                            Product
                        </div>
                        <div
                            onClick={() => setType(Type.CATEGORY)}
                            className={`px-4 py-1 rounded-md  text-lg font-normal cursor-pointer ${
                                type === Type.CATEGORY
                                    ? "bg-blue-700 text-white"
                                    : "text-black-500"
                            }`}
                        >
                            Category
                        </div>
                    </div>
                </div>
            </div>

            {/* table  */}
            <div className="mt-6">
                {type === Type.CATEGORY ? <CategoryTable /> : <ProductTable />}
            </div>
        </Card>
    );
};

export default BestSellingSection;
