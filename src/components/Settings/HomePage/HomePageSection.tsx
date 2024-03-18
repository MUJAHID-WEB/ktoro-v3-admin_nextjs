import React, { useState } from "react";
import BreadCrumb from "@/components/base/BreadCrumb";
import Tabs from "@/components/base/Tabs";
import NotificationSection from "./NotificationSection";
import HeaderSlides from "./HeaderSlides";
import Image from "next/image";
import Button from "@/components/base/Button";
import Link from "next/link";
import HomeBannerSection from "./HomeBannerSection";
import ItemSlides from "./ItemSlides";

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

const otherSlides = [
  {
    id: 1,
    title: "slide 1",
    imgSrc: "/images/slide-2.png",
  },
  {
    id: 2,
    title: "slide 2",
    imgSrc: "/images/slide-2.png",
  },
  {
    id: 3,
    title: "slide 3",
    imgSrc: "/images/slide-2.png",
  },
  {
    id: 4,
    title: "slide 4",
    imgSrc: "/images/slide-2.png",
  },
  {
    id: 5,
    title: "slide 5",
    imgSrc: "/images/slide-2.png",
  },
];

// Tabs data
const tabs = [
  {
    label: "Header Slider",
    content: <HeaderSlides />,
    btnLink: "/settings/home-page/add",
    btnText: "Add Header Slides",
    otherSlides,
  },
  {
    label: "Home Banners",
    content: <HomeBannerSection />,
  },
  {
    label: "Item Slides",
    content: <ItemSlides />,
  },
  {
    label: "Notifications",
    content: <NotificationSection />,
  },
];

const HomePageSection = () => {
  const [tabsIndex, setTabsIndex] = useState<number>(0);
  const otherSlides = tabs[tabsIndex].otherSlides;

  return (
    <div>
      <div className="mt-4">
        <BreadCrumb paths={paths} separator="●" />
        <hr className="my-4" />
        <div className="bg-white p-6 rounded-md mb-6">
          <Tabs tabs={tabs} btnClass="primary" tabsIndex={setTabsIndex} />
        </div>
        {otherSlides && (
          <div className="bg-white p-6 rounded-md flex gap-6">
            {otherSlides?.map((slide) => (
              <div key={slide.id} className="rounded-md relative flex-1">
                <Image
                  src={slide.imgSrc}
                  alt={slide.title}
                  width={150}
                  height={150}
                  className="w-full h-60 object-fill overflow-hidden"
                />
                <Link
                  href="/settings/home-page/add"
                  className="btn primary absolute left-1/2 transform -translate-x-1/2 bottom-6 w-36"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageSection;
