import TextField from "@/components/base/TextField";
import React from "react";

const NotificationSection = () => {
  return (
    <div className="flex gap-6">
      <div className="border p-6 rounded-md flex-1">
        <h2 className="font-semibold">Add Notification</h2>
        <form action="#" className="space-y-4">
          <TextField
            identifier="title"
            label="Title"
            onChangeCb={() => {}}
            required
          />
          <TextField
            identifier="link"
            label="Link"
            onChangeCb={() => {}}
            required
          />
          <TextField
            identifier="description"
            label="Description"
            onChangeCb={() => {}}
            required
          />
        </form>
      </div>
      <div className="border p-6 rounded-md flex-[2]">2</div>
    </div>
  );
};

export default NotificationSection;
