import BreadCrumb from "@/components/base/BreadCrumb";
import CustomersTable from "@/components/customers/CustomersTable";
import Layout from "@/components/layout/Layout";
import React from "react";

const paths = [
    { title: "Dashboard", url: "/" },
    { title: "Customer", url: "/customers" },
];
const CustomerPage = () => {
    return (
        <Layout>
            <div className="mt-9">
                <BreadCrumb paths={paths} separator="●" />
                <hr className="mt-4 mb-5" />

                {/* table  */}
                <CustomersTable />
            </div>
        </Layout>
    );
};

export default CustomerPage;
