import React, { useState } from "react";
import Avatar from "../base/Avatar";
import DownArrow from "../svg/DownArrow";
import user_image from "../../../public/images/photo.avif";
import logout_image from "../../../public/images/logout-img.png";
import Dropdown from "../base/Dropdown";
import Logout from "../svg/Logout";
import User from "../svg/User";
import Modal from "../modals/Modal";
import Button from "../base/Button";
import Image from "next/image";

const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <div className="flex items-center gap-1 relative">
            <div
                className="cursor-pointer relative"
                onClick={() => setOpenMenu(!openMenu)}
            >
                <Avatar avatarClass="!h-10 !w-10" url={user_image} status />
            </div>
            <div
                onClick={() => setOpenMenu(!openMenu)}
                className="cursor-pointer"
            >
                <DownArrow />
            </div>
            {openMenu && (
                <Dropdown dropdownClass="!right-6">
                    <div className="w-[120px] py-2">
                        <div className="flex items-center gap-2 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer group">
                            <div className="h-4 w-4 block group-hover:hidden">
                                <User />
                            </div>
                            <div className="h-4 w-4 hidden group-hover:block">
                                <User color="#fff" />
                            </div>
                            <h3 className="font-normal text-sm">Profile</h3>
                        </div>
                        <div
                            onClick={() => {
                                setOpenDialog(!openDialog);
                                setOpenMenu(!openMenu);
                            }}
                            className="flex items-center gap-3 p-2 hover:bg-blue-700 text-black-500 hover:text-white cursor-pointer group"
                        >
                            <div className="h-4 w-4 block group-hover:hidden">
                                <Logout />
                            </div>
                            <div className="h-4 w-4 hidden group-hover:block">
                                <Logout color="#fff" />
                            </div>
                            <h3 className="font-normal text-sm">Logout</h3>
                        </div>
                    </div>
                </Dropdown>
            )}

            <Modal
                open={openDialog}
                setOpen={setOpenDialog}
                modalClass="!w-[400px] !h-[280px] bg-white rounded-xl py-10 px-6 !mt-44 mx-auto flex flex-col justify-center items-center"
            >
                <Image src={logout_image} alt="" />
                <h5 className="text-base font-medium text-black-500 mt-4">
                    you are attempting to log out!
                </h5>
                <p className="text-sm font-normal text-[#6D7175] mt-1">
                    Are you sure ?
                </p>
                <div className="flex items-center gap-2 mt-6">
                    <Button
                        onClick={() => setOpenDialog(false)}
                        className="capitalize !p-0 !w-[111px] !h-[32px]"
                    >
                        Log out
                    </Button>
                    <Button
                        onClick={() => setOpenDialog(false)}
                        variant="outline"
                        className="capitalize  !p-0 !w-[73px] !h-[32px] border border-[#BABFC3]"
                    >
                        Cancle
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default UserMenu;
