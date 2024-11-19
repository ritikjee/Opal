import Navbar from "@/components/website/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="felx felx-col py-10 px-10 xl:px-0 container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
