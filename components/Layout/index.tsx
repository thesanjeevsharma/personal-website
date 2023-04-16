import React from "react";
import { Header, Footer } from "~/components";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full md:w-content md:mx-auto">
      <Header />
      <main className="px-4 py-4 pb-8 md:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
