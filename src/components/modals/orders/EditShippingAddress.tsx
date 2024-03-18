import React from "react";
import Image from "next/image";

import Modal from "../Modal";
import TextField from "@/components/base/TextField";
import search_icon from "../../../../public/images/orders/search.png";
import map_image from "../../../../public/images/orders/map.png";
import Button from "@/components/base/Button";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { commonContent } from "@/static/contents/common";
import { editShippingAddressContent } from "@/static/contents/orders";

interface Props {
    open: boolean;
    setOpen: (e: boolean) => void;
}

const EditShippingAddress = ({ open, setOpen }: Props) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(
        locale || "en",
        editShippingAddressContent
    );
    const common: any = useTranslator(locale || "en", commonContent);

    const body = (
        <>
            <h5 className="font-medium text-xl text-black-500">
                {content.editShippingAddressModal}
            </h5>
            {/* form  */}
            <div className="mt-6 w-full flex flex-col gap-4">
                <TextField
                    identifier="name"
                    inputType="text"
                    label={common.nameText}
                    required
                    onChangeCb={() => {}}
                    placeholder="mohammed abdullah"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />
                <TextField
                    identifier="country"
                    inputType="text"
                    label={common.countryText}
                    required
                    onChangeCb={() => {}}
                    placeholder="saudi arabi"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />
                <TextField
                    identifier="city"
                    inputType="text"
                    label={common.cityText}
                    required
                    onChangeCb={() => {}}
                    placeholder="jeddah"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />
                <TextField
                    identifier="mobile"
                    inputType="text"
                    label={common.mobileText}
                    required
                    onChangeCb={() => {}}
                    placeholder="+966543254677"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />
                <TextField
                    identifier="secondNumber"
                    inputType="text"
                    label={common.secondNumberText}
                    onChangeCb={() => {}}
                    placeholder="+966543254677"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />
                <TextField
                    identifier="googleMap"
                    inputType="text"
                    label="Google map"
                    onChangeCb={() => {}}
                    placeholder="252, Abhinandan Nagar Rd, DDU Nagar, Sukhlia, Indore, Madhya Pradesh 452001, India"
                    labelClass="!font-medium !text-base !text-black-500"
                    groupClass="!h-[35px] !border-gray-200"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-sm capitalize"
                />

                {/* map section  */}
                <TextField
                    identifier="searchText"
                    inputType="text"
                    onChangeCb={() => {}}
                    placeholder={content.searchForYourAddressPlaceholder}
                    groupClass="!h-[52px] !border-gray-200 !border-t-0"
                    inputClass="!placeholder:text-ash-500 !font-normal !text-xl capitalize"
                    leftIcon={
                        <Image
                            src={search_icon}
                            alt="Search icon"
                            className="mt-1"
                        />
                    }
                />
                {/* map  */}
                <div>
                    <Image src={map_image} alt="map image" />
                </div>

                {/* footer button   */}
                <div className="flex items-center justify-between">
                    <Button variant="outline">
                        {content.confirmTheAddressBtnText}
                    </Button>
                    <div className="flex gap-3">
                        <Button
                            onClick={() => setOpen(false)}
                            variant="outline"
                        >
                            {common.cancleText}
                        </Button>
                        <Button variant="primary">{common.saveText}</Button>
                    </div>
                </div>
            </div>
        </>
    );
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalClass="!w-[600px] !h-[1020px] py-4 px-6 !rounded-xl mx-auto mt-12"
        >
            {body}
        </Modal>
    );
};

export default EditShippingAddress;
