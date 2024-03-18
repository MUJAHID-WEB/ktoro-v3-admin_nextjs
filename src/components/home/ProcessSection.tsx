import React from "react";
import Card from "../base/Card";
import ProcessCard from "./ProcessCard";

const ProcessSection = () => {
    return (
        <section className="flex flex-col gap-4 mt-8">
            {/* card 1  */}
            <Card cardClass="!px-5 !py-3 ">
                <div className="grid grid-cols-12 gap-5">
                    <ProcessCard
                        text="prosseing ( availible order ) to shipped"
                        day={1}
                        hr={22}
                        processCardClass="!bg-green-200"
                    />
                    <ProcessCard
                        text="prossing ( not avilible order ) to shipped"
                        day={1}
                        hr={22}
                        processCardClass="!bg-red-300"
                    />
                    <ProcessCard
                        text="prossing ( pre order ) to ship"
                        day={1}
                        hr={22}
                        processCardClass="!bg-blue-400"
                    />
                </div>
            </Card>

            {/* card 2  */}
            <Card cardClass="!px-5 !py-3">
                <div className="grid grid-cols-12 gap-5">
                    <ProcessCard
                        text="pre order import"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                    <ProcessCard
                        text="tranist import"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                    <ProcessCard
                        text="printing"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                </div>
            </Card>

            {/* card 3  */}
            <Card cardClass="!px-5 !py-3">
                <div className="grid grid-cols-12 gap-5">
                    <ProcessCard
                        text="Pending to Processing(orders)"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                    <ProcessCard
                        text="Pending to Processing(tickets)"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                    <ProcessCard
                        text="processing to complete (tickets)"
                        day={1}
                        hr={22}
                        processCardClass="!h-[170px]"
                    />
                </div>
            </Card>
        </section>
    );
};

export default ProcessSection;
