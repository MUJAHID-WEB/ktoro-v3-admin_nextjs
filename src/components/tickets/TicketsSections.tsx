import Link from "next/link";
import React, { useState } from "react";
import Button from "../base/Button";
import AddNewTicketModal from "../modals/orders/AddNewTicketModal";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { ticketBtnTextContent } from "@/static/contents/tickets";
import { commonContent } from "@/static/contents/common";
import TicketTable from "./TicketTable";

const TicketsSections = () => {
    const router = useRouter();
    const [openNewTicket, setOpenNewTicket] = useState<boolean>(false);

    let { locale } = router;
    const content: any = useTranslator(locale || "en", ticketBtnTextContent);
    const common: any = useTranslator(locale || "en", commonContent);

    return (
        <div>
            {/* heading  */}
            <section className="flex justify-between items-center mt-8">
                {/* left side -> link  */}
                <div className="flex items-center gap-6">
                    <Link
                        href={"/"}
                        className="font-normal text-xl text-black-500"
                    >
                        {common.dashboardText}
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-black-500"></div>
                        <p className="font-normal text-xl text-black-500">
                            {common.ticketsText}
                        </p>
                    </div>
                </div>

                {/* right side -> button  */}
                <div className="flex items-center gap-6">
                    <Button
                        variant="outline"
                        className="border border-[#8C9196]"
                        onClick={() => router.push("/tickets/new-subject")}
                    >
                        {content.addNewSubjectBtnText}
                    </Button>
                    <Button onClick={() => setOpenNewTicket(true)}>
                        {content.addNewTicketsBtnText}
                    </Button>
                </div>

                <AddNewTicketModal
                    open={openNewTicket}
                    setOpen={setOpenNewTicket}
                />
            </section>
            <hr className="mt-4 mb-2" />

            {/* table  */}
            <section>
                <TicketTable />
            </section>
        </div>
    );
};

export default TicketsSections;
