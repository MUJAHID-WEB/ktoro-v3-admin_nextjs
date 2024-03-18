import React, { FormEvent, useState } from "react";
import Edit from "../svg/Edit";
import Modal from "../modals/Modal";
import TextField from "../base/TextField";
import SelectedField from "../base/SelectedField";

const AddCoupon = ({ modalOpen, setModalOpen }: any) => {
  const couponType = ["Radio", "Number"];
  const couponDuration = ["Limited", "Unlimited"];
  const startDate = ["Today", "Tomorrow"];
  const endDate = ["Today", "Tomorrow"];

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal open={modalOpen} setOpen={setModalOpen} modalClass="p-6 !h-auto">
        <form onSubmit={handleForm}>
          <h3 className="text-lg font-semibold mb-4">Add a coupon</h3>
          <div className="space-y-6">
            <div className="border rounded-md p-4">
              <TextField
                identifier="name"
                label="Coupon Name"
                labelClass="!font-semibold mb-3"
                onChangeCb={() => {}}
                inputClass="p-1"
                placeholder="Add the coupon name"
                required
              />
            </div>
            <div className="border rounded-md p-4">
              <SelectedField
                identifier="type"
                label="Coupon Type"
                labelClass="!font-semibold mb-3"
                options={couponType}
                required
                groupClass="mb-4"
              />
              <TextField
                identifier="value"
                label="Discount Value"
                labelClass="!font-semibold mb-3"
                onChangeCb={() => {}}
                inputClass="p-1"
                required
              />
            </div>
            <div className="border rounded-md p-4">
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <SelectedField
                    identifier="start"
                    label="Start Date"
                    labelClass="!font-semibold mb-3"
                    options={startDate}
                    required
                  />
                </div>
                <div className="flex-1">
                  <SelectedField
                    identifier="end"
                    label="End Date"
                    labelClass="!font-semibold mb-3"
                    options={endDate}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <SelectedField
                    identifier="users"
                    label="Number Of Users"
                    labelClass="!font-semibold mb-3"
                    options={couponDuration}
                    required
                  />
                </div>
                <div className="flex-1">
                  <TextField
                    identifier="total"
                    // label="End Date"
                    labelClass="!font-semibold"
                    onChangeCb={() => {}}
                    required
                    groupClass="mt-6"
                    inputClass="p-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              className="btn text-blue-500 font-semibold"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button className="btn text-blue-500 font-semibold" type="submit">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddCoupon;
