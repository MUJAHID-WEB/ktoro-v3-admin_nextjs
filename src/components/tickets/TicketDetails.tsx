import React from "react";
import Card from "../base/Card";
import TextField from "../base/TextField";
import SelectedField from "../base/SelectedField";
import Badge from "../base/Badge";
import NoteOrderHistory from "../orders/orderDetails/NoteOrderHistory";
import OrderStatusCard from "../orders/orderDetails/OrderStatusCard";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { addNewTicketFormContent } from "@/static/contents/tickets";

interface Props {
    status: string;
}

const TicketDetails = ({ status }: Props) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", addNewTicketFormContent);
    return (
        <section>
            <Card cardClass="!py-[20px] !px-[24px] flex gap-[24px]">
                <div className="w-[43%]">
                    {/* to  */}
                    <div className="h-[122px] w-full border border-gray-200 rounded-md p-6">
                        <TextField
                            identifier="to"
                            inputType="email"
                            label="To"
                            onChangeCb={() => {}}
                            placeholder="masis2i@gmail.com"
                            labelClass="!font-medium !text-lg !text-black-500"
                            groupClass={`!h-[37px] !border-ash-700 !rounded ${
                                status === "Closed" ? "!bg-red-100" : ""
                            }`}
                            inputClass={`!placeholder:text-ash-500 !font-normal !text-sm ${
                                status === "Closed" ? "!bg-red-100" : ""
                            }`}
                        />
                    </div>

                    {/* status  */}
                    <div className="h-[122px] w-full border border-gray-200 rounded-md p-6 mt-6 flex flex-col justify-between">
                        <h5 className="font-medium text-lg text-black-500">
                            ID: 4352562
                        </h5>

                        <div className="flex items-center gap-2">
                            <h5 className="font-medium text-lg text-black-500">
                                {content.newTicketStatusText} :
                            </h5>
                            <Badge
                                text={status}
                                status
                                badgeClass={
                                    status == "Closed"
                                        ? "!bg-[#D72C0D] !bg-opacity-20"
                                        : "!bg-[#007F5F] !bg-opacity-20"
                                }
                                statusClass={
                                    status == "Closed"
                                        ? "!bg-[#D72C0D] "
                                        : "!bg-[#007F5F] "
                                }
                            />
                        </div>
                    </div>

                    {/* ticket summery  */}
                    <div className="h-[495px] w-full border border-gray-200 rounded-md p-6 mt-6">
                        <h5 className="font-medium text-lg text-black-500">
                            {content.newTicketSummeryText}
                        </h5>

                        <div className="w-full flex flex-col gap-4 mt-6">
                            <SelectedField
                                options={[
                                    "Missing Item 1",
                                    "Missing Item 2",
                                    "Missing Item 3",
                                    "Missing Item 4",
                                    "Missing Item 5",
                                    "Missing Item 6",
                                    "Missing Item 7",
                                ]}
                                identifier=""
                                label={content.newTicketSummerySubject}
                                labelClass="!font-medium !text-sm !text-black-500"
                                groupClass={`!gap-4 !h-[37px] ${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                inputClass={`${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                dropdownBtnClass="!h-[26px] !w-[26px] !top-[5px]"
                                placeholder={
                                    content.newTicketSummerySubjectPlaceholder
                                }
                            />
                            <SelectedField
                                options={["343434", "454545", "565656"]}
                                identifier=""
                                label={content.newTicketSummeryOrderNo}
                                labelClass="!font-medium !text-sm !text-black-500"
                                groupClass={`!gap-4 !h-[37px] ${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                inputClass={`${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                dropdownBtnClass="!h-[26px] !w-[26px] !top-[5px]"
                                placeholder={
                                    content.newTicketSummeryOrderNoPlaceholder
                                }
                            />
                            <SelectedField
                                options={["Low", "Higher", "Medium"]}
                                identifier=""
                                label={content.newTicketSummeryPriority}
                                labelClass="!font-medium !text-sm !text-black-500"
                                groupClass={`!gap-4 !h-[37px] ${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                inputClass={`${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                dropdownBtnClass="!h-[26px] !w-[26px] !top-[5px]"
                                placeholder={
                                    content.newTicketSummeryPriorityPlaceholder
                                }
                            />
                            <SelectedField
                                options={[
                                    "Salman Mir",
                                    "Rafiq Ali",
                                    "Masum Billha",
                                    "Haji Mustafa",
                                ]}
                                identifier=""
                                label={content.newTicketSummeryAssignee}
                                labelClass="!font-medium !text-sm !text-black-500"
                                groupClass={`!gap-4 !h-[37px] ${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                inputClass={`${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                dropdownBtnClass="!h-[26px] !w-[26px] !top-[5px]"
                                placeholder={
                                    content.newTicketSummeryAssigneePlaceholder
                                }
                            />
                            <SelectedField
                                options={["Ahmed", "Mir", "Haji", "Chy"]}
                                identifier=""
                                label={content.newTicketSummerySubAssignee}
                                labelClass="!font-medium !text-sm !text-black-500"
                                groupClass={`!gap-4 !h-[37px] ${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                inputClass={`${
                                    status === "Closed" ? "!bg-red-100" : ""
                                }`}
                                dropdownBtnClass="!h-[26px] !w-[26px] !top-[5px]"
                                placeholder={
                                    content.newTicketSummerySubAssigneePlaceholder
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[54%]">
                    <div className="h-[309px] w-full border border-gray-200 rounded-md p-6">
                        <p className="text-xl font-medium text-black-500">
                            {content.newTicketCommentText}
                        </p>
                        <div
                            className={`border border-gray-200 rounded-md p-[10px] mt-3 ${
                                status === "Closed" ? "bg-red-100" : ""
                            }`}
                        >
                            {/* text area  */}
                            <textarea
                                name=""
                                id=""
                                placeholder={
                                    content.newTicketCommentPlaceholderText
                                }
                                className={`h-[123px] w-full  p-4 placeholder:text-ash-500 ${
                                    status === "Closed" ? "bg-red-100" : ""
                                }`}
                            ></textarea>

                            {status !== "Closed" && (
                                <div className="w-full text-right">
                                    <button className="h-[33px] w-[120px] bg-[#F1F1F1]  px-3 py-2 rounded text-black-500 text-sm font-normal">
                                        {content.newTicketCommentBtnText}
                                    </button>
                                </div>
                            )}
                        </div>

                        <label htmlFor="file">
                            <input
                                type="file"
                                id="file"
                                accept="iamges/*"
                                className="hidden"
                            />
                            <div className="h-[33px] w-fit bg-[#F1F1F1]  px-2 rounded text-black-500 text-xs font-normal mt-3 flex items-center gap-2">
                                No file was selected
                                <div className="border-black-700 border rounded w-[106px] h-[24px] px-2 py-1 text-xs bg-transparent">
                                    Choose A File
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* history  */}
                    <div className="min-h-[309px] w-full border border-gray-200 rounded-md p-6 mt-6">
                        <p className="text-xl font-medium text-black-500">
                            {content.newTicketHistoryText}
                        </p>

                        <div className="mt-4 flex flex-col gap-6">
                            <NoteOrderHistory
                                name={content.newTicketHistoryCustomerText}
                                date="add a 6 monthe ago (Aug 24,2023)"
                                comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة العملاء"
                            />
                            <NoteOrderHistory
                                name={content.newTicketHistoryYouText}
                                date="add a 6 monthe ago (Aug 24,2023)"
                                comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة العملاء"
                                message
                                admin
                            />
                            <NoteOrderHistory
                                name={content.newTicketHistoryCustomerText}
                                date="add a 6 monthe ago (Aug 24,2023)"
                                comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة العملاء"
                            />
                            <NoteOrderHistory
                                name={content.newTicketHistoryCustomerText}
                                date="add a 6 monthe ago (Aug 24,2023)"
                                comment="السلام عليكم اتمني من حضاتكم مراجعة خدمة العملاء"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <OrderStatusCard />
                    <OrderStatusCard />
                    <OrderStatusCard />
                    <OrderStatusCard />
                </div>
            </Card>
        </section>
    );
};

export default TicketDetails;
