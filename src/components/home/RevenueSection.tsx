import React from "react";
import Wedget from "./Wedget";
import RevenueCard from "./RevenueCard";

const RevenueSection = () => {
    return (
        <section className="grid grid-cols-12 gap-5 my-4">
            <Wedget
                dropDown
                dropDownText="Today"
                dropDownColor="#787878"
                dropDownClass="!text-[#787878]"
                widgetClass="!col-span-3 !bg-[#BBDBED] !bg-opacity-50"
            >
                <div className="h-[128px] w-full p-5 flex flex-col justify-center  gap-2 font-arabic">
                    <p className="text-lg font-normal text-gray-500 capitalize">
                        Total Orders
                    </p>
                    <h3 className="text-4xl font-bold text-black-700 mt-3">
                        32
                    </h3>
                </div>
            </Wedget>
            <Wedget
                dropDown
                dropDownText="Today"
                widgetClass="!col-span-3 !bg-green-300"
            >
                <RevenueCard revenue={"$ 344"} text="Total Revenue" />
            </Wedget>
            <Wedget
                dropDown
                dropDownText="Today"
                widgetClass="!col-span-3 !bg-red-400"
            >
                <RevenueCard revenue={"$ 32"} text="Drop down" />
            </Wedget>
            <Wedget
                dropDown
                dropDownText="Today"
                widgetClass="!col-span-3 !bg-red-400"
            >
                <RevenueCard revenue={"14 !!"} text="Order fail" />
            </Wedget>
        </section>
    );
};

export default RevenueSection;
