import React from "react";
import TextField from "../base/TextField";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { authContent } from "@/static/contents/auth";

const Reset = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", authContent);
    return (
        <div className="w-full min-h-screen flex justify-center items-center px-2 auth-bg">
            <div className="conatiner w-[931px] xl:h-[659px] lg:h-[659px]  md:h-[659px] h-[515px] bg-[#DFEAF0] xl:rounded-lg lg:rounded-lg md:rounded-lg rounded-[38px] flex justify-center items-center border border-white">
                <div className="xl:w-[470px] lg:w-[470px] md:w-[470px] w-[365px] border text-center flex flex-col items-center">
                    <h1 className="font-bold text-[32px] text-[#1F262E] leading-[47px] capitalize text-center">
                        {content.resetPasswordsText}
                    </h1>
                    <p className="w-[365px] font-normal text-xl leading-[29px] text-[#1F262E] capitalize">
                        {content.resetSubtitleText}
                    </p>

                    <div className="w-[365px] mt-4 flex flex-col gap-4">
                        <TextField
                            identifier="newPassword"
                            inputType="password"
                            onChangeCb={() => {}}
                            label={content.newPasswordText}
                            placeholder="******"
                            labelClass="!font-medium !text-base !text-[#1F262E] !capitalize"
                            groupClass="!border !border-[#718692] !rounded-lg h-[48px] "
                            inputClass="placeholder:capitalize"
                        />
                        <TextField
                            identifier="newPassword"
                            inputType="password"
                            onChangeCb={() => {}}
                            label={content.confirmPasswordText}
                            placeholder="******"
                            labelClass="!font-medium !text-base !text-[#1F262E] !capitalize"
                            groupClass="!border !border-[#718692] !rounded-lg h-[48px]"
                            inputClass="placeholder:capitalize"
                        />

                        <button className="w-full h-12 bg-[#2B8DC5] rounded-lg font-bold text-base text-white capitalize">
                            {content.resetBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;
