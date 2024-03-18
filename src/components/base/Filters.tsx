import React from "react";
import TextField from "./TextField";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { spFilterContent } from "@/static/contents/searchPanel";

const Filters = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", spFilterContent);
    return (
        <div className="flex gap-4 absolute top-[60px] w-full right-0 bg-white p-4 border rounded-md z-50">
            <div className="flex-1 space-y-8">
                <div className="space-y-3">
                    <h4 className="mb-4 font-semibold">
                        {content.spFiSubtotalLabel}
                    </h4>
                    <TextField
                        identifier="subtotal"
                        label={content.spFiFormText}
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                    <TextField
                        identifier="subtotal"
                        label={content.spFiToText}
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="customer-email"
                        onChangeCb={(e) => {}}
                        label={content.spFiCustomerEmailLabel}
                        labelClass="font-semibold"
                        inputType="email"
                    />
                </div>
                <div>
                    <TextField
                        identifier="sku"
                        onChangeCb={(e) => {}}
                        label={content.spFiSKULabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="phone"
                        onChangeCb={(e) => {}}
                        label={content.spFiPhoneLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="pre-order"
                        onChangeCb={(e) => {}}
                        label={content.spFiPreOrderLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
            </div>

            <div className="flex-1 space-y-8">
                <div className="space-y-3">
                    <h4 className="mb-4 font-semibold">
                        {content.spFiPurchaseDateLabel}
                    </h4>
                    <TextField
                        identifier="subtotal"
                        label={content.spFiFormText}
                        onChangeCb={(e) => {}}
                        inputType="date"
                    />
                    <TextField
                        identifier="subtotal"
                        label={content.spFiToText}
                        onChangeCb={(e) => {}}
                        inputType="date"
                    />
                </div>
                <div>
                    <TextField
                        identifier="customer-name"
                        onChangeCb={(e) => {}}
                        label={content.spFiCustomerNameLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="categories"
                        onChangeCb={(e) => {}}
                        label={content.spFiCategoriesLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="city"
                        onChangeCb={(e) => {}}
                        label={content.spFiCityLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="otp"
                        onChangeCb={(e) => {}}
                        label={content.spFiIsOTPVerifiedLabel}
                        labelClass="font-semibold"
                        inputType="text"
                    />
                </div>
            </div>

            <div className="flex-1 space-y-8">
                <div>
                    <h4 className="mb-4 font-semibold">ID</h4>
                    <TextField
                        identifier="subtotal"
                        label="Customer Id"
                        labelClass="font-semibold"
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="payment-method"
                        label={content.spFiPaymentMethodLabel}
                        labelClass="font-semibold"
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="country-from"
                        label={content.spFiCountryLabel}
                        labelClass="font-semibold"
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                </div>
                <div>
                    <TextField
                        identifier="status"
                        label={content.spFiStatusLabel}
                        labelClass="font-semibold"
                        onChangeCb={(e) => {}}
                        inputType="text"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
