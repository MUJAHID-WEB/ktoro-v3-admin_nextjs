import Layout from "@/components/layout/Layout";
import React from "react";
import Image from "next/image";

import invoice_download_icon from "../../../../public/images/orders/invoice_download_icon.png";
import kotro_logo from "../../../../public/images/orders/ktoro_logo.png";
import bar_code from "../../../../public/images/orders/bar_code.png";
import Card from "@/components/base/Card";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { commonContent } from "@/static/contents/common";
import InvoiceTable from "@/components/orders/table/InvoiceTable";

const InvoicePage = () => {
    const router = useRouter();
    let { locale } = router;
    const common: any = useTranslator(locale || "en", commonContent);
    return (
        <Layout>
            <div className="flex justify-between items-center py-10">
                <h5 className="font-bold text-xl text-black-500">
                    {common.invoiceText}
                </h5>
                <Image src={invoice_download_icon} alt="Icon" />
            </div>

            <Card cardClass="!p-0">
                <div className="flex justify-between items-end px-10 pt-14">
                    <div>
                        <h5 className="text-2xl leading-[35px] font-bold text-black-500 capitalize">
                            Kotro
                        </h5>
                        <h5 className="text-xl leading-[30px] font-bold text-black-500 capitalize mt-4">
                            {common.saudiArabiaText}
                        </h5>
                        <h5 className="text-xl leading-[30px] font-bold text-black-500 capitalize mt-3">
                            {common.phoneNumberText}: +966 666 666 6666
                        </h5>
                        <h5 className="text-xl leading-[30px] font-bold text-black-500 capitalize mt-3">
                            KTORO@support.com
                        </h5>
                        <h5 className="text-xl leading-[30px] font-bold text-black-500 capitalize mt-3">
                            KTORO.com
                        </h5>
                    </div>
                    <Image src={kotro_logo} alt="Kotro logo" />
                </div>
                <hr className="my-10" />
                <div className="px-10 flex flex-col gap-3">
                    <div className="w-full flex items-center gap-12">
                        <h5 className="text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.invoiceToText} :
                        </h5>
                        {/* <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            mohammed abdullah
                        </p> */}
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.nameText} :
                        </h5>
                        <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            mohammed abdullah
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.addressText} :
                        </h5>
                        <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            252, Abhinandan Nagar Rd, DDU Nagar, Sukhlia,
                            Indore, Madhya Pradesh 452001, India
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.cityText} :
                        </h5>
                        <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            jeddah
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.countryText} :
                        </h5>
                        <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            saudi arabia
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.postalText} :
                        </h5>
                        <p className="text-xl leading-[30px] font-normal text-black-500 capitalize">
                            4557999
                        </p>
                    </div>
                    <div className="w-full flex items-center gap-12">
                        <h5 className="w-[90px] text-xl leading-[30px] font-bold text-black-500 capitalize">
                            {common.barcodeText} :
                        </h5>
                        <Image src={bar_code} alt="Kotro logo" />
                    </div>
                </div>
                <div className="pt-[70px] px-6">
                    {/* table header */}
                    <InvoiceTable />
                    <hr className="mt-[72px] pb-10 " />
                </div>

                <div className="pb-[120px] px-10">
                    <div className="w-[252px] flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-xl text-black-500 capitalize">
                                {common.subtotalText} :
                            </h5>
                            <h5 className="font-medium text-xl text-black-500 capitalize">
                                1 SAR
                            </h5>
                        </div>
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-xl text-black-500 capitalize">
                                {common.cashOnDeliveryText} :
                            </h5>
                            <h5 className="font-medium text-xl text-black-500 capitalize">
                                1 SAR
                            </h5>
                        </div>
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-xl text-black-500 capitalize">
                                {common.taxText} :
                            </h5>
                            <h5 className="font-medium text-xl text-black-500 capitalize">
                                1 SAR
                            </h5>
                        </div>
                        <div className="h-[2px] w-full bg-[#B3B3B3] mt-4"></div>
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-xl text-blue-700 capitalize">
                                {common.totalText} :
                            </h5>
                            <h5 className="font-medium text-xl text-blue-700 capitalize">
                                1 SAR
                            </h5>
                        </div>
                    </div>
                </div>
            </Card>
        </Layout>
    );
};

export default InvoicePage;
