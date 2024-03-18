import React from "react";
import Image from "next/image";
import TextField from "../base/TextField";
import Button from "../base/Button";
import BreadCrumb from "../base/BreadCrumb";

const AddCategoryPage = () => {
  const paths = [
    { title: "Dashboard", url: "/" },
    { title: "Categories", url: "/categories" },
    { title: "Add", url: "/categories/add" },
  ];
  return (
    <section className="mt-8">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <div className="mt-8 flex gap-4 bg-white p-8">
        <div className="space-y-8 flex-[3]">
          <div className="bg-white p-6 rounded-md space-y-4 border border-gray-300">
            <div>
              <TextField
                label="Title*"
                labelClass="!font-semibold"
                inputType="text"
                identifier="title"
                onChangeCb={(e) => console.log(e)}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <textarea
                name="description"
                id="description"
                cols={15}
                rows={15}
                className="border border-[#AEB4B9] w-full resize-none rounded-md p-4"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="bg-white p-6 rounded-md space-y-8 border border-gray-300">
            <TextField
              label="Printing?"
              labelClass="text-lg font-semibold mb-4"
              identifier="printing"
              onChangeCb={(e) => console.log(e)}
              inputType="text"
              placeholder="0"
            />
            <TextField
              label="Status*"
              labelClass="text-lg font-semibold mb-4"
              identifier="status"
              onChangeCb={(e) => console.log(e)}
              inputType="text"
              placeholder="0"
            />
            <TextField
              label="Status*"
              labelClass="text-lg font-semibold mb-4"
              identifier="status"
              onChangeCb={(e) => console.log(e)}
              inputType="text"
              placeholder="0"
            />
            <TextField
              label="Main Category"
              labelClass="text-lg font-semibold mb-4"
              identifier="main-category"
              onChangeCb={(e) => console.log(e)}
              inputType="text"
              placeholder="0"
            />
            <TextField
              label="Sub Category"
              labelClass="text-lg font-semibold mb-4"
              identifier="sub-category"
              onChangeCb={(e) => console.log(e)}
              inputType="text"
              placeholder="0"
            />
            <div>
              <p className="text-lg font-semibold mb-4">Image 512 * 512</p>
              <label
                htmlFor="media"
                className="cursor-pointer border border-[#AEB4B9] border-dashed p-4 flex flex-col justify-center items-center gap-2 w-full h-[312px] rounded-md text-gray-300"
              >
                <p className="p-2 bg-gray-[#FAFBFB]">Add files</p>
                <p>Add from URL</p>
                <input type="file" name="media" id="media" className="hidden" />
              </label>
            </div>
          </div>
          <Button className="w-full">Save Settings</Button>
        </div>
      </div>
    </section>
  );
};

export default AddCategoryPage;
