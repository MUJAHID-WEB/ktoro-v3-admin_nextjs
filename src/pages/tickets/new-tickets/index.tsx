import Button from "@/components/base/Button";
import Layout from "@/components/layout/Layout";
import Modal from "@/components/modals/Modal";
import ArrowLeftAlt from "@/components/svg/ArrowLeftAlt";
import TicketDetails from "@/components/tickets/TicketDetails";
import { addNewTicketContent } from "@/static/contents/tickets";
import useTranslator from "@/utils/useTranslator";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewTicketsPage = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [ticketStatus, setTicketStatus] = useState<string>("Pending");

    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", addNewTicketContent);
    return (
        <Layout>
            {/* heading  */}
            <section className="flex justify-between items-center mt-8">
                {/* left side -> link  */}
                <div className="flex items-center gap-6">
                    <Link
                        href={"/tickets"}
                        className="font-normal text-xl text-black-500 mt-1"
                    >
                        <ArrowLeftAlt />
                    </Link>

                    <p className="font-normal text-xl text-black-500">
                        {content.addNewTicketsBackBtnText}
                    </p>
                </div>

                {/* right side -> button  */}
                <div className="flex items-center gap-6">
                    <Button
                        variant="outline"
                        onClick={() => setOpenDialog(!openDialog)}
                        className="capitalize border border-[#8C9196]"
                    >
                        {content.ticketApermanentClosedBtnText}
                    </Button>
                    <Button onClick={() => {}} className="capitalize">
                        {content.ticketSaveAndSendBtnText}
                    </Button>
                </div>

                {/* conformations modal  */}
                <Modal
                    open={openDialog}
                    setOpen={setOpenDialog}
                    modalClass="!w-[240px] !h-[115px] bg-white rounded-xl py-10 px-6 !mt-44 mx-auto"
                >
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => {
                                setTicketStatus("Closed");
                                setOpenDialog(!openDialog);
                            }}
                            className="capitalize !p-0 !w-[111px] !h-[32px]"
                        >
                            {content.addNewTicketsModalConfirmationBtnText}
                        </Button>
                        <Button
                            onClick={() => {
                                setTicketStatus("Pending");
                                setOpenDialog(!openDialog);
                            }}
                            variant="outline"
                            className="capitalize  !p-0 !w-[73px] !h-[32px] border border-[#BABFC3]"
                        >
                            {content.addNewTicketsModalCancleBtnText}
                        </Button>
                    </div>
                </Modal>
            </section>
            <hr className="mt-3 mb-6 " />

            {/* ticket details  */}
            <TicketDetails status={ticketStatus} />
        </Layout>
    );
};

export default NewTicketsPage;
