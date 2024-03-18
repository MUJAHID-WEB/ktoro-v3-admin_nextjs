import React from "react";
import BreadCrumb from "@/components/base/BreadCrumb";
import Tabs from "@/components/base/Tabs";
import NotificationSection from "@/components/Settings/HomePage/NotificationSection";
import AddSlidesForm from "./AddSlidesForm";

// Breadcrumb data
const paths = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Home Page",
    url: "/settings/home-page",
  },
];

// Tabs data
const tabs = [
  {
    label: "Header Slider",
    content: <AddSlidesForm />,
  },
  {
    label: "Home Banners",
    content: <div>Home Banners</div>,
  },
  {
    label: "Item Slides",
    content: <div>Item Slides</div>,
  },
  {
    label: "Notifications",
    content: <NotificationSection />,
  },
];

const SlidesAddSection = () => {
  return (
    <div>
      <div className="mt-4">
        <BreadCrumb paths={paths} separator="●" />
        <hr className="my-4" />
        <div className="bg-white p-6 rounded-md mb-6">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default SlidesAddSection;
