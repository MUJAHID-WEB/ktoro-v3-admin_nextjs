import React from "react";
import Tabs from "@/components/base/Tabs";
import WebEnglishSection from "./WebEnglishSection";
import WebArabicSection from "./WebArabicSection";

// Tabs data
const tabs = [
  {
    label: "Web-English",
    content: <WebEnglishSection />,
    btnText: "Edit Home Banner",
    btnLink: "/settings/home-page/edit",
  },
  {
    label: "Web-Arabic",
    content: <WebArabicSection />,
    btnText: "Edit Home Banner",
    btnLink: "/settings/home-page/edit",
  },
];

const HomeBannerSection = () => {
  return (
    <div>
      <Tabs tabs={tabs} btnClass="primary" />
    </div>
  );
};

export default HomeBannerSection;
