import React from "react";
import BreadCrumb from "@/components/base/BreadCrumb";
import TextField from "@/components/base/TextField";
import Button from "@/components/base/Button";
import SelectedField from "@/components/base/SelectedField";
import Tabs from "@/components/base/Tabs";
import RoleManageContent from "./RoleManageContent";

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
    title: "Role",
    url: "/settings/users/role",
  },
];

const companySelectedFields = ["Company 1", "Company 2", "Company 3"];

const tabs = [
  {
    label: "Company 1",
    content: <RoleManageContent />,
  },
  {
    label: "Company 2",
    content: <RoleManageContent />,
  },
  {
    label: "Company 3",
    content: <RoleManageContent />,
  },
];

const RoleSection = () => {
  return (
    <div className="mt-4">
      <BreadCrumb paths={paths} separator="●" />
      <hr className="my-4" />
      <form action="#">
        <div className="bg-white p-6 rounded-md mb-6">
          <div className="text-right">
            <Button>Save Role</Button>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="w-full md:w-96">
              <TextField
                identifier="role"
                label="Role Name"
                labelClass="font-semibold"
                onChangeCb={() => {}}
                required
              />
            </span>
            <span className="w-full md:w-96">
              <TextField
                identifier="password"
                label="Password"
                labelClass="font-semibold"
                inputType="password"
                onChangeCb={() => {}}
                required
              />
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md">
          <div className="w-full md:w-96">
            <SelectedField
              identifier="company"
              options={companySelectedFields}
              placeholder="Select your company"
              label="Company"
              labelClass="font-semibold"
              required
            />
          </div>
          <div className="mt-8">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RoleSection;
