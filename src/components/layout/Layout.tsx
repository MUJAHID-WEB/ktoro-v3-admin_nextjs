import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen flex">
            {/* sidebar  */}
            <div className="min-h-screen w-[280px] fixed">
                <Sidebar />
            </div>
            {/* main section  */}
            <main className="w-full py-4 px-10 ms-[280px]">
                {/* header  */}
                <Header />
                {/* main component  */}
                {children}
            </main>
        </div>
    );
};

export default Layout;
