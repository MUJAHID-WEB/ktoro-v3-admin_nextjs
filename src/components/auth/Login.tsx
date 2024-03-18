import React, { useState } from "react";
import TextField from "../base/TextField";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { authContent } from "@/static/contents/auth";

const initialData: any = Object.freeze({});

const Login = () => {
    const [form, setForm] = useState<any>(initialData);
    console.log("Form initial data: " + JSON.stringify(form));

    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", authContent);

    return (
        <div className="w-full min-h-screen flex justify-center items-center px-2 auth-bg">
            <div className="conatiner w-[931px] xl:h-[659px] lg:h-[659px]  md:h-[659px] h-[515px] bg-[#DFEAF0] xl:rounded-lg lg:rounded-lg md:rounded-lg rounded-[38px] flex justify-center items-center border border-white">
                <div className="w-[365px] border text-center">
                    <h1 className="font-bold text-[32px] text-[#1F262E] leading-[47px] capitalize text-center">
                        {content.authWelcomeText}
                    </h1>
                    <p className="font-normal text-xl leading-[29px] text-[#1F262E] capitalize">
                        {content.loginSubtitleText}
                    </p>

                    <div className="mt-4 flex flex-col gap-4">
                        <TextField
                            identifier="userName"
                            inputType="text"
                            onChangeCb={(e) => {}}
                            label={content.authUsernameText}
                            placeholder="bncoas kdswe"
                            labelClass="!font-medium !text-base !text-[#1F262E]"
                            groupClass="!border !border-[#718692] !rounded-lg h-[48px]"
                            inputClass="placeholder:capitalize"
                        />
                        <TextField
                            identifier="password"
                            inputType="password"
                            onChangeCb={() => {}}
                            label={content.authPasswordText}
                            placeholder="******"
                            labelClass="!font-medium !text-base !text-[#1F262E]"
                            groupClass="!border !border-[#718692] !rounded-lg h-[48px]"
                            inputClass="placeholder:capitalize"
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    id=""
                                />
                                <p className="capitalize font-normal text-xs text-[#1F262E]">
                                    {content.authRememberMeText}
                                </p>
                            </div>
                            <Link href={"/reset"}>
                                <p className="capitalize font-medium text-xs text-[#2B8DC5]">
                                    {content.authForgetPaText}
                                </p>
                            </Link>
                        </div>
                        <button className="w-full h-12 bg-[#2B8DC5] rounded-lg font-bold text-base text-white">
                            {content.loginBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
