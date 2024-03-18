import { useRouter } from "next/router";
import React from "react";

const Columns = () => {
    const router = useRouter();
    let { locale } = router;

    return (
        <div className="absolute top-[60px] right-0 bg-white p-4 border rounded-md z-50 w-96">
            {locale === "ar" ? (
                <h4 className="font-semibold">مرئي 41 من أصل 26</h4>
            ) : (
                <h4 className="font-semibold">Visible 41 Of Out 26</h4>
            )}

            <div className="flex border-t border-b py-2 max-h-[204px] overflow-auto my-2">
                <ul className="space-y-2 flex-1">
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="id" id="id" />
                        <label htmlFor="id">ID</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="purchase-date"
                            id="purchase-date"
                        />
                        <label htmlFor="purchase-date">Purchase Date</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="subtotal" id="subtotal" />
                        <label htmlFor="subtotal">Subtotal</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="sub-state"
                            id="sub-state"
                        />
                        <label htmlFor="sub-state">Sub States</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="customer-name"
                            id="customer-name"
                        />
                        <label htmlFor="customer-name">Customer Name</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="action" id="action" />
                        <label htmlFor="action">Action</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="payment-method"
                            id="payment-method"
                        />
                        <label htmlFor="payment-method">Payment Method</label>
                    </li>
                </ul>
                <ul className="space-y-2 flex-1">
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="id" id="id" />
                        <label htmlFor="id">ID</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="purchase-date"
                            id="purchase-date"
                        />
                        <label htmlFor="purchase-date">Purchase Date</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="subtotal" id="subtotal" />
                        <label htmlFor="subtotal">Subtotal</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="sub-state"
                            id="sub-state"
                        />
                        <label htmlFor="sub-state">Sub States</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="customer-name"
                            id="customer-name"
                        />
                        <label htmlFor="customer-name">Customer Name</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input type="checkbox" name="action" id="action" />
                        <label htmlFor="action">Action</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="payment-method"
                            id="payment-method"
                        />
                        <label htmlFor="payment-method">Payment Method</label>
                    </li>
                </ul>
            </div>

            {/* button  */}
            <div className="flex justify-between items-center">
                <button className="text-base font-medium text-blue-700">
                    Save
                </button>
                <button className="text-base font-medium text-blue-700">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Columns;
