import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import OrderDetailsButton from "@/components/orders/orderDetails/OrderDetailsButton";
import HorizontalLine from "@/components/base/HorizontalLine";
import OrderDetailsInfo from "@/components/orders/orderDetails/OrderDetailsInfo";
import TextField from "@/components/base/TextField";
import OrderStatusCard from "@/components/orders/orderDetails/OrderStatusCard";
import OrdersModal from "@/components/modals/orders/OrdersModal";
import EditShippingAddress from "@/components/modals/orders/EditShippingAddress";
import AddNewTicketModal from "@/components/modals/orders/AddNewTicketModal";
import SelectedField from "@/components/base/SelectedField";
import NoteOrderHistory from "@/components/orders/orderDetails/NoteOrderHistory";
import Image from "next/image";

import customer_account from "/public/images/orders/create_account.png";
import tkts from "/public/images/orders/tkts.png";
import invoice from "/public/images/orders/invoice.png";
import processing from "/public/images/orders/processing.png";
import cancle from "/public/images/orders/cancle.png";
import attach_icon from "/public/images/orders/attach-icon.png";
import charm_cross from "/public/images/orders/charm_cross.png";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import {
    orderDetailsContent,
    orderModalsContent,
} from "@/static/contents/orders";
import { commonContent } from "@/static/contents/common";
import OrderDetailsTable from "@/components/orders/orderDetails/OrderDetailsTable";

