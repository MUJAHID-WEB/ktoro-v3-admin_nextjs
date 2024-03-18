import React from "react";
import SearchPanel from "../base/SearchPanel";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { searchPanelContent } from "@/static/contents/searchPanel";
import ProductTable from "./table/ProductTable";

const ProductsSection = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", searchPanelContent);
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold">{content.spProductText}</h2>
            <hr className="my-4" />
            <div className="bg-white p-4 rounded-md h-screen">
                <SearchPanel
                    linkPath="/products/add"
                    linkText={content.spCreateAddProductBtnText}
                />
                <div className="py-3 w-full">
                    <ProductTable />
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
