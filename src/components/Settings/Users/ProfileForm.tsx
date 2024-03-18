import React from "react";
import TextField from "@/components/base/TextField";
import SelectedField from "@/components/base/SelectedField";
import Button from "@/components/base/Button";
import Image from "next/image";

const roleOptions = ["Admin", "User"];

const genderOptions = ["Male", "Female"];

const ProfileForm = () => {
  return (
    <div className="flex gap-6">
      <div className="flex-1 border p-4 rounded-md flex justify-center items-center">
        <Image
          src="/images/avatar.png"
          width={100}
          height={100}
          alt="profile"
        />
      </div>
      <div className="flex-[2] border p-4 rounded-md">
        <form className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                label="Name"
                identifier="name"
                placeholder="Name"
                onChangeCb={() => {}}
                groupClass="w-full"
                required
                labelClass="font-semibold"
                inputClass="px-1 py-1"
              />
            </div>
            <div className="flex-1">
              <TextField
                label="Email"
                identifier="email"
                placeholder="Email"
                onChangeCb={() => {}}
                groupClass="w-full"
                required
                labelClass="font-semibold"
                inputClass="px-1 py-1"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                label="Phone"
                identifier="phone"
                placeholder="Phone"
                onChangeCb={() => {}}
                groupClass="w-full"
                required
                labelClass="font-semibold"
                inputClass="px-1 py-1"
              />
            </div>
            <div className="flex-1">
              <SelectedField
                identifier="role"
                label="Role"
                options={roleOptions}
                labelClass="font-semibold"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <SelectedField
                identifier="gender"
                label="Gender"
                options={genderOptions}
                labelClass="font-semibold"
                required
              />
            </div>
            <div className="flex-1">
              <TextField
                label="Password"
                identifier="password"
                placeholder="Password"
                onChangeCb={() => {}}
                groupClass="w-full"
                required
                labelClass="font-semibold"
                inputClass="px-1 py-1"
                inputType="password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
