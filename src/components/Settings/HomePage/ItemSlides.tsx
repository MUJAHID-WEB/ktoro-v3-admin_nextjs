import React, { useState } from "react";
import Table from "@/components/Table/Table";
import Visibility from "@/components/svg/Visibility";
import Badge from "@/components/base/Badge";
import Modal from "@/components/modals/Modal";
import SelectedField from "@/components/base/SelectedField";
import Button from "@/components/base/Button";

const tableColumn = [
  {
    heading: "Slider Number",
    value: "number",
  },
  {
    heading: "Type",
    value: "type",
  },
  {
    heading: "Category",
    value: "category",
  },
  {
    heading: "SKU",
    value: "sku",
    CustomComponent: ({ item }: any) => {
      const { sku } = item;
      const checkArray = Array.isArray(sku);
      return (
        <div className="flex gap-4">
          {checkArray
            ? sku.map((sk, ind) => (
                <Badge
                  key={ind}
                  text={sk}
                  badgeClass="!bg-gray-200"
                  status
                  statusClass="!bg-gray-500"
                />
              ))
            : "//"}
        </div>
      );
    },
  },
  {
    heading: "Actions",
    value: "actions",
    CustomComponent: ({ item }: any) => {
      const [isModalOpen, setModalOpen] = useState<boolean>(false);
      const { actions } = item;

      const urlOptions = [""];

      const sellingOptions = [
        "Pre Order",
        "Best Selling",
        "New Arrival",
        "Custom",
      ];

      const categoryOptions = ["Album", "Toys"];

      return (
        <div>
          <Modal
            open={isModalOpen}
            setOpen={setModalOpen}
            modalClass="mx-auto p-6 h-[600px]"
          >
            <form action="#">
              <h3 className="font-semibold text-xl">Item Slides</h3>
              <div className="border p-4 mt-4 rounded-md space-y-4">
                <SelectedField
                  identifier="url"
                  label="View All URL"
                  labelClass="font-semibold"
                  options={urlOptions}
                  placeholder="Select your URL"
                  required
                />
                <SelectedField
                  identifier="sellingOption"
                  label="Type In English"
                  labelClass="font-semibold"
                  options={sellingOptions}
                  placeholder="Select your options"
                  required
                />
                <SelectedField
                  identifier="sellingOption"
                  label="Type In Arabic"
                  labelClass="font-semibold"
                  options={sellingOptions}
                  placeholder="Select your options"
                  required
                />
                <SelectedField
                  identifier="category"
                  label="Category"
                  labelClass="font-semibold"
                  options={categoryOptions}
                  placeholder="Select your options"
                  required
                />
                <SelectedField
                  identifier="sku"
                  label="SKU"
                  labelClass="font-semibold"
                  options={categoryOptions}
                  placeholder="Select your options"
                  required
                />
              </div>
              <Button type="submit" className="mt-4 w-full">
                Save
              </Button>
            </form>
          </Modal>
          <button onClick={() => setModalOpen(!isModalOpen)}>{actions}</button>
        </div>
      );
    },
  },
];

const tableData = [
  {
    number: "Slider 1",
    type: "Pre Order",
    category: "Albums",
    sku: "//",
    actions: <Visibility fill="#787878" />,
  },
  {
    number: "Slider 2",
    type: "Best Selling",
    category: "//",
    sku: ["2344", "2345", "2346", "23443", "23448", "23447", "23449", "32554"],
    actions: <Visibility fill="#787878" />,
  },
  {
    number: "Slider 3",
    type: "Pre Order",
    category: "Albums",
    sku: "//",
    actions: <Visibility fill="#787878" />,
  },
  {
    number: "Slider 4",
    type: "New Arrival",
    category: "//",
    sku: ["2344", "2345", "2346", "23443", "23448", "23447", "23449", "32554"],
    actions: <Visibility fill="#787878" />,
  },
  {
    number: "Slider 5",
    type: "Pre Order",
    category: "Albums",
    sku: "//",
    actions: <Visibility fill="#787878" />,
  },
];

const ItemSlides = () => {
  return (
    <div>
      <Table column={tableColumn} tableData={tableData} />
    </div>
  );
};

export default ItemSlides;
