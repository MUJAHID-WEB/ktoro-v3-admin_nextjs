import React from "react";
import Image from "next/image";
import Button from "@/components/base/Button";
import Link from "next/link";

const HeaderSlides = () => {
  return (
    <div className="relative">
      <Image
        src="/images/header-slide.png"
        alt="Header Slides"
        width={650}
        height={550}
        className="w-full h-[550px]"
      />
      <div className="flex gap-4 absolute bottom-36 left-12">
        <Link href="/settings/home-page/add" className="btn primary w-28">
          Edit
        </Link>
        <Button className="danger w-full md:w-28">Delete</Button>
      </div>
    </div>
  );
};

export default HeaderSlides;
