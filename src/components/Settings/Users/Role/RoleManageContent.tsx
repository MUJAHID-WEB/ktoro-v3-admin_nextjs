import React from "react";
import SelectedField from "@/components/base/SelectedField";
import { roles } from "@/static";

const options = ["Custom 1", "Custom 2", "Custom 3"];

const RoleRow = ({ title, nesRole }: any) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2">
          <span className="flex gap-1">
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </span>
          <span>{title}</span>
        </div>
        {nesRole.map((role: any) => (
          <div key={role.title} className="ml-10 flex items-center gap-2">
            <span className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
            </span>
            {role.title}
          </div>
        ))}
      </div>
    </div>
  );
};

const RoleManageContent = () => {
  return (
    <div>
      <SelectedField
        identifier="resource-access"
        label="Resource Access"
        labelClass="font-semibold"
        options={options}
        groupClass="!w-96"
        placeholder="Select Resource"
      />
      <div className="mt-6 space-y-4">
        {roles.map((role) => (
          <RoleRow key={role.title} {...role} />
        ))}
      </div>
    </div>
  );
};

export default RoleManageContent;
