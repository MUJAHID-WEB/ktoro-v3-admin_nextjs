import React from "react";
import Tabs from "@/components/base/Tabs";
import BreadCrumb from "@/components/base/BreadCrumb";
import ProfileForm from "./ProfileForm";

// Breadcrumb data
const paths = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Users",
    url: "/settings/users",
  },
  {
    title: "Profile",
    url: "/settings/users/profile",
  },
];

// Tabs data
const tabs = [
  {
    label: "Profile",
    content: <ProfileForm />,
  },
];

const ProfileSection = () => {
  return (
    <div className="mt-4 space-y-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-4 rounded-md">
        <Tabs tabs={tabs} />
      </div>
      <div className="bg-white rounded-md divide-y">
        <div className="flex justify-between items-center px-8 py-4">
          <span>Mobile</span>
          <span className="text-blue-500">+955854225112</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4 bg-ash-400">
          <span>Email</span>
          <span className="text-blue-500">example@hotmail.com</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4">
          <span>Position</span>
          <span className="text-blue-500">Markter, Youtube</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4 bg-ash-400">
          <span>Added Products</span>
          <span className="text-blue-500">85</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4">
          <span>Added Credit</span>
          <span className="text-blue-500">685</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4 bg-ash-400">
          <span>Canceled Orders</span>
          <span className="text-blue-500">74</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4">
          <span>Joined Date</span>
          <span className="text-blue-500">28 July 2023</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4 bg-ash-400">
          <span>Gender</span>
          <span className="text-blue-500">Male</span>
        </div>
        <div className="flex justify-between items-center px-8 py-4">
          <span>Last Session</span>
          <span className="text-blue-500">25 July 2023.07.34</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
