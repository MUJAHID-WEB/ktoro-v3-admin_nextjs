import React, { useState } from "react";
import Modal from "../Modal";
import Image, { StaticImageData } from "next/image";

import UploadImage from "@/components/base/UploadImage";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { commonContent } from "@/static/contents/common";
import { orderModalsContent } from "@/static/contents/orders";
import product_img from "../../../../public/images/orders/product.png";
import delete_btn from "../../../../public/images/orders/delete_btn.png";

interface Props {
    open: boolean;
    setOpen: (e: boolean) => void;
    icon: string | StaticImageData;
    subTitle: string;
    refund?: boolean;
}

const OrdersModal = ({
    open,
    setOpen,
    icon,
    subTitle,
    refund = false,
}: Props) => {
    // states
    const [image, setImage] = useState<string>();

    const router = useRouter();
    let { locale } = router;

    const common: any = useTranslator(locale || "en", commonContent);
    const modal: any = useTranslator(locale || "en", orderModalsContent);

    // handle process confirmation
    const handleProcess = () => {
        // TODO:logic

        // close modal
        setOpen(false);
    };

    // handle upload photo
    const handleUploadImage = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                image && setImage(reader.result as string);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    // processing modal
    const body = (
        <>
            <div>
                <Image src={icon} alt="Invoice" />
            </div>
            <p className="mt-4 w-[235px] text-center text-base font-medium text-black-500">
                {subTitle}
            </p>

            {/* refund  */}
            {refund && (
                <div className="w-full h-[222px] border border-gray-200 rounded-md mt-16 overflow-auto hide-scroll-bar">
                    <div className="w-fill h-10 border-b border-gray-200 flex items-center">
                        <h5 className="ps-2 w-[200px] font-normal text-xs text-[#72767C]">
                            Product
                        </h5>
                        <h5 className="ps-2 w-[120px] font-normal text-xs text-[#72767C]">
                            SKU
                        </h5>
                        <h5 className="ps-2 w-[75px] font-normal text-xs text-[#72767C]">
                            Cancle
                        </h5>
                    </div>
                    <div className="w-fill h-[92px] border-b border-gray-200 flex">
                        <div className="w-[200px] border-r border-gray-200 flex items-start gap-2 ps-2 pt-[30px]">
                            <Image
                                width={55}
                                height={55}
                                src={product_img}
                                alt=""
                            />{" "}
                            <p className="text-sm font-normal text-black-500">
                                Allen Sonny
                            </p>
                        </div>
                        <div className="w-[120px] border-r border-gray-200 ps-2 pt-[30px]">
                            <p className="text-sm font-medium text-black-500">
                                979977775
                            </p>
                        </div>
                        <div className="w-[75px] pt-[30px] ps-5">
                            <Image
                                className="cursor-pointer"
                                width={28}
                                height={34}
                                src={delete_btn}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-fill h-[92px] border-b border-gray-200 flex">
                        <div className="w-[200px] border-r border-gray-200 flex items-start gap-2 ps-2 pt-[30px]">
                            <Image
                                width={55}
                                height={55}
                                src={product_img}
                                alt=""
                            />{" "}
                            <p className="text-sm font-normal text-black-500">
                                Allen Sonny
                            </p>
                        </div>
                        <div className="w-[120px] border-r border-gray-200 ps-2 pt-[30px]">
                            <p className="text-sm font-medium text-black-500">
                                979977775
                            </p>
                        </div>
                        <div className="w-[75px] pt-[30px] ps-5">
                            <Image
                                className="cursor-pointer"
                                width={28}
                                height={34}
                                src={delete_btn}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* comment  */}
            <div
                className={`w-full h-56 border border-gray-200 rounded-md p-5 ${
                    refund ? "mt-12" : "mt-16"
                }`}
            >
                <h5 className="font-medium text-xl text-black-500">
                    {common.commentText}
                </h5>
                <textarea
                    className="w-full border mt-3 h-[129px] rounded-md p-[10px] text-sm font-normal placeholder:text-ash-500"
                    name=""
                    id=""
                    placeholder={modal.odModalCommentPlaceholderText}
                ></textarea>
            </div>

            {/* file upload */}
            <div className="w-full h-[131px] flex justify-center items-center border border-gray-200 rounded-md mt-5 p-5">
                <UploadImage handleUploadImage={handleUploadImage} />
            </div>

            {/* footer  */}
            <div className="mt-16">
                <p className="text-sm font-normal text-ash-600">
                    {modal.odClickConfirmationIfYouAgree}
                </p>

                <div className="mt-6 flex items-center gap-2">
                    <button
                        onClick={handleProcess}
                        className="bg-blue-700 w-[111px] h-9 rounded text-white text-sm font-normal"
                    >
                        {common.confirmationText}
                    </button>
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-white w-[73px] h-9 border border-ash-300 rounded text-black-500 text-sm font-normal"
                    >
                        {common.cancleText}
                    </button>
                </div>
            </div>
        </>
    );

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            modalClass={`!w-[591px] ${
                refund ? "!min-h-[1031px]" : "!min-h-[771px]"
            }  py-6 px-24 !rounded-xl mx-auto mt-12 flex flex-col items-center`}
        >
            {body}
        </Modal>
    );
};

export default OrdersModal;
