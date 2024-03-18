import React from "react";
import Image from "next/image";

import Modal from "../Modal";
import TextField from "@/components/base/TextField";
import UploadImage from "@/components/base/UploadImage";

import edit_icon from "../../../../public/images/orders/edit.png";
import SelectedField from "@/components/base/SelectedField";
import Button from "@/components/base/Button";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { addNewTicketFormModalContent } from "@/static/contents/tickets";

interface Props {
    open: boolean;
    setOpen: (e: boolean) => void;
}

const AddNewTicketModal = ({ open, setOpen }: Props) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(
        locale || "en",
        addNewTicketFormModalContent
    );
    const body = (
        <>
            <h5 className="font-medium text-[32px] text-black-500">
                {content.addNewTicketModalText}
            </h5>
            {/* form  */}
            <div className="mt-10 w-full flex flex-row gap-6">
                {/* left col  */}
                <div className="w-[48%]">
                    <TextField
                        identifier="to"
                        inputType="email"
                        label={content.addNewTicketModalToText}
                        required
                        onChangeCb={() => {}}
                        placeholder="masis2i@gmail.com"
                        labelClass="!font-medium !text-lg !text-black-500"
                        groupClass="!h-[56px] !border-ash-700 !rounded"
                        inputClass="!placeholder:text-ash-500 !font-normal !text-sm"
                    />

                    {/* Customer Summary  */}
                    <h5 className="font-normal text-lg text-black-500 mt-6">
                        {content.addNewTicketModalCustomerSummeryTex}
                    </h5>
                    <div className="w-full flex flex-col gap-4 h-[220px] rounded border border-ash-700 mt-3 px-4 py-6">
                        <div className="flex items-center justify-between">
                            <p className="font-medium text-base text-black-500">
                                CC
                            </p>
                            <Image src={edit_icon} alt="edit_icon" />
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium text-base text-black-500">
                                BCC
                            </p>
                            <Image src={edit_icon} alt="edit_icon" />
                        </div>

                        <SelectedField
                            options={[
                                "#2000098815 at sep 3, 2023 (SAR 162,00) - Processing",
                                "#2000098815 at sep 10, 2023 (SAR 162,00) - Processing",
                                "#2000098815 at sep 15, 2023 (SAR 162,00) - Processing",
                                "#2000098815 at sep 20, 2023 (SAR 162,00) - Processing",
                            ]}
                            identifier=""
                            label={
                                content.addNewTicketModalAssignedToOrderLabel
                            }
                            required
                            placeholder={
                                content.addNewTicketModalAssignedToOrderPlaceholder
                            }
                            labelClass="!font-medium !text-base !text-black-500"
                            groupClass="!gap-4"
                        />
                    </div>

                    {/* ticket summery  */}
                    <h5 className="font-normal text-lg text-black-500 mt-6">
                        {content.newTicketModalSummeryText}
                    </h5>

                    <div className="w-full flex flex-col gap-4 h-[447px] rounded border border-ash-700 mt-3 px-4 py-6">
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
                            label={content.newTicketModalSummerySubject}
                            required
                            labelClass="!font-medium !text-base !text-black-500"
                            groupClass="!gap-4"
                            placeholder={
                                content.newTicketModalSummerySubjectPlaceholder
                            }
                        />
                        <SelectedField
                            options={["Low", "Higher", "Medium"]}
                            identifier=""
                            label={content.newTicketModalSummeryPriority}
                            required
                            labelClass="!font-medium !text-base !text-black-500"
                            groupClass="!gap-4"
                            placeholder={
                                content.newTicketModalSummeryPriorityPlaceholder
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
                            label={content.newTicketModalSummeryAssignee}
                            required
                            labelClass="!font-medium !text-base !text-black-500"
                            groupClass="!gap-4"
                            placeholder={
                                content.newTicketModalSummeryAssigneePlaceholder
                            }
                        />
                        <SelectedField
                            options={["Ahmed", "Mir", "Haji", "Chy"]}
                            identifier=""
                            label={content.newTicketModalSummerySubAssignee}
                            required
                            labelClass="!font-medium !text-base !text-black-500"
                            groupClass="!gap-4"
                            placeholder={
                                content.newTicketModalSummerySubAssigneePlaceholder
                            }
                        />
                    </div>
                </div>
                {/* right col  */}
                <div className="w-[49%]">
                    <div className="flex items-center gap-2">
                        <h5 className="font-medium text-lg text-black-500">
                            {content.addNewTicketModalPublicReplyText}
                        </h5>
                        <div className="h-5 w-[1px] bg-[#D9D9D9]"></div>
                        <p className="text-ash-600 text-sm font-normal capitalize">
                            {content.addNewTicketModalPublicReplyMessage}
                        </p>
                    </div>

                    {/* textarea  */}
                    <textarea
                        name=""
                        id=""
                        className="h-[225px] w-full border border-ash-700 rounded p-2 mt-3"
                    ></textarea>

                    <div className="mt-4 w-full flex justify-end">
                        <UploadImage />
                    </div>
                </div>
            </div>

            {/* footer button  */}
            <div className="flex gap-3 mt-9">
                <Button>{content.addNewTicketsModalSaveAndSendBtnText}</Button>
                <Button onClick={() => setOpen(false)} variant="outline">
                    {content.addNewTicketsModalCancleBtnText}
                </Button>
            </div>
        </>
    );
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalClass="!w-[1040px] !h-[1313px] py-10 px-6 !rounded-xl mx-auto mt-12"
        >
            {body}
        </Modal>
    );
};

export default AddNewTicketModal;
