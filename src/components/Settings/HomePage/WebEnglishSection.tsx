import React from "react";
import Image from "next/image";

const WebEnglishSection = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Image
          src="/images/web1.jpg"
          alt="cover image"
          width={500}
          height={500}
          className="flex-1 w-full"
        />
        <div className="flex-1 w-full h-full">
          <div className="flex flex-col gap-4 w-full h-full">
            <Image
              src="/images/web1.jpg"
              alt="cover image"
              width={500}
              height={500}
              className="w-full h-[250px] object-cover"
            />
            <Image
              src="/images/web1.jpg"
              alt="cover image"
              width={500}
              height={500}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Image
          src="/images/web1.jpg"
          alt="cover image"
          width={500}
          height={500}
          className="w-full h-[350px] object-cover"
        />
        <Image
          src="/images/web1.jpg"
          alt="cover image"
          width={500}
          height={500}
          className="w-full h-[350px] object-cover"
        />
        <Image
          src="/images/web1.jpg"
          alt="cover image"
          width={500}
          height={500}
          className="w-full h-[350px] object-cover"
        />
        <Image
          src="/images/web1.jpg"
          alt="cover image"
          width={500}
          height={500}
          className="w-full h-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default WebEnglishSection;
