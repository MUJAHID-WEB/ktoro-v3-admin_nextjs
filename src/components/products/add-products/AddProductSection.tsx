import React from "react";
import ArrowBack from "../../svg/ArrowBack";
import TextField from "../../base/TextField";
import Button from "../../base/Button";
import Plus from "../../svg/Plus";
import Trash from "../../svg/Trash";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { addProductContent } from "@/static/contents/addProduct";

const AddProductSection = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", addProductContent);
    return (
        <section className="mt-8">
            <>
                <button className="font-semibold flex items-center gap-2">
                    <ArrowBack /> {content.addProductText}
                </button>
            </>
            <div className="mt-8 flex gap-4">
                <div className="space-y-8 flex-[3]">
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <div>
                            <TextField
                                label={content.apTitleLabel}
                                required
                                labelClass="!font-semibold"
                                inputType="text"
                                identifier="title"
                                onChangeCb={(e) => console.log(e)}
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">
                                {content.apDescriptionLabel}
                            </h4>
                            <textarea
                                name="description"
                                id="description"
                                cols={15}
                                rows={15}
                                className="border border-[#AEB4B9] w-full resize-none rounded-md p-4"
                            />
                        </div>
                    </div>
                    {/* Media */}
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <div className="h-80">
                            <h5 className="text-md font-semibold">
                                {content.apMediaLabel}*
                            </h5>
                            <div className="mt-4 h-full">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    <Image
                                        src="/images/product.png"
                                        width={200}
                                        height={200}
                                        alt="product-image"
                                    />
                                    <label
                                        htmlFor="media"
                                        className="cursor-pointer border border-[#AEB4B9] border-dashed p-4 flex flex-col justify-center items-center gap-2 w-[160px] h-[160px] rounded-md text-gray-300"
                                    >
                                        <p className="p-2 bg-gray-[#FAFBFB]">
                                            Add files
                                        </p>
                                        <p>Add from URL</p>
                                        <input
                                            type="file"
                                            name="media"
                                            id="media"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Section */}
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <h3 className="text-lg font-semibold">
                            {content.apPricingLabel}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <TextField
                                    label={content.apPriceLabel}
                                    required
                                    labelClass="text-md font-semibold mb-2"
                                    inputType="text"
                                    identifier="price"
                                    placeholder="$0"
                                    onChangeCb={(e) => console.log(e)}
                                />
                                <div>
                                    <span className="flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            name="tax"
                                            id="tax"
                                        />
                                        <label
                                            htmlFor="tax"
                                            className="text-sm"
                                        >
                                            {
                                                content.apChargeTaxOnThisProductText
                                            }
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <TextField
                                    label={content.apCompareatPriceLabel}
                                    labelClass="text-md font-semibold mb-2"
                                    inputType="number"
                                    identifier="compare-price"
                                    placeholder="$0"
                                    onChangeCb={(e) => console.log(e)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <TextField
                                label={content.apCostPerItemLabel}
                                labelClass="text-md font-semibold mb-2"
                                inputType="text"
                                identifier="price"
                                placeholder="$0"
                                onChangeCb={(e) => console.log(e)}
                            />

                            <TextField
                                label={content.apProfitLabel}
                                labelClass="text-md font-semibold mb-2"
                                inputType="number"
                                identifier="profit"
                                placeholder="$0"
                                onChangeCb={(e) => console.log(e)}
                            />

                            <TextField
                                label={content.apMarginLabel}
                                labelClass="text-md font-semibold mb-2"
                                inputType="number"
                                identifier="margin"
                                placeholder="$0"
                                onChangeCb={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    {/* Inventory */}
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <h3 className="text-lg font-semibold">
                            {content.apInventoryLabel}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <TextField
                                    label={content.apQuantityLabel}
                                    labelClass="text-md font-semibold mb-2"
                                    inputType="text"
                                    identifier="quantity"
                                    placeholder="0"
                                    onChangeCb={(e) => console.log(e)}
                                />
                                <div>
                                    <span className="flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            name="stock"
                                            id="stock"
                                        />
                                        <label
                                            htmlFor="stock"
                                            className="text-sm"
                                        >
                                            {
                                                content.apContinueSellingwhenOutofStockText
                                            }
                                        </label>
                                    </span>
                                    <span className="flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            name="quantity"
                                            id="quantity"
                                        />
                                        <label
                                            htmlFor="quantity"
                                            className="text-sm"
                                        >
                                            {content.apUnlimitedQuantityText}
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <TextField
                                    label={content.apWeightLabel}
                                    labelClass="text-md font-semibold mb-2"
                                    inputType="number"
                                    identifier="weight"
                                    placeholder="0.0 Kg"
                                    onChangeCb={(e) => console.log(e)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 !mt-8">
                            <TextField
                                label={content.apStockKeepingUnitText}
                                labelClass="text-md font-semibold mb-2"
                                inputType="text"
                                identifier="sku"
                                placeholder="0"
                                onChangeCb={(e) => console.log(e)}
                            />

                            <TextField
                                label="Barcode (ISBN, UPC, GTIN, etc.)"
                                labelClass="text-md font-semibold mb-2"
                                inputType="number"
                                identifier="barcode"
                                placeholder="0"
                                onChangeCb={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    {/* Variant */}
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <h3 className="text-lg font-semibold">
                            {content.apVariantsLabel}
                        </h3>
                        <form className="space-y-4">
                            <div className="relative">
                                <TextField
                                    label="Option name"
                                    labelClass="text-md font-semibold mb-2"
                                    identifier="option-name"
                                    inputType="text"
                                    onChangeCb={(e) => console.log(e)}
                                    groupClass="!w-[95%]"
                                />
                                <button className="absolute right-2 bottom-0 p-2">
                                    <Trash width="25" height="25" />
                                </button>
                            </div>
                            <div className="relative">
                                <TextField
                                    label="Option value"
                                    labelClass="text-md font-semibold mb-2"
                                    identifier="option-value"
                                    inputType="text"
                                    onChangeCb={(e) => console.log(e)}
                                    groupClass="!w-[95%]"
                                />
                                <button className="absolute right-2 bottom-0 p-2">
                                    <Trash width="25" height="25" />
                                </button>
                            </div>
                            <Button variant="outline" type="submit">
                                Done
                            </Button>
                        </form>
                        <hr />
                        <div>
                            <button className="flex items-center gap-2 text-blue-500">
                                <Plus fill="#12A8E0" width="16" />{" "}
                                {content.apAddVariantsBtn}
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-md space-y-4">
                        <div className="flex justify-between items-center gap-4">
                            <h3 className="text-2xl text-black-700 font-semibold">
                                Search engine listing
                            </h3>
                            <button className="text-blue-500 flex items-center gap-2">
                                <Plus fill="#12A8E0" width="16" /> Add
                            </button>
                        </div>
                        <p>
                            Add a title and description to see how this product
                            might appear in a search engine listing
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <div className="flex justify-between items-center gap-4">
                            <h3 className="text-2xl text-black-700 font-semibold">
                                Free Gifts
                            </h3>
                            <button className="text-blue-500 flex items-center gap-2">
                                <Plus fill="#12A8E0" width="16" /> Add
                            </button>
                        </div>
                        <p>
                            Add a title and description to see how this product
                            might appear in a search engine listing
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md space-y-4 flex flex-row justify-end content-center gap-4">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="secondary" className="!mt-0">
                            Save
                        </Button>
                    </div>
                </div>
                <div className="flex-1 space-y-8">
                    <div className="bg-white p-6 rounded-md space-y-4">
                        <TextField
                            label={content.apProductCodeLabel}
                            required
                            labelClass="text-lg font-semibold mb-4"
                            identifier="product-code"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                        <TextField
                            label="SKU"
                            required
                            labelClass="text-lg font-semibold mb-4"
                            identifier="sku"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-md space-y-4">
                        <TextField
                            label={content.apStatusLabel}
                            required
                            labelClass="text-lg font-semibold mb-4"
                            identifier="product-code"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                        <TextField
                            label={content.apSellStatusLabel}
                            required
                            labelClass="text-lg font-semibold mb-4"
                            identifier="sku"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                        <TextField
                            label={content.apStatusOfWarehouseLabel}
                            labelClass="text-lg font-semibold mb-4"
                            identifier="sku"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-md space-y-4">
                        <h3 className="text-lg font-semibold">
                            {content.apProductOrganizationText}
                        </h3>
                        <TextField
                            label={content.apQuantityLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="quantity"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Search"
                        />
                        <TextField
                            label={content.apAvailabilityInWarehouseLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="availability-in-warehouse"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="0"
                        />
                        <TextField
                            label={content.apLocationInWarehouseLabe}
                            labelClass="text-md font-semibold mb-2"
                            identifier="location-in-warehouse"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder=""
                        />
                        <TextField
                            label={content.apProductCategoryLabel}
                            required
                            labelClass="text-md font-semibold mb-2"
                            identifier="product-category"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Search"
                        />
                        <TextField
                            label={content.apProductTypeLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="product-type"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Type"
                        />
                        <TextField
                            label={content.apBrandLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="brand"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Brand"
                        />
                        <TextField
                            label={content.apCollectionsLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="collections"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Select"
                        />
                        <TextField
                            label={content.apSupportingTagsLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="supporting-tags"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Select"
                        />
                        <TextField
                            label={content.apDealerLabel}
                            labelClass="text-md font-semibold mb-2"
                            identifier="dealer"
                            onChangeCb={(e) => console.log(e)}
                            inputType="text"
                            placeholder="Select"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-md space-y-4">
                        <div className="flex justify-between items-center gap-4 mb-8">
                            <span className="flex flex-col">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <p className="text-md font-semibold">
                                    {content.apPreOrderLabel}
                                </p>
                            </span>
                            <span className="flex flex-col">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <p className="text-md font-semibold">
                                    {content.apGiftLabel}
                                </p>
                            </span>
                        </div>
                        <div className="space-y-4">
                            <TextField
                                label={content.apReleaseDateLabel}
                                labelClass="text-md font-semibold mb-2"
                                identifier="release-date"
                                onChangeCb={(e) => console.log(e)}
                                inputType="date"
                            />

                            <TextField
                                label={content.apDeadlineLabel}
                                labelClass="text-md font-semibold mb-2"
                                identifier="deadline"
                                onChangeCb={(e) => console.log(e)}
                                inputType="date"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProductSection;
