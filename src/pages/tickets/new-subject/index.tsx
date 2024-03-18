import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import Layout from "@/components/layout/Layout";
import ArrowLeftAlt from "@/components/svg/ArrowLeftAlt";
import RightArrowButton from "@/components/svg/RightArrowButton";
import AddSubjectTable from "@/components/tickets/AddSubjectTable";
import { addNewSubjectContent } from "@/static/contents/tickets";
import useTranslator from "@/utils/useTranslator";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NewSubjectPage = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", addNewSubjectContent);
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
                        {content.addNewSubBackBtnText}
                    </p>
                </div>

                {/* right side -> button  */}
                <div className="flex items-center gap-6">
                    <Button onClick={() => {}} className="capitalize">
                        {content.saveConfigBtnText}
                    </Button>
                </div>
            </section>
            <hr className="mt-3 mb-6 " />

            {/* subject table  */}
            <section>
                <Card cardClass="!py-20 !pr-32">
                    <AddSubjectTable />
                </Card>
            </section>
        </Layout>
    );
};

export default NewSubjectPage;
