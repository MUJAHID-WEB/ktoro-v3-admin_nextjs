import React from "react";
import BreadCrumb from "../base/BreadCrumb";
import TextField from "../base/TextField";
import Image from "next/image";
import Button from "../base/Button";

const CodFeeSection = () => {
  const paths = [
    {
      title: "Dashboard",
      url: "/",
    },
    {
      title: "Cod Fee",
      url: "/settings/cod-fee",
    },
  ];
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-6 rounded-md">
        <div className="flex gap-6 w-[792px]">
          <div className="flex-[2]">
            <h3 className="font-semibold mb-2">Country</h3>
            <ul className="space-y-6">
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/saudi.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Saudi</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/emirates.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Emirates</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/qatar.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Qatar</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/kuwait.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Kuwait</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/bahrain.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Bahrain</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <Image
                    src="/images/flags/oman.png"
                    alt="saudi arabia"
                    width={30}
                    height={20}
                    className="w-full"
                  />
                </span>
                <span className="pl-2 py-2 inline-block">Oman</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Fee</h3>
            <ul className="space-y-6">
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">SAR</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">AED</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">QAR</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">KWD</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">BHD</span>
              </li>
              <li className="border flex items-center rounded-md">
                <span className="px-2 py-2 inline-block border-r">
                  <input type="text" name="" id="" defaultValue={1} />
                </span>
                <span className="px-2 py-2 inline-block">OMR</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default CodFeeSection;
