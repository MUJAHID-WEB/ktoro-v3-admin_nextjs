import React from "react";
import Image from "next/image";
import TextField from "@/components/base/TextField";
import Button from "@/components/base/Button";

const AddSlidesForm = () => {
  return (
    <form className="flex gap-6">
      <div className="flex-[2]">
        <div className="border rounded-md p-6">
          <TextField
            identifier="link"
            label="Link"
            labelClass="font-semibold"
            required
            onChangeCb={() => {}}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="border p-6 rounded-md">
          <div className="flex justify-between items-center mb-6">
            <p className="font-semibold">Cover</p>
            <p className="font-semibold">1920 * 768</p>
          </div>
          <div>
            <Image
              src="/images/cover-image.png"
              alt="slide"
              width={1920}
              height={768}
              className="w-full"
            />
          </div>
        </div>
        <Button className="w-full mt-6">Save</Button>
      </div>
    </form>
  );
};

export default AddSlidesForm;
