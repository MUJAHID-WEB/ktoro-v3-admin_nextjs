import React from "react";
import TextField from "../base/TextField";
import Button from "../base/Button";
import BreadCrumb from "../base/BreadCrumb";

const EditBrandSection = () => {
  const paths = [
    { title: "Dashboard", url: "/" },
    { title: "Brands", url: "/brands" },
    { title: "Edit", url: "/brands/edit" },
  ];
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="bg-white p-6 rounded-md">
        <div className="border border-gray-300 p-6 rounded-md space-y-6">
          <div>
            <TextField
              label="Title*"
              labelClass="!font-semibold text-[16px] text-black-primary"
              inputType="text"
              identifier="title"
              onChangeCb={(e) => console.log(e)}
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-black-primary">
              Description
            </h4>
            <textarea
              name="description"
              id="description"
              cols={15}
              rows={15}
              className="border border-gray-300 w-full resize-none rounded-md p-4"
            />
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Image 512 * 512</p>
            <label
              htmlFor="media"
              className="cursor-pointer border border-[#AEB4B9] border-dashed p-4 flex flex-col justify-center items-center gap-2 w-full h-[312px] rounded-md text-gray-300"
            >
              <p className="p-2 bg-gray-[#FAFBFB]">Add files</p>
              <p>Add from URL</p>
              <input type="file" name="media" id="media" className="hidden" />
            </label>
          </div>
          <Button>Save setting</Button>
        </div>
      </div>
    </div>
  );
};

export default EditBrandSection;