const OrderDetails = () => {
    // state
    const [openProcessing, setOpenProcessing] = useState<boolean>(false);
    const [openCancle, setOpenCancle] = useState<boolean>(false);
    const [openEditShipping, setOpenEditShipping] = useState<boolean>(false);
    const [openNewTicket, setOpenNewTicket] = useState<boolean>(false);

    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", orderDetailsContent);
    const common: any = useTranslator(locale || "en", commonContent);
    const modal: any = useTranslator(locale || "en", orderModalsContent);

    return (
        <Layout>
            <div className="mt-12 pb-36">
                {/* heading  */}
                <h3 className="font-medium text-xl text-black-500">
                    Order Details
                </h3>
                <hr className="mt-4 mb-6" />

                {/* order details buttons  */}
                <section className="flex flex-row flex-wrap items-center justify-between gap-6 w-full">
                    <div className="bg-white p-6 rounded-md min-h-[98px] flex flex-row flex-wrap items-center gap-4 xl:w-[48%] lg:w-[48%] md:w-[48%] w-[100%]">
                        <OrderDetailsButton
                            image={customer_account}
                            text={content.orderDetailsCustomerAccountBtnText}
                        />
                        <HorizontalLine />
                        <div onClick={() => setOpenNewTicket(!openNewTicket)}>
                            <OrderDetailsButton
                                image={tkts}
                                text={content.orderDetailsTktsBtnText}
                            />
                        </div>
                        <HorizontalLine />

                        <Link href={"/orders/invoice"}>
                            <OrderDetailsButton
                                image={invoice}
                                text={content.orderDetailsInvoiceBtnText}
                            />
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-md min-h-[98px] flex flex-row flex-wrap items-center gap-4 xl:w-[48%] lg:w-[48%] md:w-[48%] w-[100%]">
                        <div onClick={() => setOpenProcessing(!openProcessing)}>
                            <OrderDetailsButton
                                image={processing}
                                text={content.orderDetailsProcessingBtnText}
                            />
                        </div>
                        <HorizontalLine />
                        <div onClick={() => setOpenCancle(!openCancle)}>
                            <OrderDetailsButton
                                image={cancle}
                                text={content.orderDetailsCancleBtnText}
                            />
                        </div>
                    </div>
                </section>

                {/* order details info  */}
                <section className="mt-6 w-full flex flex-row flex-wrap gap-[22px]">
                    {/* col 1  */}
                    <div className="bg-white p-6 rounded-md  xl:w-[32%] lg:w-[48%] md:w-[48%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-500 font-medium text-xl capitalize">
                            {content.odOrderInfoText}
                            <span className="text-blue-700 ps-1">
                                (# 14534)
                            </span>
                        </h5>

                        {/* info  */}
                        <div className="flex flex-col mt-6">
                            <OrderDetailsInfo
                                leftText={content.odOrderDataText}
                                rightText="at 9:29 AM 25/08/2023"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={content.odShippingFeeText}
                                rightText="28 riyal or free"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={content.odPaymentMethodText}
                                rightText="VISA 0 Riyal"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={content.odTotalInvoiceText}
                                rightText="300 Riyal"
                                rightTextClass="!text-green-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="TKT"
                                rightText=" #20078966"
                                rightTextClass="!text-red-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />

                            <OrderDetailsInfo
                                leftText={content.odPrintedText}
                                rightText="#20078966"
                                rightTextClass="!text-green-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="OTP verified"
                                rightText="NO"
                                rightTextClass="!text-red-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="warehouse statues 2"
                                rightText="available"
                                rightTextClass="!text-green-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="warehouse statues"
                                rightText="not available"
                                rightTextClass="!text-red-600 !font-medium !text-base"
                            />
                        </div>
                    </div>

                    {/* col 2  */}
                    <div className="bg-white p-6 rounded-md xl:w-[32%] lg:w-[48%] md:w-[48%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-500 font-medium text-xl capitalize">
                            {content.odCustomerDetailsText}
                        </h5>

                        {/* info  */}
                        <div className="flex flex-col mt-6">
                            <OrderDetailsInfo
                                leftText={common.nameText}
                                rightText="mohammed abdullah"
                                rightTextClass="!text-blue-700 !font-normal !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.emailText}
                                rightText="sgksgk@jsksf.comee"
                                rightTextClass="!text-blue-700 !font-normal !text-base !normal-case"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.mobileText}
                                rightText="(Whatsapp)+966543254677"
                                rightTextClass="!text-blue-700 !font-normal !text-base !normal-case"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.secondNumberText}
                                rightText="+966543254677"
                                rightTextClass="!text-red-600 !font-medium !text-base !normal-case"
                            />
                        </div>
                    </div>

                    {/* col 3 */}
                    <div className="bg-white p-6 rounded-md xl:w-[32%] lg:w-[48%] md:w-[48%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-500 font-medium text-xl capitalize">
                            {content.odOrderStatusText}
                        </h5>

                        {/* info  */}
                        <div className="flex flex-col mt-6">
                            <OrderDetailsInfo
                                leftText={content.odOrderStatusText}
                                rightText="Pending"
                                rightTextClass="!text-yellow-600 !font-normal !text-base !normal-case"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={content.odOrderSubStatusText}
                                rightText="customer should verified"
                            />
                        </div>
                    </div>
                </section>

                {/* billing & shipping address  */}
                <section className="mt-[30px] w-full flex flex-row flex-wrap justify-between">
                    {/* billing address  */}
                    <div className="bg-white p-6 rounded-md xl:w-[49%] lg:w-[49%] md:w-[49%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-500 font-medium text-xl capitalize">
                            {content.odBillingAddressText}
                        </h5>

                        {/* info  */}
                        <div className="flex flex-col mt-6">
                            <OrderDetailsInfo
                                leftText={common.nameText}
                                rightText="mohammed abdullah"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.countryText}
                                rightText="saudi arabi"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.cityText}
                                rightText="jeddah"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.mobileText}
                                rightText="+966543254677"
                                rightTextClass="!text-green-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.secondNumberText}
                                rightText="+966543254677"
                                rightTextClass="!text-red-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="Google map"
                                rightText="252, Abhinandan Nagar Rd, DDU Nagar, Sukhlia, Indore, Madhya Pradesh 452001, India"
                                rightTextClass="w-[347px] !text-sm"
                            />
                        </div>
                    </div>

                    {/* shipping address */}
                    <div className="bg-white p-6 rounded-md xl:w-[49%] lg:w-[49%] md:w-[49%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-500 font-medium text-xl capitalize">
                            {content.odShippingAddressText}
                            <span
                                onClick={() =>
                                    setOpenEditShipping(!openEditShipping)
                                }
                                className={`text-blue-700 font-normal ${
                                    locale === "ar" ? "pe-4" : "ps-[6px]"
                                } cursor-pointer`}
                            >
                                {common.editText}
                            </span>
                        </h5>
                        {/* info  */}
                        <div className="flex flex-col mt-6">
                            <OrderDetailsInfo
                                leftText={common.nameText}
                                rightText="mohammed abdullah"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.countryText}
                                rightText="saudi arabi"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.cityText}
                                rightText="jeddah"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.mobileText}
                                rightText="+966543254677"
                                rightTextClass="!text-green-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText={common.secondNumberText}
                                rightText="+966543254677"
                                rightTextClass="!text-red-600 !font-medium !text-base"
                            />
                            <hr className="my-3" />
                            <OrderDetailsInfo
                                leftText="Google map"
                                rightText="252, Abhinandan Nagar Rd, DDU Nagar, Sukhlia, Indore, Madhya Pradesh 452001, India"
                                rightTextClass="w-[347px] !text-sm"
                            />
                        </div>
                    </div>
                </section>

                {/* table section  */}
                <section className="mt-[30px] bg-white p-6 rounded-md">
                    {/* heading  */}
                    <h5 className="text-black-500 font-medium text-xl capitalize leading-[30px]">
                        {common.orderText} #14534
                    </h5>

                    {/* table  */}
                    <OrderDetailsTable />
                </section>

                <section className="mt-[30px] w-full flex flex-row flex-wrap justify-between">
                    {/* col 1 */}
                    <div className="bg-white p-6 rounded-md h-[1014px] xl:w-[49%] lg:w-[49%] md:w-[49%] w-full">
                        {/* heading  */}
                        <h5 className="text-black-700 font-normal text-xl capitalize">
                            {content.odNotesForThisOrderText}
                        </h5>
                        <div className="mt-6">
                            <SelectedField
                                identifier=""
                                options={[
                                    "With Courier 1",
                                    "With Courier 2",
                                    "With Courier 3",
                                ]}
                                label={content.odSubStatusText}
                                placeholder={content.odSubStatusPlaceholderText}
                                groupClass="!w-[354px]"
                                dropdownBtnClass="!right-[73px]"
                                rightIcon={
                                    <button className="absolute right-1 top-[8px] px-3 py-1 rounded-[3px] h-8 bg-[#F1F1F1] flex items-center justify-center">
                                        {common.applyText}
                                    </button>
                                }
                            />

                            {/* comment  */}
                            <p className="text-base font-normal text-black-700 mt-6">
                                {common.commentText}
                            </p>
                            <div className="border border-gray-200 rounded-md p-[10px] mt-3">
                                {/* text area  */}
                                <textarea
                                    name=""
                                    id=""
                                    placeholder={
                                        content.odNotesForThisOrderCommentPlaceholderText
                                    }
                                    className="h-[80px] w-full  p-4 placeholder:text-ash-500"
                                ></textarea>

                                {/* attach section  */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="px-3 py-2 border w-[286px] h-[37px] flex justify-between items-start">
                                        <div className="w-[230px] h-[37px] ">
                                            <div className="flex flex-row gap-2">
                                                {/* file  */}

                                                {[
                                                    "745 data .PDF",
                                                    "745 data .PDF",
                                                ].map((file, i) => (
                                                    <div
                                                        key={i}
                                                        className="bg-[#E3E3E3] px-2 py-[2px] rounded relative"
                                                    >
                                                        <p className="text-xs font-normal text-blue-700">
                                                            {file}
                                                        </p>
                                                        <Image
                                                            className="absolute -top-2 z-20 -right-2 h-4 w-4"
                                                            src={charm_cross}
                                                            alt=""
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Image src={attach_icon} alt="" />
                                    </div>
                                    <button className="bg-[#F1F1F1] px-3 py-2 rounded text-black-500">
                                        {
                                            content.odNotesForThisOrderCommentBtnText
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* check box  */}
                            <div className="mt-6 flex flex-col gap-[11px]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="text-xs font-normal text-black-500">
                                        {content.odNotifyCustomerByEmailText}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="text-xs font-normal text-black-500">
                                        {content.odNotifyCustomerBySMSText}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="text-xs font-normal text-black-500">
                                        {content.odVisibleOnStorefrontText}
                                    </p>
                                </div>
                            </div>

                            <div className="h-[476px] w-full overflow-x-hidden overflow-y-scroll mt-10">
                                <div className="flex flex-col gap-10 w-[407px]">
                                    <NoteOrderHistory
                                        name="Anas Ahmed"
                                        date="add a 6 monthe ago (Aug 24,2023)"
                                        comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة العملاء"
                                        data
                                        message
                                        unread_message
                                        kotro
                                    />
                                    <NoteOrderHistory
                                        name="Anas Ahmed"
                                        date="add a 6 monthe ago (Aug 24,2023)"
                                        comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة
                                    العملاء"
                                    />
                                    <NoteOrderHistory
                                        name="Anas Ahmed"
                                        date="add a 6 monthe ago (Aug 24,2023)"
                                        comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة
                                    العملاء"
                                        unread_message
                                    />
                                    <NoteOrderHistory
                                        name="Anas Ahmed"
                                        date="add a 6 monthe ago (Aug 24,2023)"
                                        comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة
                                    العملاء"
                                    />
                                    <NoteOrderHistory
                                        name="Anas Ahmed"
                                        date="add a 6 monthe ago (Aug 24,2023)"
                                        comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة
                                    العملاء"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* col 2  */}
                    <div className="xl:w-[49%] lg:w-[49%] md:w-[49%] w-full">
                        {/* discount code  */}
                        <div className="bg-white p-6 rounded-md w-full">
                            {/* heading  */}
                            <h5 className="text-black-500 font-medium text-xl capitalize">
                                {common.discountText}
                            </h5>
                            <hr className="my-3" />
                            <TextField
                                identifier="cuponCode"
                                onChangeCb={() => {}}
                                groupClass="!h-[60px] !border-[#E7E7E7]"
                                placeholder="KPOPI5"
                                inputClass="placeholder:text-black-500 !text-base !font-medium"
                                rightIcon={
                                    <button className="bg-blue-700 h-10 rounded-[3px] w-[99px] text-white text-base font-normal">
                                        {common.applyText}
                                    </button>
                                }
                            />
                        </div>

                        {/* Order Totals   */}
                        <div className="bg-white p-6 rounded-md w-full mt-6">
                            {/* heading  */}
                            <h5 className="text-black-700 font-medium text-xl capitalize">
                                {content.odOrderTotalText}
                            </h5>
                            <div className="mt-4">
                                <div className="bg-ash-200 p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Subtotal"
                                        rightText="SAR 235,OO"
                                        leftTextClass="!text-black-500 !text-sm !font-normal"
                                        rightTextClass="!text-black-500 !text-sm !font-normal uppercase"
                                    />
                                </div>
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Discount (kpop15)"
                                        rightText="SARI 11,90"
                                        leftTextClass="!text-black-500 !text-sm !font-normal"
                                        rightTextClass="!text-black-500 !text-sm !font-normal uppercase"
                                    />
                                </div>
                                <div className="bg-ash-200 p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Shipping & Handling"
                                        rightText="SAR 18.00"
                                        leftTextClass="!text-black-500 !text-sm !font-normal"
                                        rightTextClass="!text-black-500 !text-sm !font-normal uppercase"
                                    />
                                </div>
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Cash on Delivery Fee"
                                        rightText="SAR 25,00"
                                        leftTextClass="!text-black-500 !text-sm !font-normal"
                                        rightTextClass="!text-black-500 !text-sm !font-normal uppercase"
                                    />
                                </div>
                                <hr className="mt-3" />
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Grand Total"
                                        rightText="SAR 269,10"
                                        leftTextClass="!text-black-700 !text-base !font-normal"
                                        rightTextClass="!text-black-700 !text-base !font-medium uppercase"
                                    />
                                </div>
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="TotaI Paid"
                                        rightText="SAR 269,10"
                                        leftTextClass="!text-black-700 !text-base !font-normal"
                                        rightTextClass="!text-black-700 !text-base !font-medium uppercase"
                                    />
                                </div>
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Total Refunded"
                                        rightText="SAR O,OO"
                                        leftTextClass="!text-black-700 !text-base !font-normal"
                                        rightTextClass="!text-black-700 !text-base !font-medium uppercase"
                                    />
                                </div>
                                <div className="p-3 rounded-[3px]">
                                    <OrderDetailsInfo
                                        leftText="Total Due"
                                        rightText="SAR O,OO"
                                        leftTextClass="!text-black-700 !text-base !font-normal"
                                        rightTextClass="!text-black-700 !text-base !font-medium uppercase"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-md w-full mt-6 flex flex-col gap-6">
                            <OrderStatusCard />
                            <OrderStatusCard />
                            <OrderStatusCard />
                        </div>
                    </div>
                </section>

                {/* modal  */}
                <OrdersModal
                    open={openProcessing}
                    setOpen={setOpenProcessing}
                    icon={processing}
                    subTitle={modal.odProcessingModalText}
                />
                <OrdersModal
                    open={openCancle}
                    setOpen={setOpenCancle}
                    icon={cancle}
                    subTitle={modal.odCancleModalText}
                />
                <EditShippingAddress
                    open={openEditShipping}
                    setOpen={setOpenEditShipping}
                />
                <AddNewTicketModal
                    open={openNewTicket}
                    setOpen={setOpenNewTicket}
                />
            </div>
        </Layout>
    );
};

export default OrderDetails;
